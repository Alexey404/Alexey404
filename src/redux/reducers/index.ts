const initial = {
  people: [],
}

export default function reducer(state: any = initial, action: any) {
  switch (action.type) {
    case 'SET_PEOPLE': {
      return {
        ...state,
        people: [...state.people, ...action.peyload],
      }
    }
    default:
      return state
  }
}
