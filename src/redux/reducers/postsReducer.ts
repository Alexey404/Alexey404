export type postType = {
  id: number
  idAuthor: number
  author: string
  email: string
  content: string
  heading: string
  comments: Array<commentsType>
}

export type commentsType = {
  id: number
  author: string
  idAuthor: number
  email: string
  content: string
}

type InitialStatePostsType = typeof initialState

const initialState = {
  posts: [
    {
      id: 1,
      idAuthor: 1,
      author: 'Олег',
      email: 'oleg@gmail.com',
      heading: 'Как мы используем RTK Query в React-приложениях',
      content: 'sssssssssssss',
    },
    {
      id: 2,
      idAuthor: 1,
      author: 'Олег',
      email: 'oleg@gmail.com',
      heading: 'Как мы используем RTK Query в React-приложениях',
      content: 'sssssssssewwwwssss',
    },
    {
      id: 3,
      idAuthor: 2,
      author: 'Андрей',
      heading: 'Как мы используем RTK Query в React-приложениях',
      email: 'andrey@gmail.com',
      content:
        'С момента своего первого релиза в 2015 году Redux использовался и продолжает использоваться на множестве клиентских приложений. Несмотря на все достоинства, которые предоставляет данное решение (предсказуемое управление состоянием, удобная отладка с помощью Redux DevTools и др.), некоторые разработчики сетуют на излишнее количество “шаблонного кода” при реализации даже самого просто функционала и предпочитают альтернативные инструменты для управления состоянием в клиентских приложениях.',
      comments: [
        {
          id: 1,
          author: 'Андрей',
          idAuthor: 2,
          email: 'andrey@gmail.com',
          content: 'True',
        },
        {
          id: 2,
          author: 'Андрей',
          idAuthor: 2,
          email: 'andrey@gmail.com',
          content: 'Cool',
        },
      ],
    },
    {
      id: 4,
      idAuthor: 1,
      author: 'Олег',
      email: 'oleg@gmail.com',
      heading: 'Как мы используем RTK Query в React-приложениях',
      content: 'sssssssssewwwwssss',
    },
    {
      id: 5,
      idAuthor: 2,
      author: 'Андрей',
      email: 'andrey@gmail.com',
      heading: 'Как мы используем RTK Query в React-приложениях',
      content: 'sssssssssewwwwssss',
    },
  ] as Array<postType>,
}

export const postsReducer = (
  state: InitialStatePostsType = initialState,
  action: any
) => {
  switch (action.type) {
    case 'SET_POSTS': {
      return {
        ...state,
        posts: [...state.posts, ...action.peyload],
      }
    }
    default:
      return state
  }
}
