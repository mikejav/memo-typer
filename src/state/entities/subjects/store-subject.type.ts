import { Subject } from 'models/Subject';

export type StoreSubject = Omit<Subject, 'phrases'> & {phrases?: string[]};
