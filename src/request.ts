import { ApiResponse, StateUpdate } from './types';

const request = (page: number, handleStateUpdate: (state: StateUpdate) => void): void => {
  fetch(`https://reqres.in/api/example?per_page=8&page=${page}`)
    .then(res => res.json())
    .then((data: ApiResponse) => handleStateUpdate({ isFetching: false, data }));
};

export default request;
