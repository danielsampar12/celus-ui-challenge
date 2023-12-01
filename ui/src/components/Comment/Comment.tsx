import { formatDistanceToNow } from 'utils/formatDistanceToNow';
import { IProps } from './IProps';
import { Container, Footer, Header, ReplyButton, ReplyText, Text, Time, UserImage, UserName } from './styles';

const Comment = ({ comment }: IProps): JSX.Element => {
  return (
    <Container>
      <Header>
        <UserImage alt="User icon" src={comment.userImage} />
        <UserName>{comment.username}</UserName>
      </Header>

      <Text>{comment.text}</Text>

      <Footer>
        <Time>{formatDistanceToNow(comment.createAt)}</Time>

        <ReplyButton
          onClick={() => {
            console.log('hi');
          }}
        >
          <ReplyText>REPLY</ReplyText>
        </ReplyButton>
      </Footer>
    </Container>
  );
};
export default Comment;
