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
  setButtonText: (setButtonText: string) => void;
  setShow: (setShow: boolean) => void;
  show: boolean;
  productsFromDB?: any;
}

export interface EditProductProps extends IProductObject {
  setVisible: (setVisible: string) => void;
  productsFromDB?: any;
  productId?: number;
  productOneQuery?: any;
  id?: number;
}

export interface IProduct {
  productId: number;
  name?: string;
  productNumber?: string;
  listPrice?: number;
  standardCost: number;
}

export interface IProductObject {
  prodObject?: {
    productId?: number;
    name?: string;
    productNumber?: string;
    listPrice?: number;
    standardCost: number;
  };
}
