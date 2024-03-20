import {StoreTypes} from "../store/store-types";
import FriendsResponse from './initialFriends.json'

class FriendsApi {
    private readonly delay = 250

    getFriends(): Promise<StoreTypes.FriendsObjectType[]> {
        return new Promise((res) => {
            setTimeout(() => {
                res(FriendsResponse)
            }, this.delay)
        })
    }
}
export const friendsApi = new FriendsApi()