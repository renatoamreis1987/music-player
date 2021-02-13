const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

// Music
const songs = [
  {
    displayName:
      "Gloria Gaynor VS Nine Inch Nails - I Will Survive Survivalism",
    artist: "Kill_mR_DJ MASHUP",
    musicUrl:
      "https://d1dwvcwq657ipv.cloudfront.net/episodes/original/31645699?episode_id=42992103&show_id=2746046&user_id=10210424&tenant=SPREAKER&timestamp=1613210885&media_type=static&response-content-disposition=attachment%3Bfilename%3D%22kill_mr_dj_i_will_survive_survivalism_gloria_gaynor_vs_nine_inch_nails.mp3%22&Expires=1613902085&Signature=QhyJojYxN-5ukjp-Tkt1P84HwgzokSdI5u7FahX9hJuIAtTb5YuwJ-sufPyAWwykpKZal9hxXY7NK40s2-bR0oWgqvP6SCQ6IVKDqASuyEOKunFq9T09jYXCnK8LJOQiGQj3UZey2yU5kmi1uLQmMrEunTqv03D3OzaNXyd7IwbF1mGxU-5dym0baPPUR5xiw4RRJb-C2s2xIwbi%7E7NsCJUn-296ne%7E3VqobuIZzrYqq29yG0n05gto1W6I-GQ4qHi19%7ECH3iPh5n8rB7zu2SsuGKIjA9nQCF%7EggUKc7KoKuxbUUODLeiNABYP2xP3NQlxFNfuK6zvvq0Uf4alX1Yg__&Key-Pair-Id=APKAINDIVJ7TLFUAJI3A",
    imageSrc:
      "https://pbs.twimg.com/profile_images/1115640476105957376/-a4KU0Ny.png",
  },
  {
    displayName: "Dua Lipa + Chris Cornell - Billie Jean Got Me In Love Again",
    artist: "Kill_mR_DJ MASHUP",
    musicUrl:
      "https://d1dwvcwq657ipv.cloudfront.net/episodes/original/31508188?episode_id=42793056&show_id=2746046&user_id=10210424&tenant=SPREAKER&timestamp=1613210899&media_type=static&response-content-disposition=attachment%3Bfilename%3D%22kill_mr_dj_billie_jean_got_me_in_love_again_dua_lipa_vs_chris_cornell.mp3%22&Expires=1613902099&Signature=ASYrJyOodrkISHRuu8idI4-KRS-Lle2oK7ZOJFsOpFMKAeI7iifp6ldRRRISpUq0b7Ti15q5rt-OpC8AxmrdhxfU7UNg%7E3s%7E3l4yANHTaiNFBF3-NUceEgMk4mCp8cPXqoM7R%7ExX6hVu0krYQf9r9tgleJEVeQWKmPn%7E36HC1Y6xJezfsoR3g3ugq3Ykk28XFFhF4POgCgIChzHt%7EvylkQemRwROZ9Mb3JkqpSi5zULn9cglEqEgyII0I5U0%7E3imFG-Q2pkXMpmZiFT5Pdjh2eLm-FZmMm5z-UeTjhtxRK1tDgAKCSs8fPGZqPG%7EBcR7FczwnCAeAjMBNIEqArgh%7Ew__&Key-Pair-Id=APKAINDIVJ7TLFUAJI3A",
    imageSrc:
      "https://yt3.ggpht.com/ytc/AAUvwngQjhmWf-v5GVWRbGaaVReVmBYwrdLjuoGAk1fV=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    displayName: "Lennon / 2Pac / Elvis / Akon - Imagine the Ghetto",
    artist: "Kill_mR_DJ MASHUP",
    musicUrl:
      "https://d1dwvcwq657ipv.cloudfront.net/episodes/original/31310268?episode_id=42502201&show_id=2746046&user_id=10210424&tenant=SPREAKER&timestamp=1613210914&media_type=static&response-content-disposition=attachment%3Bfilename%3D%22kill_mr_dj_imagine_the_ghetto_john_lennon_vs_elvis_presley_vs_2pac_vs_akon.mp3%22&Expires=1613902114&Signature=DyTejaEmtW10s6VOySYJUa8R32kMugF7SUcYVTjr0RjNv8orU4LHCUEcGJ59Bt1F4AnZhq8oXuWgFiGwOTpHyqRhVhjK8e9u6Ab9tdu03DEjTVrM5fZlouQMxIphfLqNGmKBjtYgrDpDHJOtF5h64pTrsc1-W5pWwR2VetSBk9jDuJtr3DEHunTKu1OyUq1D5qpWmrmyZpYyf-MWBanClBrIh%7EvLyyNrMYYnklJw87xictEhQYQyLrVoxphM-vHw0ieYzd2f-9pqkSlSVUMuGRglpm65NrIFVkIHcBd-Gz3L2LDIR7FsSHLozRff%7EpppI7qWuC1RCBT8I-QxYC0Kug__&Key-Pair-Id=APKAINDIVJ7TLFUAJI3A",
    imageSrc:
      "https://dbs.radioline.fr/pictures/podcast_f162882457a23cd02711b6bdaa19008e/logo200.jpg",
  },
];

// Check if Playing
let isPlaying = false;

// Play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  music.play();
}

// Pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
  music.pause();
}

// Play or Pause Event Listener
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));

// Update DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = song.musicUrl;
  image.src = song.imageSrc;
}

// Current Song
let songIndex = 0;

// Next Song
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// Previous Song
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// On Load - Select First Song
loadSong(songs[songIndex]);

// Update Progress Bar & Time
function updateProgressBar(e) {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement;
    // Update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    // Calculate display for duration
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }

    // Delay switching duration Element to avoid NaN
    if (durationSeconds) {
      durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
    }

    // Calculate display for current Time
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
  }
}

// Set Progress Bar
function setProgressBar(e) {
  console.log(e);
  const width = this.clientWidth;
  console.log(width);
  const clickX = e.offsetX;
  console.log(clickX);
  const { duration } = music;
  console.log(duration);
  music.currentTime = (clickX / width) * duration;
}

// Event Listeners
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
music.addEventListener("ended", nextSong);
music.addEventListener("timeupdate", updateProgressBar);
progressContainer.addEventListener("click", setProgressBar);
