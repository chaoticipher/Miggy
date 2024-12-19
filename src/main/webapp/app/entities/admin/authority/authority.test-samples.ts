import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '778e6a02-5e0c-47f1-87cd-f9acfc2bab24',
};

export const sampleWithPartialData: IAuthority = {
  name: 'bd237cac-adf8-44dc-be7d-544134eddb93',
};

export const sampleWithFullData: IAuthority = {
  name: 'd089374b-189b-4583-9988-a89eda096805',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
