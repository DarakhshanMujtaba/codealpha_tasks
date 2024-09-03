let songName=document.querySelector("#song-name")
let songSinger=document.querySelector("#song-singer")
let songImage=document.querySelector(".song-image")
let playPauseImg=document.querySelector("#play-pause")
let volumeRange=document.querySelector("#volume-range")
let songRange=document.querySelector("#song-duration")
let volSvg=document.querySelector("#vol-svg")
let musicAmimate=document.querySelector("#music-animate")
let playlistImg=document.querySelector("#playlist-img")
let playlist=document.querySelector(".playlist")
let playlistSongs=document.querySelectorAll(".playlist-songs")
let index = 0;
let playingSong = false;
// let track=document.createElement("audio")
let track = new Audio();
let songs = [
    {
        name: "Cheri Cheri Lady",
        path:"songs/Modern Talking - Cheri Cheri Lady (Lyrics).mp3",
        image:'images/1.jpg',
        singer:"Modern Talking"
    },
    {
        name: "Espresso",
        path:"songs/Sabrina Carpenter - Espresso.mp3",
        image:'images/2.jpg',
        singer:"Sabrina Carpenter"
    },
    {
        name: "Favourite",
        path:"songs/Isabel LaRosa - favorite.mp3",
        image:'images/3.jpg',
        singer:"Isabel LaRosa"
    },
    {
        name: "Gasolina",
        path:"songs/Daddy Yankee - Gasolina.mp3",
        image:'images/4.jpg',
        singer:"Daddy Yankee"
    },
    {
        name: "Ride It",
        path:"songs/Jay Sean - Ride It.mp3",
        image:'images/5.jpg',
        singer:"Jay Sean"
    }
];
// Load the track
function loadTrack(index) {
    track.src=songs[index].path;
    songName.innerHTML = songs[index].name;  
    songSinger.innerHTML = songs[index].singer
    songImage.style.backgroundImage = `url("${songs[index].image}")`;
    
    // Reset song duration and range when a new track is loaded
    songRange.value = 0;
    track.addEventListener("loadedmetadata", function() {
        songRange.max = track.duration;  

    });

    volume();
    duration();

    // Update song duration
    setInterval(()=>{
        songRange.max=track.duration
        songRange.value=track.currentTime
    },1000)
    track.loop=true;
    track.load(); 
}

// Play or pause the song
function playPause() {
    if(playingSong==false){
        playSong()
        
    }else{
        pauseSong()
       
    }
}
// Play the song
function playSong(){
    track.play();
    playingSong=true;
    musicAmimate.style.display="block"
    playPauseImg.src="images/pause.svg"
}
// Pause the song
function pauseSong(){
    track.pause();
    playingSong=false;
     musicAmimate.style.display="none"
    playPauseImg.src="images/play.svg"
}
loadTrack(index);

// Navigate to next song
function nextSong() {
    if(index<songs.length-1){
        index++;
        loadTrack(index)
        playSong()
    }
    else{
        index=0;
        loadTrack(index)
        playSong()
    }
}
// Navigate to previous song
function previousSong() {
    if(index>0){
        index--;
        loadTrack(index)
        playSong()
    }
    else{
        index=songs.length-1;
        loadTrack(index)
        playSong()
    }
}
// Adjust volume
function volume() {
     track.volume=volumeRange.value/100;
     if(volumeRange.value==0){
        volSvg.src="images/mute.svg"
     }
     else{
        volSvg.src="images/volume.svg"
     }
}

// Event listener for volume change
volumeRange.addEventListener("input", volume);

// Duration
function duration() {
    track.currentTime=songRange.value
}
// Seek the song to the slider value
songRange.addEventListener("input", function() {
    track.currentTime = songRange.value;
});
playlistImg.addEventListener("click",()=>{
playlist.classList.toggle("playlist-active")
if(playlist.classList.contains("playlist-active")){
    playlistImg.src="images/cancel.svg"
}
else{
    playlistImg.src="images/playlist.svg"
}
})
playlistSongs.forEach((songs,index)=>{
    songs.addEventListener('click',()=>{
        loadTrack(index);
        playSong();
        playlist.classList.remove("playlist-active")
    })
})