import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.AzcEaw7xg8d6IWMiqnRB8S1a2JHlU6Ou2Kzxpmuc9zaUbBped2VRzj5INpri',
  },
});
