import Comment from 'components/Comment';

import SouthIcon from '@mui/icons-material/South';

import { Container, ScrollDiv, Title, TitleContainer } from './styles';

import CreateCommentInput from 'components/CreateCommentInput';
import { IProps } from './IProps';

function RepliesList({ selectedComment }: IProps) {
  return (
    <Container>
      <TitleContainer>
        <Title>Replies ({selectedComment.replies.length})</Title>
        <SouthIcon />
      </TitleContainer>

      <ScrollDiv>
        {selectedComment.replies.map((reply) => (
          <Comment key={reply.id} isReply comment={{ ...reply, replies: [] }} />
        ))}
      </ScrollDiv>

      <CreateCommentInput replyCommentId={selectedComment.id} />
    </Container>
  );
}
export default RepliesList;
