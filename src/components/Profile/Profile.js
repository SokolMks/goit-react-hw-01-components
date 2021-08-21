import React from 'react';
import style from './Profile.module.css';

const Profile = ({ avatar, name, tag, location, followers, views,likes}) => {
    return (
    <div className={style.profile}>
  <div className={style.description}>
    <img
        src={avatar}
      alt="Avatar"
      className={style.avatar}
    />
    <p className={style.name}>{name}</p>
    <p className={style.tag}>@{tag}</p>
    <p className={style.location}>{location}</p>
  </div>

  <ul className={style.stats}>
    <li className={style.stats__item}>
      <span className="label">Followers</span>
      <span className="quantity"> {followers}</span>
    </li>
    <li className={style.stats__item}>
      <span className="label">Views</span>
      <span className="quantity"> {views}</span>
    </li>
    <li className={style.stats__item}>
      <span className="label">Likes</span>
      <span className="quantity"> {likes}</span>
    </li>
  </ul>
</div>
)
}
export default Profile