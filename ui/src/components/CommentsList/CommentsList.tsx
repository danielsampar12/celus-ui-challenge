import Comment from 'components/Comment';

import { Container, ScrollDiv, Title } from './styles';
import { useAppSelector } from 'state_management/hooks';
import { AppState } from 'state_management/store';
import CreateCommentInput from 'components/CreateCommentInput';

function CommentsList() {
  const { comments } = useAppSelector((state: AppState) => state.comments);

  return (
    <Container>
      <Title>Comments ({comments.length})</Title>

      <ScrollDiv>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </ScrollDiv>

      <CreateCommentInput />
    </Container>
  );
}
export default CommentsList;
