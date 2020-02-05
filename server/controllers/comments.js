import { responseError } from '../utils/errorsManager/error-responses';
import { CommentAPostInDB, GetCommentsOfPostFromDB, deleteCommentFromDB, updateCommentFromDB } from '../helpers/commentsHelper';



export async function CommentAPost(req, res) {
    const userId = req.user.user_id;
    const postId = req.body.post_id;
    const groupId = req.body.group_id;
    const comment = req.body.comment;   
    try {
      res.json(await CommentAPostInDB(userId, postId, groupId, comment));
    } catch (e) {
      responseError(e, res);
    }
  }


  export async function GetCommentsOfPost(req, res) {
    const postId = req.body.post_id;  
    try {
      res.json(await GetCommentsOfPostFromDB(postId) );
    } catch (e) {
      responseError(e, res);
    }
  }


  export async function deleteComment(req, res) {
    const postId = req.body.post_id;  
    const userId = req.body.user_id;
    const groupId = req.body.group_id;
    const commentId = req.body.comment_id;  
    try {
      res.json(await deleteCommentFromDB(commentId, userId, postId, groupId) );
    } catch (e) {
      responseError(e, res);
    }
  }


  export async function updateComment(req, res) {
    const postId = req.body.post_id;  
    const userId = req.body.user_id;
    const groupId = req.body.group_id;
    const commentId = req.body.comment_id;  
    const updatetedComment = req.body.comment; 
    try {
      res.json(await  updateCommentFromDB(commentId, userId, postId, groupId , updatetedComment) );
    } catch (e) {
      responseError(e, res);
    }
  }