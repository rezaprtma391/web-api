const loadPeople = async () => {
  try {
    const req = await fetch("https://swapi.dev/api/people/16/");
    const data = await req.json();
    console.log(data);
  } catch (err) {
    console.log("Error", err);
  }
};

loadPeople()