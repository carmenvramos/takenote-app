import { post, get, put } from './request';

export const addNote = note => post('/notes', note);
export const getNotes = () => get('/notes');
export const getNote = id => get(`/notes/${id}`);
export const editNote = (id, note) => put(`/notes/${id}`, note);
