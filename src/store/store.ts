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
  selectActiveFriend(id: number): void {
    const friend = this.friendList.find(fr => fr.id === id)
    this.isActive = !!friend;
  }
  // @action
  // selectFriend(id: number): void {
  //   const friendList = [...this.friendList];
  //   const prevSelected = this.friendList.find((fr) => fr.selected);
  //   if (prevSelected) {
  //     const prevSelectedIdx = this.friendList.findIndex((fr) => fr.selected);
  //     friendList[prevSelectedIdx] = { ...prevSelected, selected: false };
  //     this.friendList = [...friendList];
  //   }
  //   const currentSelected = this.friendList.find((el) => el.id === id);
  //   if (currentSelected) {
  //     const currentSelectedIdx = this.friendList.findIndex((fr) => fr.id === id);
  //     friendList[currentSelectedIdx] = { ...currentSelected, selected: true };
  //     this.friendList = [...friendList];
  //   }
  // }

  // @computed
  // get FriendName(): string {
  //   const friend = this.friendList.find(fr => fr.selected)
  //   if (friend) {
  //     return friend.name
  //   }
  //   return ''
  // }
}

export const store = new Store();
