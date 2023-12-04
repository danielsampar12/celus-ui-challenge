import { useEffect, useState } from 'react';
import { Input } from './styles';
import { useAppDispatch } from 'state_management/hooks';
import { searchPosts } from 'state_management/actions/posts/posts.actions';
import { useLocation } from 'react-router-dom';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useAppDispatch();

  const location = useLocation();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      dispatch(searchPosts(searchValue));
    }, 0.5 * 1000); // 0.5 second

    return () => clearTimeout(delayDebounceFn);
  }, [searchValue]);

  const handleFocus = () => {
    console.log(location);
  };

  return (
    <Input
      placeholder="Search for posts"
      onFocus={handleFocus}
      onChange={(e) => setSearchValue(e.target.value)}
      value={searchValue}
    />
  );
}

export default Search;
