import {observable, action, makeObservable, computed} from "mobx";
import {friendsApi} from "../api/friends-api";
import {StoreTypes} from "./store-types";
import {ChangeEvent} from "react";

class Store {
    @observable.ref
    friendList: StoreTypes.FriendsObjectType[] = []
    constructor(){
        makeObservable(this)
    }

    @action
    async fetchList(): Promise<void> {
        const res = await friendsApi.getFriends()
        this.friendList = res
    }
}

export const store = new Store()