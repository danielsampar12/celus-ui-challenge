import { useParams } from 'react-router-dom';
import { IProps } from './IProps';
import {
  ContentContainer,
  Description,
  Image,
  PostPageContainer,
  ScrollDiv,
  SubTitle,
  Title,
  TitleTextAndComentsContainer,
} from './styles';
import { useEffect } from 'react';
import { useAppDispatch } from 'state_management/hooks';
import { getPostById } from 'state_management/actions/posts/posts.actions';

const PostPage = ({ post }: IProps): JSX.Element => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!post && id) {
      dispatch(getPostById(id));
    }
  }, []);

  if (!post) {
    return (
      <PostPageContainer>
        <h1>Error</h1>
      </PostPageContainer>
    );
  }

  return (
    <PostPageContainer>
      <ContentContainer>
        <Image src={post.image} />
        <TitleTextAndComentsContainer>
          <Title>{post.title}</Title>
          <Description>{post.body}</Description>
          <SubTitle>Comments (2)</SubTitle>
          <ScrollDiv></ScrollDiv>
        </TitleTextAndComentsContainer>
      </ContentContainer>
    </PostPageContainer>
  );
};
export default PostPage;
