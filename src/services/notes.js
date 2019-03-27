import { post, get } from './request';

export const addNote = note => post('/notes', note);
export const getNotes = () => get('/notes');
export const getNote = id => get(`/notes/${id}`);
