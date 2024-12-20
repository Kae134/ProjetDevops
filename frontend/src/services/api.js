import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
});

export const getTasks = () => api.get('/tasklist');
export const createTask = (task) => api.post('/tasklist', task);
export const deleteTask = (id) => api.delete(`/tasklist/${id}`);
