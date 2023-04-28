function findLyrics(artist, song) {
  return fetch(
    `https://api.vagalume.com.br/search.php?apikey=660a4395f992ff67786584e238f501aa&art=${artist}&mus=${song}`
  );
}

const formulary = document.querySelector("#form");
formulary.addEventListener("submit", (event) => {
  event.preventDefault();
  doSubmit();
});

async function doSubmit() {
  const artist = document.querySelector("#artistInput");
  const lyric = document.querySelector("#lyric");
  const song = document.querySelector("#songInput");

  console.log(artist.value);
  console.log(song.value);

  lyric.innerHTML = "Loading...";

  const lyricResponse = await findLyrics(artist.value, song.value);
  const response = await lyricResponse.json();
  const response2 = response.find((element) => {
    element.mus;
  });
  const response3 = (response2.text.lyric.innerHTML = response3);
}
