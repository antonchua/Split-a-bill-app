import { Friend } from '../friend/friend';
import { observer } from 'mobx-react-lite';
import { store } from '../../store/store';
import styles from './friend-list.module.scss';
import { useEffect } from 'react';

export const FriendList = observer(() => {
  useEffect(() => {
    store.fetchList();
  }, []);
  return (
    <ul className={styles.list__wrapper}>
      {store.friendList.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
});
