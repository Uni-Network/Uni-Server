import { userInGroup } from './groupsHelper';
import { post as Post } from '../models';

import eConst from '../utils/errorsManager/errorTypes';
import { handleError } from '../utils/sharedMethodes'; // Error Constants

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
