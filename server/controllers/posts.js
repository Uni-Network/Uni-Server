import { responseError } from '../utils/errorsManager/error-responses';
import { createPostInDB, deletePostFromDB, updatePostInDB } from '../helpers/postsHelper';


export async function createPost(req, res) {
  const userId = req.user.user_id;
  const groupId = req.body.group_id;
  try {
    res.json(await createPostInDB(userId, groupId, req.body.post));
  } catch (e) {
    responseError(e, res);
  }
}

export async function updatePost(req, res) {
  const userId = req.user.user_id;
  const postId = req.params.post_id;
  try {
    res.json(await updatePostInDB(postId, userId, req.body.post));
  } catch (e) {
    responseError(e, res);
  }
}
export async function deletePost(req, res) {
  const userId = req.user.user_id;
  const postId = req.params.post_id;
  try {
    res.json(await deletePostFromDB(postId, userId));
  } catch (e) {
    responseError(e, res);
  }
}
