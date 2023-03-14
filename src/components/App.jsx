import user from '../data/user'
import stats from '../data/data'
import {Profile} from './Profile/Profile'
import {Statistics} from './Statistics/Statistics'
import css from './Profile/Profile.module.css'
export const App = () => {
  return (
    <div>
      <Profile className={css.profile} user={user} />
      <Statistics stats={stats}/>
    </div>
  );
};
