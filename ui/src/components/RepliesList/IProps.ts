import { IComment } from 'modals/comments/Modals';

export interface IProps {
  replies: Array<IComment>;
  replyToCommentId: string;
}
