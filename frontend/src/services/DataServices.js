/* eslint-disable class-methods-use-this */
import http from '../http-common';

class DataService {
  getAll() {
    return http.get('/basic');
  }

  get(id) {
    return http.get(`/basic/${id}`);
  }

  create(data) {
    return http.post('/basic', data);
  }

  update(id, data) {
    return http.put(`/basic/${id}`, data);
  }

  delete(id) {
    return http.delete(`/basic/${id}`);
  }

  deleteAll() {
    return http.delete('/basic');
  }

  findByTitle(title) {
    return http.get(`/basic?title=${title}`);
  }
}

export default new DataService();
