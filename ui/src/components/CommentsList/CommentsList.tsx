import Comment from 'components/Comment';

import { Container, ScrollDiv, Title } from './styles';

import CreateCommentInput from 'components/CreateCommentInput';
import { IProps } from './IProps';

function CommentsList({ comments }: IProps) {
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
