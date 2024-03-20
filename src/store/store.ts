import { observable, action, makeObservable, computed } from 'mobx';
import { friendsApi } from '../api/friends-api';
import { StoreTypes } from './store-types';

class Store {
  @observable.ref
  friendList: StoreTypes.FriendsObjectType[] = [];
  @observable
  isActive: boolean = false
  constructor() {
    makeObservable(this);
  }

  @action
  async fetchList(): Promise<void> {
    this.friendList = await friendsApi.getFriends();
  }
  @action 
  addFriend(id: string, image: string, name: string): void {
    const list = [...this.friendList]
    list.push({id, name, image, balance: 0})
    this.friendList = [...list]
  }
  @action
  selectActiveFriend(id: string): void {
    const friend = this.friendList.find(fr => fr.id === id)
    this.isActive = !!friend;
  }
}

export const store = new Store();
