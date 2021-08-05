export interface InitialValuesProduct {
  name?: string;
  productNumber?: string;
  listPrice?: number;
  standardCost?: number;
}

export const initialValues: InitialValuesProduct = {
  name: "",
  productNumber: "",
  listPrice: 0,
  standardCost: 0,
};

export interface NewProductProps extends InitialValuesProduct {
  setShow: (setShow: boolean) => void;
  show: boolean;
}

export interface IProduct {
  productId: number;
  name?: string;
  productNumber?: string;
  listPrice?: number;
  standardCost: number;
}
