import Comment from 'components/Comment';

import SouthIcon from '@mui/icons-material/South';

import { Container, ScrollDiv, Title, TitleContainer } from './styles';

import CreateCommentInput from 'components/CreateCommentInput';
import { IProps } from './IProps';

function RepliesList({ replies }: IProps) {
  return (
    <Container>
      <TitleContainer>
        <Title>Comments ({replies.length})</Title>
        <SouthIcon />
      </TitleContainer>

      <ScrollDiv>
        {replies.map((reply) => (
          <Comment key={reply.id} isReply comment={{ ...reply, replies: [] }} />
        ))}
      </ScrollDiv>

      <CreateCommentInput />
    </Container>
  );
}
export default RepliesList;
