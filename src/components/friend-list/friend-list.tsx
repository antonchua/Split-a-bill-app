import {FriendListItem} from "../friend-list-item/friend-list-item"
import {observer} from "mobx-react-lite";
import {store}from '../../store/store'
import styles from './friend-list.module.scss'
import {useEffect} from "react";

export const FriendList = observer(() => {
        useEffect(() => {
            store.fetchList()
        }, [])
        return (
            <ul className={styles.list__wrapper}>
                {store.friendList.map(item => <FriendListItem key={item.id} item={item}/>)}
            </ul>
        )
    }
)