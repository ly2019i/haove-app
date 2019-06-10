import axios from 'axios';
import {
  getLocalStorages
} from '../untile/auth';

const token = `Bearer ${getLocalStorages('token')}`;

function user_data() {

}
user_data.prototype.getdatas = function () {
  return axios.get('https://api.cat-shop.penkuoer.com/api/v1/users/info', {
    headers: {
      authorization: token,
    },
  });
};
user_data.prototype.digdans = function () {
  return axios.get('https://api.cat-shop.penkuoer.com/api/v1/orders', {
    headers: {
      authorization: token,
    },
  });
};


user_data.prototype.xqdata = function (id) {
  return axios.get(`https://api.cat-shop.penkuoer.com/api/v1/orders/${id}`, {
    headers: {
      authorization: token,
    },
  });
};
export default new user_data();
