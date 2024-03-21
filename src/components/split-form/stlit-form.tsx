import React from 'react';
import { Button } from '../ui/button/button';
import { Input } from '../ui/input/input';
import { ChangeEvent } from 'react';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { store } from '../../store/store';
import styles from './split-form.module.scss';

export const SplitForm = observer(() => {
  const [bill, setBill] = useState('');
  const [userExpense, setUserExpense] = useState('');
  const [friendExpense, setFriendExpense] = useState('');
  const [selectedPayOption, setSelectedPayOption] = useState('user');
  const handleUserExpense = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) > Number(bill)) {
      return;
    }
    setUserExpense(e.target.value);
    const remainder = Number(bill) - Number(e.target.value);
    setFriendExpense(remainder.toString());
  };
  const handleFriendExpense = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) > Number(bill)) {
      return;
    }
    setFriendExpense(e.target.value);
    const remainder = Number(bill) - Number(e.target.value);
    setUserExpense(remainder.toString());
  };
  const handleForm = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    if (bill.trim().length === 0 || userExpense.trim().length == 0 || friendExpense.trim().length === 0) return;
    store.splitTheBill(userExpense, friendExpense, selectedPayOption);
  };

  return (
    <div className={styles.wrapper}>
      <h1>SPLIT A BILL WITH {store.friend?.name}</h1>
      <form className={styles.form} onSubmit={handleForm}>
        <label htmlFor="billValue">
          Bill value:
          <Input
            type={'number'}
            id={'billValue'}
            name={'billValue'}
            widthType={'small'}
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
        </label>
        <label htmlFor="userExpense">
          Your expense:
          <Input
            disabled={selectedPayOption === store.friend?.name}
            type={'number'}
            id={'userExpense'}
            name={'userExpense'}
            widthType={'small'}
            value={userExpense}
            onChange={handleUserExpense}
          />
        </label>
        <label htmlFor="friendExpense">
          {store.friend?.name} expense:
          <Input
            type={'number'}
            disabled={selectedPayOption === 'user'}
            id={'friendExpense'}
            name={'friendExpense'}
            widthType={'small'}
            value={friendExpense}
            onChange={handleFriendExpense}
          />
        </label>
        <label htmlFor="billPaying">
          Who is paying the bill?:
          <select name="billPaying" id="billPaying" onChange={(e) => setSelectedPayOption(e.target.value)}>
            <option value="user">You</option>
            <option value={store.friend?.name}>{store.friend?.name}</option>
          </select>
        </label>
        <Button type={'submit'} btnStyleType={'medium'}>
          Split bill
        </Button>
      </form>
    </div>
  );
});
