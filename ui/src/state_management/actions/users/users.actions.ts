import { GetCurrentUserAction, UsersActionTypes } from './actionTypes';

export const getCurrentUser = (): GetCurrentUserAction => {
  return {
    user: {
      id: 'A0539F58-9CEF-421F-A258-72E1F40D4EB4',
      email: 'maruxa.metrophanes@travel.com',
      image:
        'https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg',
      name: 'Maruxa Metrophanes',
    },
    type: UsersActionTypes.GET_CURRENT_USER,
  };
};
