import { useEffect, useState } from 'react';
import { Button } from '../ui/button/button';
import { observer } from 'mobx-react-lite';
import { StoreTypes } from '../../store/store-types';
import cx from 'classnames';
import { store } from '../../store/store';
import styles from './friend.module.scss';

type FriendType = {
  friend: StoreTypes.FriendsObjectType;
};
export const Friend = observer(({ friend }: FriendType) => {

  return (
    <li className={cx(styles.list__item, { [styles.active]: store.isActive })}>
      <img src={friend.image} alt={friend.name} />
      <div>
        <h3>{friend.name}</h3>
          {friend.balance === 0 && <p>You and {friend.name} are even</p>}
          {friend.balance > 0 && <p className={friend.balance > 0 ? styles.green : ''}> {friend.name} owes you {friend.balance}$</p>}
          {friend.balance < 0 && <p className={cx({[styles.red]: friend.balance < 0})}>You owe {friend.name} {Math.abs(friend.balance)}$</p>}
      </div>
      <Button
        type={'button'}
        btnStyleType={'small'}
        onClick={() => {
            store.selectActiveFriend(friend.id);
        }}
      >
        Select
      </Button>
    </li>
  );
});
