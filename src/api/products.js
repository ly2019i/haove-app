import {
  get,
  post,
} from '../untile/requets';
import {
  getLocalStorages,
} from '../untile/auth';

export const getProducts = params => get('/api/v1/products', {
  headers: {
    authorization: `Bearer ${getLocalStorages('token')}`,
  },
  params,
});

export const saveProduct = data => post('/api/v1/products', data);
