import { createStore, applyMiddleware, combineReducers, Store, AnyAction } from "redux";
import { api_get_cart } from "../api-idb";
import cartReducer, { Cart } from "./Reducers/Cart";
import productReducer, { Product } from "./Reducers/Product";
import userReducer, { User } from "./Reducers/User";
import type from "./type";

type reducer = {[P in keyof State]: <S>(s: any, b: AnyAction) => S}

export interface State {
  user: User,
  cart: Cart,
  product: Product,
}

const store = createStore(
  combineReducers<reducer>({
    user: userReducer,
    cart: cartReducer,
    product: productReducer,
  }),
  applyMiddleware((store) => (next) => (action) => {
    if (typeof action === "function") {
      return action(store.dispatch, store.getState);
    }
    return next(action);
  })
);

export default store;


setTimeout(async() => {
  const cart = await api_get_cart()
  store.dispatch({ type: type.cartRefresh, payload: cart })
})
