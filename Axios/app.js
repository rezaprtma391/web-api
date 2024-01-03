axios
  .get("https://swapi.dev/api/people/16/")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
    alert(err.message)
  });
