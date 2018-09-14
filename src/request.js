const request = props => {
  fetch("https://reqres.in/api/example?per_page=8")
    .then(res => res.json())
    .then(data =>
      props.handleStateUpdate({
        isFetching: false,
        data
      })
    );
};

export default request;
