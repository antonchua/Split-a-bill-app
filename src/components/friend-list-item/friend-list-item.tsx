import { Button } from '../ui/button/button';
import {observer} from "mobx-react-lite";
import {StoreTypes} from "../../store/store-types";
import styles from './friend-list-item.module.scss';

type FriendListItemType = {
  item: StoreTypes.FriendsObjectType;
};
export const FriendListItem = observer(({ item }: FriendListItemType) => {
    return (
        <li className={styles.list__item}>
            <img src={item.url} alt="friendLogo" />
            <div>
                <h3>{item.name}</h3>
                <p>You and Clark are even</p>
            </div>
            <Button type={'button'} btnStyleType={'small'}>
                Select
            </Button>
        </li>
    );
})
