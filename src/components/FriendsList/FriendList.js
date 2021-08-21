import React from 'react';
import style from './FriendList.module.css'

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
          {friends.map(friend => (
              <li className={style.item} key={friend.id}>
                  <span className={ friend.isOnline  ? style.status : style.offline}></span>
          <img className={style.avatar} src={friend.avatar} alt={friend.name} width="48" />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};
export default FriendList;