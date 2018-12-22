const request = (page, handleStateUpdate) => {
  fetch(`https://reqres.in/api/example?per_page=8&page=${page}`)
    .then(res => res.json())
    .then(data =>
      handleStateUpdate({
        isFetching: false,
        data
      })
    );
};

export default request;
