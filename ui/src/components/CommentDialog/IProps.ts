import { ICommentsWithReplies } from 'state_management/reducers/comments/comments.reducer';

export interface IProps {
  open: boolean;
  selectedComment: ICommentsWithReplies;
}
