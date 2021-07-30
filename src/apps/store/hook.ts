import { useSelector } from "react-redux"
import { State } from "."

// get all state
export const useStores = () => useSelector((s: State) => s )

// get state of user
export const useStoreUser = () => useSelector((s: State) => s.user )

// get state of product
export const useStoreProduct = () => useSelector((s: State) => s.product )

// get state of cart
export const useStoreCart = () => useSelector((s: State) => s.cart )



