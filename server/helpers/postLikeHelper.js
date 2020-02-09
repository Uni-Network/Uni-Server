import db,{ post_like as PostLike } from '../models';
import eConst from '../utils/errorsManager/errorTypes';
import { handleError } from '../utils/sharedMethodes';
import {selectQueryGenerator} from './postsHelper';




export async function getNumReactionsForApostformDB(postId) {
  try {
    return await PostLike.count({ where: { post_id: postId }});
  } catch (e) {
    handleError(e);
  }
  return null;
}

export async function getUserReactionsFromDB(postId, { offset, limit } = { offset: 0, limit: 3 }) {
    try {
      const dataQuery = `SELECT user1.user_id, user1.firstname, user1.lastname, user1.thumbnail_link, like_type1.like_type_name
          FROM  theuser  user1, like_type  like_type1
          WHERE (user1.user_id IN (SELECT user_id FROM post_like where post_id = ${postId})           
          AND like_type1.like_type_id IN (SELECT like_type_id FROM post_like where user_id = user1.user_id  AND  post_id = ${postId})) 
          OFFSET ${offset} LIMIT ${limit}`;
      const rows = await selectQueryGenerator(dataQuery)     
      return { page: (offset / limit + 1), limit, rows };
    } catch (e) {
      handleError(e);
    }
    return null;
  }
  
 