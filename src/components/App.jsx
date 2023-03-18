import user from '../data/user'
import stats from '../data/data'
import friends from '../data/friends'
import transactions from '../data/transactions';
import {Profile} from './Profile/Profile'
import {Statistics} from './Statistics/Statistics'
import {FriendList} from './FriendList/FriendList'
import {TransactionHistory} from './TransactionHistory/TransactionHistory'
import css from './Profile/Profile.module.css'
export const App = () => {
  return (
    <div>
      <Profile className={css.profile} user={user} />
      <Statistics stats={stats}/>
      <FriendList friends={friends}/>
      <TransactionHistory transactions={transactions}/>;
    </div>
  );
};
