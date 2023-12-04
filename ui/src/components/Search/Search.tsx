import { useEffect, useState } from 'react';
import { Input } from './styles';
import { useAppDispatch } from 'state_management/hooks';
import { searchPosts } from 'state_management/actions/posts/posts.actions';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      dispatch(searchPosts(searchValue));
    }, 0.5 * 1000); // 0.5 second

    return () => clearTimeout(delayDebounceFn);
  }, [searchValue]);

  return <Input onChange={(e) => setSearchValue(e.target.value)} value={searchValue} />;
}

export default Search;
