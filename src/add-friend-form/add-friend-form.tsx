import styles from './add-friend-form.module.scss';

export const AddFriendForm = () => {
  return (
    <div>
      <form className={styles.friendForm}>
        <div>
          <label htmlFor="friendName">
            Friend name:
            <input type="text" id="friendName" name="friendName" />
          </label>
        </div>
        <div>
          <label htmlFor="friendImage">
            Image URL:
            <input type="text" id="friendImage" name="friendImage" />
          </label>
          <button type="submit" className={styles.friendForm__add}>
            Add friend
          </button>
        </div>
      </form>
      <button type="button">Close</button>
    </div>
  );
};
