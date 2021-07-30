import { AnyAction } from "redux";
import type from "../type";

export enum UserKey {
  username = 'username',
  password = 'password',
  email = 'email',
  name = 'name',
}

export type User = Partial<{
  [UserKey.username]: string;
  [UserKey.password]: string;
  [UserKey.email]: string;
  [UserKey.name]: string;
  urlImage: string;
  hasLogin: boolean;
}>;

const initState: User = {};

export default function userReducer(state = initState, action: AnyAction) {
  switch (action.type) {
    case type.userUpdate:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
