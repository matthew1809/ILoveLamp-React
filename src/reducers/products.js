export const FETCH_PRODUCTS_START = 'products/FETCH_PRODUCTS_START';
export const FETCH_PRODUCTS_END = 'products/FETCH_PRODUCTS_END';

const initialState = {
  fetching: false,
  fetched: false,
  products: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_START:
      return { ...state, fetching: true };

    case FETCH_PRODUCTS_END:
      return {
        ...state,
        fetching: false,
        fetched: true,
        products: action.payload
      };

    default:
      return { ...state, fetching: false, error: action.payload };
  }
};
