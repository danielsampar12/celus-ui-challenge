import { Container, Input, SendButton, SendText } from './styles';

function CreateCommentInput() {
  return (
    <Container>
      <Input placeholder="Write your comment here..." />
      <SendButton>
        <SendText>SEND</SendText>
      </SendButton>
    </Container>
  );
}

export default CreateCommentInput;
