import PropTypes from 'prop-types';

import { MovieList, MovieItem } from './UsersList.styled';

export const UsersList = ({ users }) => {
  if (!users) {
    return;
  }

  return (
    <MovieList>
      {users.map(({ id, user, tweets, followers, avatar }) => (
        <MovieItem key={id}>{user}</MovieItem>
      ))}
    </MovieList>
  );
};
UsersList.propTypes = {
  users: PropTypes.array.isRequired,
};
