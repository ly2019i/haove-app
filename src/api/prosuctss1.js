import {
  get
} from '../utils/requets'

// eslint-disable-next-line import/prefer-default-export
export const getProducts = data =>
  get('/api/v1/products', {
    params: {
      page: data,
      per: 15,
    },
  })
export const getProductsId = data => get('/api/v1/products/' + data)
