function findLyrics(artist, song) {
  return fetch(
    `https://api.vagalume.com.br/search.php?&art=${artist}y&mus=${song}`
  );
}

const formulary = document.querySelector("#form");
formulary.addEventListener("submit", (event) => {
  event.preventDefault();

  try {
    doSubmit();
  } catch (error) {
    const errorArtist = document.querySelector("#errorArtist");
    errorArtist.innerHTML = error.message;
  }
});

async function doSubmit() {
  const artist = document.querySelector("#artistInput");
  const lyric = document.querySelector("#lyric");
  const song = document.querySelector("#songInput");

  if (artist.value.length === 0 || song.value.length === 0) {
    throw new Error("Please select a artist and a song");
  } else {
    lyric.innerHTML = "Loading...";

    const lyricResponse = await findLyrics(artist.value, song.value);
    const musicObject = await lyricResponse.json();
    const musicText = musicObject.mus[0].text;
    lyric.innerHTML = musicText;
  }
}
