let opened = false;

const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const text = document.getElementById("letterText");
const images = document.querySelectorAll(".slideshow img");
const hearts = document.getElementById("hearts");
const controls = document.getElementById("musicControls");

const song1 = document.getElementById("song1");
const song2 = document.getElementById("song2");
let currentSong = song1;

const message = `💌 To the one I choose, every year 💌

Happy New Year, my love 🤍
As this new year begins, I just want you to know how grateful I am for you. Your cute nature, your warm smile, and especially your pretty eyes have a way of making everything around me feel calm and beautiful. Every time I look at you, I feel a sense of peace I never knew before. I don’t want this year to start with noise or rush — I want it to start with you, with us, and with the simple happiness we share. I hope this year brings us closer, fills our days with laughter, comfort, and quiet love. No matter where life takes us, I want to walk into this new year holding your hand, choosing you, and growing together, one beautiful moment at a time.`;

let i = 0;
let slide = 0;

envelope.onclick = () => {
    if(opened) return;
    opened = true;
    envelope.classList.add("open");

    setTimeout(()=>{
        letter.classList.add("show");
        controls.style.display = "block";
        typeText();
        playMusic();
        slideshow();
        heartsFlow();
    },700);
};

function typeText(){
    if(i < message.length){
        text.textContent += message.charAt(i);
        i++;
        setTimeout(typeText,50);
    }
}

function slideshow(){
    setInterval(()=>{
        images[slide].classList.remove("active");
        slide = (slide+1)%images.length;
        images[slide].classList.add("active");
    },3000);
}

function heartsFlow(){
    setInterval(()=>{
        const h = document.createElement("div");
        h.className = "heart";
        h.textContent = "❤️";
        h.style.left = Math.random()*100+"%";
        hearts.appendChild(h);
        setTimeout(()=>h.remove(),5000);
    },900);
}

function playMusic(){
    currentSong.volume = 0.6;
    currentSong.play().catch(()=>{});
}

document.getElementById("switchMusic").onclick = ()=>{
    currentSong.pause();
    currentSong.currentTime = 0;
    currentSong = currentSong === song1 ? song2 : song1;
    playMusic();
};