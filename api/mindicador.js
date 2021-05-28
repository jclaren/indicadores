import axios from 'axios';

export default {
  async getIndicators() {
    return axios.get(`https://mindicador.cl/api`);
  },
};
