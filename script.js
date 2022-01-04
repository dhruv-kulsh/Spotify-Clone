console.log('connected to spotify');

let songno = 1;
let audioelement = new Audio('songs/1.mp3');
let masterplay = document.querySelector('#masterplay')
let myprogressbar = document.querySelector('#myprogressbar')
let gif = document.querySelector('#gif')
let songitem = document.querySelectorAll('.songitems')

myprogressbar.value = 0;

// handele play/pause click
masterplay.addEventListener('click', (e) => {

    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = '1';
        changesong(songno);

    }
    else {

        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = '0';


        changesong(songno + 1);

    }
})



audioelement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');

    //update seekbar

    let progress = parseInt((audioelement.currentTime / audioelement.duration) * 100)
    myprogressbar.value = progress;
    // console.log(progress);
})

myprogressbar.addEventListener('change', (e) => {

    audioelement.currentTime = (myprogressbar.value * audioelement.duration) / 100;
})


let playbuttons = document.querySelectorAll('.playbutton')
// console.log(playbuttons[2]);
playbuttons.forEach(button => {

    button.addEventListener('click', (e) => {
        if (audioelement.paused || audioelement.currentTime <= 0) {
            button.classList.replace('fa-play-circle', 'fa-pause-circle')
            let songno = e.target.id;
            audioelement.src = `songs/${songno}.mp3`;

            audioelement.play();
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
            gif.style.opacity = '1';
            changesong(songno);
            changetext(songno);

        }
        else {
            button.classList.replace('fa-pause-circle', 'fa-play-circle')
            masterplay.classList.remove('fa-pause-circle');
            masterplay.classList.add('fa-play-circle');
            audioelement.pause();
            gif.style.opacity = '0';
            playbuttons.forEach(button => {
                button.classList.replace('fa-pause-circle', 'fa-play-circle')

            })

        }
    })
})


let changename = document.querySelector('.changename');

function changetext(songno) {

    console.log(songno);
    changename.innerText = songname[songno - 1].innerText;
}


//change song 


let masterback = document.querySelector('#masterbackward')
let masterfor = document.querySelector('#masterforward')

function changesong(songno) {

    masterfor.addEventListener('click', () => {
        console.log('forward clicked');

        songno++;
        songno = songno % 6;

        audioelement.src = `songs/${songno}.mp3`;
        console.log(audioelement.src);
        audioelement.play();
        playbuttons.forEach(button => {
            button.classList.replace('fa-pause-circle', 'fa-play-circle')
            playbuttons[songno - 1].classList.replace('fa-play-circle', 'fa-pause-circle')

        })
        changetext(songno);
        if (masterplay.classList[2] = 'fa-pause-circle') {

            playbuttons[songno].classList.replace('fa-pause-circle', 'fa-play-circle');
        }
        else {

            playbuttons[songno].classList.replace('fa-play-circle', 'fa-pause-circle');
        }

    })

    masterback.addEventListener('click', () => {
        console.log('backward clicked');
        if (songno >= 0) {

            songno--;
            songno = songno % 6;

            audioelement.src = `songs/${songno}.mp3`;
            audioelement.play();
            audioelement.play();
            playbuttons.forEach(button => {
                button.classList.replace('fa-pause-circle', 'fa-play-circle')
                playbuttons[songno - 1].classList.replace('fa-play-circle', 'fa-pause-circle')
                console.log(playbuttons[2]);

            })
            changetext(songno);
        }

    })

}

let songname = document.querySelectorAll('.songname');
songname[0].innerText = 'Wariyo - Mortal';
songname[1].innerText = 'Cielo - Huma-Huma';
songname[2].innerText = 'Deaf Kev - Invicible';
songname[3].innerText = 'Different Heaven & Ethide';
songname[4].innerText = 'Janji-Heroes tonight';
