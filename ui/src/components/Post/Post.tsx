import { useNavigate } from 'react-router-dom';
import { IProps } from './IProps';
import { ImageContainer, Image, PostContainer, Title, Description, BodyContainer } from './styles';
import { getPostById } from 'state_management/actions/posts/posts.actions';
import { useAppDispatch } from 'state_management/hooks';

function Post({ item }: IProps) {
  const { title, body, image, id } = item;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = (): void => {
    // @ts-ignore
    dispatch(getPostById(id));

    navigate(`/post/${id}`);
  };

  return (
    <PostContainer onClick={handleClick} data-testid="post-test-id">
      <ImageContainer>
        <Image src={image} alt="" />
      </ImageContainer>
      <BodyContainer>
        <Title>{title}</Title>
        <Description>{body}</Description>
      </BodyContainer>
    </PostContainer>
  );
}
export default Post;
