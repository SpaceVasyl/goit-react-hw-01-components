import css from './FriendList.module.css'
export const FriendList = ({friends}) => (
    <ul className={css.friendList}>
    {friends.map(friend=> (<li key={friend.id} className={css.item}><div className={css.status}>
        {friend.isOnline === true
          ? <div className={css.trues}></div>
          : <div className={css.falces}></div>}
    </div>
    <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
    <p className={css.name}>{friend.name}</p>
    </li>))}
    </ul>
)