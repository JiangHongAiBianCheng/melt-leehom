// script.js
deg = 360;

document.addEventListener('DOMContentLoaded', function() {
    leehom = document.getElementById('leehom');
    ice = document.getElementById('ice');
    song = document.getElementById('song');
    button = document.getElementById('playBtn');
    
    const targetDate = new Date('2025-01-28T23:59:59');
    const targetDate2 = new Date('2025-02-02T23:59:59');

    function meltIce() {
        ice.style.opacity = '0';
    }

    function rotateLeehom() {
        deg += 360;
        leehom.style.transform = `rotate(${deg}deg)`;
        leehom.style.transition = `transform ${deg / 360}s linear`;
        setTimeout(rotateLeehom, 1000);
    }

    function playSong() {
        song.play();
        song.loop = true;
        song.currentTime = 0;
    }

    function stopSong() {
        song.pause();
        song.currentTime = 0;
    }

    function checkTime() {
        const now = new Date();

        if (now >= targetDate && now < targetDate2) {
            rotateLeehom();
            meltIce();
            button.style.opacity = '100%';
        } else if (now >= targetDate2) {
            stopSong();
            button.style.opacity = '0%';
        }
        else {
            button.style.opacity = '0%';
        }
    }

    setInterval(checkTime, 1000);
    setInterval(() => {
        const now = new Date();
        if (now >= targetDate && now < targetDate2) {
            playSong();
        } else {
            stopSong();
        }
    }, 7000);
});
