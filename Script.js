console.log("Welcome to Spotify");
let songIndex= 0;
let audioElement=new Audio('Songs/0.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar =document.getElementById('myProgressBar');
let gif =document.getElementById('gif');
 let masterSongName =document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs=[
    
        {songName:"Millionaire", filepath:"Songs/1.mp3", coverpath:"Cover/Millionaire.jpg"},
        {songName:"Hanuman Chalisa", filepath:"Songs/2.mp3", coverpath:"Cover/hanumanChalisha.jpg"},
        {songName:"Ram Siya Ram", filepath:"Songs/3.mp3", coverpath:"Cover/ramji.jpg"},
        {songName:"O Sajni Re", filepath:"Songs/4.mp3", coverpath:"Cover/lap.jpg"},
        {songName:"8 Asle", filepath:"Songs/5.mp3", coverpath:"Cover/8asle.jpg"},
        {songName:"Aayi Nahi", filepath:"Songs/6.mp3", coverpath:"Cover/aai.jpg"},
        {songName:"Aaj Ki Raat", filepath:"Songs/7.mp3", coverpath:"Cover/aaj.jpg"},
       
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src= songs[i].coverpath
    element.getElementsByClassName("songName")[0].innerText= songs[i].songName


})


   



masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity= 1;

    }
    else{
        audioElement.pause();
     masterPlay.classList.remove('fa-circle-pause');
     masterPlay.classList.add('fa-circle-play');
     gif.style.opacity= 0;

    }
})
// audioElement.play();
audioElement.addEventListener('timeupdate',()=>{
    progress= parseInt((audioElement.currentTime/audioElement.duration)* 100)
myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
}) 

const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');



    })


}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `Songs/${songIndex}.mp3`;
        masterSongName.innerText =songs[songIndex].songName;
        audioElement.currentTime =0;
        audioElement.play();
        gif.style.opacity= 1;

        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
         

         
        
    })

})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>6){
        songIndex=0
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `Songs/${songIndex}.mp3`;
    masterSongName.innerText =songs[songIndex].songName;

    audioElement.currentTime =0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
     

})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `Songs/${songIndex}.mp3`;
    masterSongName.innerText =songs[songIndex].songName;
    audioElement.currentTime =0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
     

})