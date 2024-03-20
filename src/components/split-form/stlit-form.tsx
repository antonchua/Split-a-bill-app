import React, { useEffect } from 'react';
import { Button } from '../ui/button/button';
import { Input } from '../ui/input/input';
import { ChangeEvent } from 'react';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { store } from '../../store/store';
import styles from './split-form.module.scss';

export const SplitForm = observer(() => {
  const [bill, setBill] = useState('');
  const [myExpense, setMyExpense] = useState('');
  const [friendExpense, setFriendExpense] = useState('');
  const [selectBill, setSelectBill] = useState('You')
  // const name = store.FriendName
  const handleBill = (e: ChangeEvent<HTMLInputElement>): void => {
    setBill(e.target.value);
    if (bill && !myExpense) {
      setFriendExpense(e.target.value);
    }
  };
  const handleForm = (e: React.SyntheticEvent): void => {
    e.preventDefault();
  };
  useEffect(() => {
    if (bill.trim() && myExpense.trim()) {
      const remainder = +bill - +myExpense;
      setFriendExpense(remainder.toString());
    }
    if (myExpense.trim().length === 0) {
      setFriendExpense(bill);
    }
  }, [bill, myExpense]);
  console.log(store.friendList)
  console.log(selectBill)
  return (
    <div className={styles.wrapper}>
      <h1>SPLIT A BILL WITH NAME</h1>
      <form className={styles.form} onSubmit={handleForm}>
        <label htmlFor="billValue">
          Bill value:
          <Input
            type={'number'}
            id={'billValue'}
            name={'billValue'}
            widthType={'small'}
            value={bill}
            onChange={handleBill}
          />
        </label>
        <label htmlFor="ownerExpense">
          Your expense:
          <Input
            type={'number'}
            id={'ownerExpense'}
            name={'ownerExpense'}
            widthType={'small'}
            value={myExpense}
            onChange={(e) => setMyExpense(e.target.value)}
          />
        </label>
        <label htmlFor="friendExpense">
          Friend expense:
          <Input
            type={'number'}
            id={'friendExpense'}
            name={'friendExpense'}
            widthType={'small'}
            value={friendExpense}
            onChange={(e) => setFriendExpense(e.target.value)}
          />
        </label>
        <label htmlFor="billPaying">
          Who is paying the bill?:
          <select name="billPaying" id="billPaying" onChange={(e) => setSelectBill(e.target.value)}>
            <option value="You">You</option>
            <option>name</option>
          </select>
        </label>
        <Button type={'submit'} btnStyleType={'medium'}>
          Split bill
        </Button>
      </form>
    </div>
  );
});
