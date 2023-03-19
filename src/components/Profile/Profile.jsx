import PropTypes from "prop-types";
import css from './Profile.module.css'
// import user from '../data/user';
export const Profile = ({user}) => {
const {avatar, username, tag, location, stats: {followers, views, likes}} = user;
return (<div className={css.profile}>
  <div className="description">
    <img
      src={avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.item}>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}> {followers}</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>Views</span>
      <span className={css.quantity}> {views}</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}> {likes}</span>
    </li>
  </ul>
</div>)}

Profile.propTypes = {
    user: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }).isRequired,
    }),
  };