import PropTypes from 'prop-types';
import style from './FriendList.module.css'

const FriendListItem = ({ friends }) => {
  return (
          friends.map(friend => (
            <li className={style.item} key={friend.id}>
              <span className={ friend.isOnline  ? style.status : style.offline} />
              <img className={style.avatar} src={friend.avatar} alt={friend.name} width="48" />
              <p className="name">{friend.name}</p>
            </li>
      ))
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

FriendListItem.defaultProps = {
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg',
  name: 'User name',
  isOnline: false,
};

export default FriendListItem;