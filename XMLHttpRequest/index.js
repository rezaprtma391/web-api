const req = new XMLHttpRequest();

req.onload = function () {
  const data = this.response;
  console.log(data);
};

req.onerror = function () {
  console.log("Error", this);
};

req.open("GET", "https://api.tvmaze.com/search/shows?q=girls");

req.send();
