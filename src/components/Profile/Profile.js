import React from 'react';
import PropTypes from 'prop-types';
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

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

Profile.defaultProps = {
  name: 'User name',
  tag: '@User tag',
  location: 'User location',
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg',
  stats: {
    followers: '0',
    views: '0',
    likes: '0',
  },
};


export default Profile;