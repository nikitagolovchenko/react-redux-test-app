import { v4 as uuid } from 'uuid';

export const SET_AUTHOR = 'SET_AUTHOR';
export const FETCH_DATA = 'FETCH_DATA';
export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';

export function setAuthor(author) {
  return {
    type: SET_AUTHOR,
    payload: author,
  };
}

export function fetchData() {
  return (dispatch) => {
    dispatch(showLoader());

    fetch('https://api.spacexdata.com/v3/rockets')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let newData = data.map((item) => {
          return {
            id: uuid(),
            title: item.rocket_name,
            text: item.description,
          };
        });

        setTimeout(function () {
          dispatch({
            type: FETCH_DATA,
            payload: newData,
          });

          dispatch(hideLoader());
        }, 1000);
      });
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}
