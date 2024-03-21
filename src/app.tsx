import { AddFriendForm } from './components/add-friend-form/add-friend-form';
import { FriendList } from './components/friend-list/friend-list';
import { SplitForm } from './components/split-form/stlit-form';
import { observer } from 'mobx-react-lite';
import { store } from './store/store';
import styles from './app.module.scss';

const App = observer(() => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSide}>
        <FriendList />
        <AddFriendForm />
      </div>
      <div className={styles.rightSide}>{store.friend?.name && <SplitForm />}</div>
    </div>
  );
});
export default App;
