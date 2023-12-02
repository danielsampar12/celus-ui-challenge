import { ICommentsWithReplies } from 'state_management/reducers/comments/comments.reducer';

export const commentsListMock: Array<ICommentsWithReplies> = [
  {
    id: '1e6f3fe6-c7cb-46bc-8286-004db4a6d1b0',
    postId: '3747f14a-083c-467c-af4c-48a29fc965fe',
    username: 'Nea Juste',
    userId: '2943271F-9DB2-4D64-A833-42479441EF6E',
    userImage:
      'https://www.creativefabrica.com/wp-content/uploads/2022/10/25/Person-icon-Graphics-43204353-1-580x386.jpg',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    createAt: '2023-12-01T00:34:55.396Z',
    replies: [
      {
        id: '1d1d2bcf-2ea7-4544-9569-4b274d7a92ab',
        postId: '3747f14a-083c-467c-af4c-48a29fc965fe',
        username: 'Maruxa Metrophanes',
        userId: 'A0539F58-9CEF-421F-A258-72E1F40D4EB4',
        userImage:
          'https://www.creativefabrica.com/wp-content/uploads/2022/10/25/Person-icon-Graphics-43204353-1-580x386.jpg',
        text: 'Read a book.',
        createAt: '2023-09-01T00:34:55.396Z',
        repliedToCommentId: '1e6f3fe6-c7cb-46bc-8286-004db4a6d1b0',
      },
    ],
  },
  {
    id: '36bf87d6-6570-482b-aec7-067f1ed04c41',
    postId: '3747f14a-083c-467c-af4c-48a29fc965fe',
    username: 'Makenzie Hadiye',
    userId: '953F411D-803A-45B0-A484-82DBFD394C07',
    userImage:
      'https://www.creativefabrica.com/wp-content/uploads/2022/10/25/Person-icon-Graphics-43204353-1-580x386.jpg',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    createAt: '2023-12-01T22:34:55.396Z',
    replies: [],
  },
  {
    id: '5c31f4ea-a278-4309-a97e-a921d72c0020',
    postId: '3747f14a-083c-467c-af4c-48a29fc965fe',
    username: 'Maruxa Metrophanes',
    userId: 'A0539F58-9CEF-421F-A258-72E1F40D4EB4',
    userImage:
      'https://www.creativefabrica.com/wp-content/uploads/2022/10/25/Person-icon-Graphics-43204353-1-580x386.jpg',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    createAt: '2023-09-01T00:34:55.396Z',
    replies: [],
  },
];
