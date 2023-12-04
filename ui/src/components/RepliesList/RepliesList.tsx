import Comment from 'components/Comment';

import SouthIcon from '@mui/icons-material/South';

import { Container, ScrollDiv, Title, TitleContainer } from './styles';

import CreateCommentInput from 'components/CreateCommentInput';
import { IProps } from './IProps';

function RepliesList({ replies, replyToCommentId }: IProps) {
  return (
    <Container>
      <TitleContainer>
        <Title>Replies ({replies.length})</Title>
        <SouthIcon />
      </TitleContainer>

      <ScrollDiv>
        {replies.map((reply) => (
          <Comment key={reply.id} isReply comment={{ ...reply, replies: [] }} />
        ))}
      </ScrollDiv>

      <CreateCommentInput replyToCommentId={replyToCommentId} />
    </Container>
  );
}
export default RepliesList;
