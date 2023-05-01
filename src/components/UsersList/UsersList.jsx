import React, { useEffect, useState } from 'react';

import { fetchTweets } from '../../services/Api';
import useLocalStorage from '../../hooks/useLocaleStorage';

import { LoadMoreButton } from '../LoadMoreButton/LoadMoreButton';
import { TweetsList, ErrorText } from './UsersList.styled';

import TweetItem from '../TweetItem/TweetItem';

export const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isNoData, setIsNoData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [usersIFolow, setUsersIFolow] = useLocalStorage('isFolow', []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchTweets(1);
      setIsLoading(false);
      setUsers([...response.data]);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchTweets(page);
      setIsLoading(false);

      if (response.data.length === 0) {
        setIsNoData(true);
      }

      setUsers(prevUsers => [...prevUsers, ...response.data]);
    };

    if (isLoading) fetchData();
  }, [page, users, isLoading]);

  const loadMoreClickHandler = () => {
    setIsLoading(true);
    setPage(prevValuePage => prevValuePage + 1);
  };

  return (
    <>
      <TweetsList>
        {users.map(({ id, user, tweets, followers, avatar }) => {
          return (
            <TweetItem
              key={id}
              id={id}
              user={user}
              tweets={tweets}
              followers={followers}
              avatar={avatar}
              usersIFolow={usersIFolow}
              setUsersIFolow={setUsersIFolow}
              isFollowing={usersIFolow.includes(id)}
            />
          );
        })}
      </TweetsList>

      {!isNoData ? (
        <LoadMoreButton
          loadMoreClickHandler={loadMoreClickHandler}
          isLoading={isLoading}
        ></LoadMoreButton>
      ) : (
        <ErrorText> Tweets are over </ErrorText>
      )}
    </>
  );
};
