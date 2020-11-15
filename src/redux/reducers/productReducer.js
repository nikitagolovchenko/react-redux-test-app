import { FETCH_DATA, SET_AUTHOR } from '../actions';

const initialState = {
  author: 'Me Nikita',
  records: [
    {
      id: 1,
      title: 'Product Title',
      text: 'Text loasdas sarre etwete уце цуц е уц еуце еуцеуце wqwqwqw',
    },
    {
      id: 2,
      title: 'Product Title 2',
      text: 'Text loasdas sarre etwete уце цуц е уц еуце еуцеуце wqwqwqw',
    },
    {
      id: 3,
      title: 'Product Title 3',
      text: 'Text loasdas sarre etwete уце цуц е уц еуце еуцеуце wqwqwqw',
    },
  ],
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHOR:
      return { ...state, author: action.payload };

    case FETCH_DATA:
      let copyState = {...state};
      copyState.records.push(...action.payload);
      return copyState;

    default:
      return state;
  }
}
