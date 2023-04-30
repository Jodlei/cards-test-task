import PropTypes from 'prop-types';
import { UserItem } from './UserCard.styled';

export const UsersCard = ({ users }) => {
  if (!users) {
    return;
  }

  return <UserItem></UserItem>;
};
UsersCard.propTypes = {
  users: PropTypes.array.isRequired,
};
