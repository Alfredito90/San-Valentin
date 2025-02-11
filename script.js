const envelope = document.querySelector('.envelope-wrapper');
const letter = document.querySelector('.letter');

document.addEventListener('click', (e) => {
    if (
        e.target.matches(".envelope") || 
        e.target.matches(".tap-right") || 
        e.target.matches(".tap-left") || 
        e.target.matches(".heart")
    ) {
        envelope.classList.toggle('flap');
        
        if (!letter.classList.contains('opened')) {
            setTimeout(() => {
                letter.classList.add('letter-opening');

                setTimeout(() => {
                    letter.classList.remove('letter-opening');
                    letter.classList.add('opened');
                }, 500);
            }, 1000);
        }
    } else if (e.target.matches(".envelope *") ) {
        envelope.classList.remove('flap');
        if (letter.classList.contains("opened")) {
            letter.classList.add("closing-letter");
            setTimeout(() => {
                letter.classList.remove("closing-letter");
                letter.classList.remove("opened");
            }, 500);
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const bgMusic = document.getElementById("bgMusic");

    // Espera a que el usuario haga clic en cualquier parte de la página
    document.addEventListener("click", function () {
        if (bgMusic.paused) {
            bgMusic.play();
        }
    });

    // También activa la música con el botón
    document.getElementById("playMusic").addEventListener("click", function () {
        bgMusic.play();
    });
});