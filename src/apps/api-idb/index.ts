import { get, set, update } from "idb-keyval";
import { UserKey } from "../store/Reducers/User";
import { checkUserMatch } from "./util";

enum key {
  cart = "cart",
  user = "user",
}

// API mockup for login with username/email and password
export const api_login_user = async (usernameOrEmail: any, password: any) => {
  const user = await get(key.user);
  for (let i = -1; ++i < user.length; ) {
    if (checkUserMatch(user[i], usernameOrEmail, password)) {
      return user[i];
    }
  }
  return false;
};

// API mockup for create new user
export const api_create_user = async (data: any) => {
  return await update(key.user, (current) => current.concat(data));
};

// API mockup for check is exist username or email
export const api_check_exist_user = async (
  usernameOrEmail: any,
  isEmail: boolean = false
) => {
  const user = await get(key.user);
  const props = isEmail ? UserKey.email : UserKey.username;

  for (let i = -1; ++i < user.length; ) {
    if (user[i][props] == usernameOrEmail) return true;
  }
  return false;
};

// API mockup for processing data cart
export const api_get_cart = async () => await get(key.cart);
export const api_set_cart = async (cart: any) => {
  return await update(key.cart, (current) => (current || []).concat(cart));
};
