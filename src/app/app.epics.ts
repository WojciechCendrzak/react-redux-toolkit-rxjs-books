import { combineEpics } from 'redux-observable';
import { bookEpic$ } from '../logic/store/book/book.epic';

export const rootEpic = combineEpics(bookEpic$);
