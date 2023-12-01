export type IComment = {
  id: string;
  postId: string;
  username: string;
  userId: string;
  userImage: string;
  text: string;
  createAt: string;
  repliedToCommentId?: string;
};
