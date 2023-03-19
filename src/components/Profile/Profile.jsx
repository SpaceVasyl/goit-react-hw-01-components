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
      className="avatar"
    />
    <p className="name">{username}</p>
    <p className="tag">{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity"> {followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity"> {views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity"> {likes}</span>
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