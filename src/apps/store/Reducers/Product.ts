import { AnyAction } from "redux";
import rawDataProduct from "../raw";
import type from "../type";

enum ProductItemKey {
  id = 'id',
  imageUrl = 'imageUrl',
  title = 'title',
  description = 'description',
  price = 'price',
  stock = 'stock',
}

export type ProductItem = Partial<{
  [ProductItemKey.id]: any;
  [ProductItemKey.imageUrl]: string[];
  [ProductItemKey.title]: string;
  [ProductItemKey.description]: string;
  [ProductItemKey.price]: number;
  [ProductItemKey.stock]: number;
}>;

export type Product = ProductItem[]

const initState: Product = rawDataProduct;

export default function productReducer(state = initState, action: AnyAction) {
  switch (action.type) {
    case type.productUpdate:
      return action.payload;
    default:
      return state;
  }
}

