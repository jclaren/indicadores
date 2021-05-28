import axios from 'axios';

export default {
  async getIndicators() {
    return axios.get(`https://mindicador.cl/api`);
  },

  async getValues(code) {
    return axios.get(`https://mindicador.cl/api/` + code);
  },
};
