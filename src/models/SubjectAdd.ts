import { OmitId } from 'shared/interfaces/OmitId';
import { Subject } from 'models/Subject';

export type SubjectAdd = Omit<OmitId<Subject>, 'phrases'>;
