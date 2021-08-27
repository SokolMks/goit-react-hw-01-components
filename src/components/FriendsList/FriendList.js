import PropTypes from 'prop-types';
import style from './FriendList.module.css';
import FriendListItem from './FriendListItem';

function FriendList ({ friends })  {
  return (
    <ul className={style.friendList}>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friends={friend} />
      ))}
    </ul>
  )
};


FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

export default FriendList;