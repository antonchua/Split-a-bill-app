import React from 'react';
import { useState } from 'react';
import { Button } from '../ui/button/button';
import { Input } from '../ui/input/input';
import { nanoid } from 'nanoid';
import { observer } from 'mobx-react-lite';
import { store } from '../../store/store';
import styles from './add-friend-form.module.scss';

export const AddFriendForm = observer(() => {
  const [name, setName] = useState('');
  const [btnToggle, setBtnToggle] = useState(false);
  const id = nanoid();
  const imageUrl = 'https://i.pravatar.cc/48';
  const handleForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    store.addFriend(id, imageUrl, name);
    setName('');
  };
  return (
    <div className={styles.wrapper}>
      {btnToggle && (
        <form className={styles.form} onSubmit={handleForm}>
          <label htmlFor="name">
            Friend name:
            <Input
              type="text"
              id="name"
              name="name"
              widthType="medium"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor="image">
            Image URL:
            <Input type="text" id="image" name="image" widthType="medium" defaultValue={imageUrl} />
          </label>
          <Button type={'submit'} btnStyleType={'large'}>
            Add
          </Button>
        </form>
      )}
      <div>
        {btnToggle && (
          <Button type={'button'} btnStyleType={'small'} onClick={() => setBtnToggle(!btnToggle)}>
            Close
          </Button>
        )}
        {!btnToggle && (
          <Button type={'button'} btnStyleType={'medium'} onClick={() => setBtnToggle(!btnToggle)}>
            Add friend
          </Button>
        )}
      </div>
    </div>
  );
});
