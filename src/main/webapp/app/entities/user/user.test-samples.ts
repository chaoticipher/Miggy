import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 'f967a26a-782f-420a-98af-8a0b57817f61',
  login: 'V@S3bF',
};

export const sampleWithPartialData: IUser = {
  id: '5732e149-9d78-4c24-9be2-ea96d06edacc',
  login: '$@z\\fB\\"QFC',
};

export const sampleWithFullData: IUser = {
  id: 'cedb0f5d-461f-4d4a-b331-430dd51ac16e',
  login: 'O?Lo@mT\\B5',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
