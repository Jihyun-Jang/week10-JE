function request(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      const error = new Error("not okay");
      error.status = response.status;
      throw error;
    } else {
      return response.json();
    }
  });
}

function testApi(heroName) {
  return request(
    `https://gateway.marvel.com:443/v1/public/characters?name=${heroName}&apikey=8654e7787c54fd2839eacdfd20555c4b`
  );
}

export default testApi;
//https://gateway.marvel.com:443/v1/public/characters?name=Abyss&apikey=8654e7787c54fd2839eacdfd20555c4b
