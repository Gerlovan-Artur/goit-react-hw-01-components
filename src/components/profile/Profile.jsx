import styles from '../Profile/Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({ username, avatar, location, tag, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>
            <br />
            {stats.followers}
          </span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>
            <br />
            {stats.views}
          </span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>
            <br />
            {stats.likes}
          </span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};