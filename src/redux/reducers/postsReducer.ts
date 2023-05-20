export type postType = {
  id: number
  author: authorType
  content: string
  heading: string
  comments: Array<commentsType>
}

export type commentsType = {
  id: number
  author: authorType
  content: string
}

export type authorType = {
  id: number
  name: string
  email: string
}

type InitialStatePostsType = typeof initialState

const initialState = {
  posts: [
    {
      id: 1,
      idAuthor: 1,
      author: { id: 1, name: 'Олег', email: 'oleg@gmail.com' },
      email: 'oleg@gmail.com',
      heading: 'Как мы используем RTK Query в React-приложениях',
      content: 'sssssssssssss',
    },
    {
      id: 2,
      author: { id: 1, name: 'Олег', email: 'oleg@gmail.com' },
      heading: 'Как мы используем RTK Query в React-приложениях',
      content: 'sssssssssewwwwssss',
    },
    {
      id: 3,
      author: { name: 'Андрей', id: 2, email: 'andrey@gmail.com' },
      heading: 'Как мы используем RTK Query в React-приложениях',
      content:
        'С момента своего первого релиза в 2015 году Redux использовался и продолжает использоваться на множестве клиентских приложений. Несмотря на все достоинства, которые предоставляет данное решение (предсказуемое управление состоянием, удобная отладка с помощью Redux DevTools и др.), некоторые разработчики сетуют на излишнее количество “шаблонного кода” при реализации даже самого просто функционала и предпочитают альтернативные инструменты для управления состоянием в клиентских приложениях.',
      comments: [
        {
          id: 1,
          author: { id: 1, name: 'Олег', email: 'oleg@gmail.com' },
          content: 'Спасибо за работу',
        },
        {
          id: 2,
          author: { name: 'Андрей', id: 2, email: 'andrey@gmail.com' },
          content: 'Обращайся',
        },
      ],
    },
    {
      id: 4,
      author: { id: 1, name: 'Олег', email: 'oleg@gmail.com' },
      heading: 'Как мы используем RTK Query в React-приложениях',
      content: 'sssssssssewwwwssss',
    },
    {
      id: 5,
      author: { name: 'Андрей', id: 2, email: 'andrey@gmail.com' },
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
