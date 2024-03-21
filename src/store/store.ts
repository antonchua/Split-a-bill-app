import { observable, action, makeObservable } from 'mobx';
import { friendsApi } from '../api/friends-api';
import { StoreTypes } from './store-types';

export class Store {
  @observable.ref
  friendList: StoreTypes.initialFriendsType[] = [];
  @observable.ref
  friend: null | StoreTypes.initialFriendsType = null;
  constructor() {
    makeObservable(this);
  }
  @action
  async fetchList(): Promise<void> {
    this.friendList = await friendsApi.getFriends();
  }
  @action
  addFriend(id: string, image: string, name: string): void {
    const list = [...this.friendList];
    list.push({ id, name, image, balance: 0 });
    this.friendList = [...list];
  }
  @action
  selectFriend(id: string): void {
    const friend = this.friendList.find((fr) => fr.id === id);
    if (friend) this.friend = { ...friend };
  }
  @action
  removeFriend(): void {
    this.friend = null;
  }
  @action
  splitTheBill(userBill: string, friendBill: string, payName: string): void {
    if (this.friend) {
      const list = [...this.friendList];
      const friend = { ...this.friend };
      const idx = list.findIndex((fr) => fr.id === friend.id);
      if (payName === 'user') {
        friend.balance += Number(friendBill);
      }
      if (payName !== 'user') {
        friend.balance -= Number(userBill);
      }
      this.friend = { ...friend };
      list[idx] = this.friend;
      this.friendList = [...list];
      this.friend = null;
    }
  }
}

export const store = new Store();
