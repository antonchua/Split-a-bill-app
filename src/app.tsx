import styles from './app.module.scss';
import { AddFriendForm } from './add-friend-form/add-friend-form';
import { FriendList } from './components/friend-list/friend-list';
import { SplitForm } from './components/split-form/stlit-form';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSide}>
        <FriendList />
        <AddFriendForm />
      </div>
      <div className={styles.rightSide}>
        <SplitForm />
      </div>
    </div>
  );
};
export default App;
