import { IProps } from './IProps';
import { PostPageContainer } from './styles';

const PostPage = ({ post }: IProps): JSX.Element => {
  if (!post) {
    return (
      <PostPageContainer>
        <h1>Error</h1>
      </PostPageContainer>
    );
  }

  return (
    <PostPageContainer>
      <h1>{post.title}</h1>
    </PostPageContainer>
  );
};
export default PostPage;
