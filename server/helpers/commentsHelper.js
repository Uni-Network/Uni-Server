import db,{ comment as Comment, group as Group } from '../models';
import eConst from '../utils/errorsManager/errorTypes';
import { handleError } from '../utils/sharedMethodes';
import { userInGroup } from './groupsHelper';
import { getPost } from './postsHelper';




export async function getComment(commentId) {
  try {
    return await Comment.findById(commentId);
  } catch (e) {
    handleError(e);
  }
  return null;
}


export async function CommentAPostInDB(userId, postId, groupId, comment) {
  
  try {
    const results = await Promise.all([getPost(postId), userInGroup(userId, groupId)]);
    const [commentedPost, isUserInGroup] = results;
    if (commentedPost) {
      if (
        isUserInGroup
        && groupId === commentedPost.group_id
        && commentedPost.is_deleted === false
      ) {
        return await Comment.create({ text: comment.text, post_id: postId, user_id: userId });
        console.log(isUserInGroup
          && groupId === commentedPost.group_id
          && commentedPost.is_deleted === false);
      }
      handleError(eConst.UNAUTHORIZED);
      console.log(isUserInGroup
        && groupId === commentedPost.group_id
        && commentedPost.is_deleted === false);
    } else {
      handleError(eConst.NOTFOUND);
    }
  } catch (e) {
    handleError(e);
  }
  return null;
  }



  export async function GetCommentsOfPostFromDB(postId) {
    try {
      const commentedPost = await getPost(postId);
      if(commentedPost.is_deleted === false){
        return await Comment.findAll({ where: { post_id: postId, is_deleted: false } });
      }
    } catch (e) {
      handleError(e);
    }
    return null;
    }


    export async function deleteCommentFromDB(commentId, userId, postId, groupId) {
      
      try {
        const commentedPost = await getPost(postId);
        const theComment = await getComment(commentId);
        const isUserInGroup = await userInGroup(userId, groupId);
    
        if (commentedPost && theComment) {
          if (
            isUserInGroup
            && groupId === commentedPost.group_id
            && userId === theComment.user_id
            && commentedPost.is_deleted === false
            && theComment.is_deleted === false

          ) {
            return await Comment.update({ is_deleted: true }, { where: {
              comment_id: commentId,
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




    export async function updateCommentFromDB(commentId, userId, postId, groupId , updatetedComment) {
      
      try {
        const commentedPost = await getPost(postId);
        const theComment = await getComment(commentId);
        const isUserInGroup = await userInGroup(userId, groupId);
    
        if (commentedPost && theComment) {
          if (
            isUserInGroup
            && groupId === commentedPost.group_id
            && userId === theComment.user_id
            && commentedPost.is_deleted === false
            && theComment.is_deleted === false

          ) {
            return await Comment.update({ text: updatetedComment.text }, { where: {
              comment_id: commentId,
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
