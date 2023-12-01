import Comment from 'components/Comment';

import { Container, Title } from './styles';
import { useAppSelector } from 'state_management/hooks';
import { AppState } from 'state_management/store';

const CommentsList = (): JSX.Element => {
  const { comments } = useAppSelector((state: AppState) => state.comments);

  return (
    <Container>
      <Title>Comments ({comments.length})</Title>

      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </Container>
  );
};
export default CommentsList;
