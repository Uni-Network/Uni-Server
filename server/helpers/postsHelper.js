import { getUserGroupsIdsFromDB, userInGroup } from './groupsHelper';
import db,{ post as Post, group as Group } from '../models';
import eConst from '../utils/errorsManager/errorTypes';
import { handleError } from '../utils/sharedMethodes';
import * as Sequelize from 'sequelize';


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
        const updatedPost = await Post.update(
          { text: updatedPost.text },
          { where: { post_id: postId }, returning: true });
        return updatedPost[1][0];
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

export async function getGroupPostsFromDB(userId, groupId) {
  try {
    if (await userInGroup(userId, groupId)) {
      return await Post.findAll({ where: { group_id: groupId, is_deleted: false } });
    }
    handleError(eConst.UNAUTHORIZED);
  } catch (e) {
    handleError(e);
  }
  return null;
}
export async function selectQueryGenerator(data){
  return await db.sequelize.query(
    data, { type: Sequelize.QueryTypes.SELECT }
  );
}

export async function getUserPostsVisibleFromDB(userId, { offset, limit } = { offset: 0, limit: 3 }) {
  try {
    const dataQuery = `SELECT * FROM post 
        WHERE (group_id IN (SELECT group_id FROM user_groups where user_id = ${userId}) 
        AND (is_deleted = false)) ORDER BY \"createdAt\" DESC OFFSET ${offset} LIMIT ${limit}`;
    const countQuery = `SELECT COUNT(*) as count FROM post 
        WHERE (group_id IN (SELECT group_id FROM user_groups where user_id = ${userId}) 
        AND (is_deleted = false))`;
    const [rows, count] = await Promise.all(
      [selectQueryGenerator(dataQuery), selectQueryGenerator(countQuery)]
    );
    return { count: count[0].count,page: (offset / limit + 1), limit, rows };
  } catch (e) {
    handleError(e);
  }
  return null;
}
