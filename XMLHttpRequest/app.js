const req = new XMLHttpRequest();

req.onload = function () {
  // const data = JSON.parse(this.response);
  const data = this.response;
  console.log(data);
};

req.onerror = function () {
  console.log("error", this);
};

req.open("GET", "https://swapi.dev/api/people/16/");
req.setRequestHeader("Accept", "application/json");
req.send();
