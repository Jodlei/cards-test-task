import React, { useEffect, useState } from 'react';

import { UsersList } from '../../components/UsersList/UsersList';
import { Container } from './Tweets.styled';

import { fetchContacts } from '../../services/Api';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState([]);

  useEffect(() => {
    fetchContacts(3).then(response => {
      setUsers([...response]);
    });
  }, []);

  return (
    <Container>
      <UsersList users={users} />
    </Container>
  );
};

export default Tweets;
