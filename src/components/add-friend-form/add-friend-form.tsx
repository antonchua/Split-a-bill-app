import styles from './add-friend-form.module.scss';

export const AddFriendForm = () => {
  return (
    <div>
      <form className={styles.friendForm}>
          <label htmlFor="friendName">
            Friend name:
            <input type="text" id="friendName" name="friendName" />
          </label>
          <label htmlFor="friendImage">
            Image URL:
            <input type="text" id="friendImage" name="friendImage" />
          </label>
          <button type="submit" className={styles.friendForm__add}>
            Add friend
          </button>
      </form>
      <button type="button" className={styles.friendForm__toggle}>Close</button>
    </div>
  );
};
