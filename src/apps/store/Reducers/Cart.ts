import { AnyAction } from "redux";
import { api_set_cart } from "../../api-idb";
import type from "../type";

export type Cart = any[]

const initState: Cart = []

export default function cartReducer(state = initState, action: AnyAction) {
  switch (action.type) {
    case type.cartUpdate:
      api_set_cart(action.payload)
      return state.concat({...action.payload});
    case type.cartRefresh:
      return action.payload;
    default:
      return state;
  }
}

