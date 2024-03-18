import styles from './add-friend-form.module.scss';
import { Button } from '../ui/button/button';

export const AddFriendForm = () => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <label htmlFor="friendName">
          Friend name:
          <input type="text" id="friendName" name="friendName" />
        </label>
        <label htmlFor="friendImage">
          Image URL:
          <input type="text" id="friendImage" name="friendImage" />
        </label>
        <Button type={'submit'} btnStyleType={'large'}>
          Add
        </Button>
      </form>
        <Button type={'button'} btnStyleType={'small'}>Close</Button>
    </div>
  );
};
