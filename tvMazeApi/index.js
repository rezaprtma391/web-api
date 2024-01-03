const form = document.querySelector("#search-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  document.querySelectorAll("img").forEach((img) => img.remove());

  const keywoard = form.elements.query.value;
  const config = {
    params: { q: keywoard },
  };
  const res = await axios.get(
    `https://api.tvmaze.com/search/shows?`,
    config
  );
  getImages(res.data);
  form.elements.query.value = "";
});

const getImages = (show) => {
  for (let result of show) {
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
