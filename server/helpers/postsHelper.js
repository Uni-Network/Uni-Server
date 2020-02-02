import { userInGroup } from './groupsHelper';
import { post as Post } from '../models';

import eConst from '../utils/errorsManager/errorTypes';
import { handleError } from '../utils/sharedMethodes'; // Error Constants


/**
 * @Basic functions
 */
export async function getPost(postId) {
  try {
    return await Post.findById(postId);
  } catch (e) {
    handleError(e);
  }
  return null;
}


/**
 * @param userId
 * @param groupId
 * @param post
 * @returns {Promise<null|*>}
 */
export async function createPostInDB(userId, groupId, post) {
  if (await userInGroup(userId, groupId)) {
    try {
      return await Post.create({ text: post.text, group_id: groupId, user_id: userId });
    } catch (e) {
      handleError(e);
    }
  } else {
    handleError(eConst.UNAUTHORIZED);
  }
  return null;
}

export async function updatePostInDB(postId, userId, updatedPost) {
  const groupId = updatedPost.group_id;
  try {
    const results = await Promise.all([getPost(postId), userInGroup(userId, groupId)]);
    const [originalPost, isUserInGroup] = results;

    if (originalPost) {
      if (
        isUserInGroup
        && userId === originalPost.user_id
        && groupId === originalPost.group_id
        && originalPost.is_deleted === false
      ) {
        const updatedUser = await Post.update(
          { text: updatedPost.text },
          { where: { post_id: postId }, returning: true });
        return updatedUser[1][0];
      }
      handleError(eConst.UNAUTHORIZED);
    } else {
      handleError(eConst.NOTFOUND);
    }
  } catch (e) {
    handleError(e);
  }
  return null;
}
export async function deletePostFromDB(postId, userId) {
  try {
    const originalPost = await getPost(postId);
    const isUserInGroup = await userInGroup(userId, originalPost.group_id);

    if (originalPost && originalPost.is_deleted !== true) {
      if (isUserInGroup && userId === originalPost.user_id) {
        return await Post.update({ is_deleted: true }, { where: {
          post_id: postId,
        } });
      }
      handleError(eConst.UNAUTHORIZED);
    } else {
      handleError(eConst.NOTFOUND);
    }
  } catch (e) {
    handleError(e);
  }
  return null;
}
