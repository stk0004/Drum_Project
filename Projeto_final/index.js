


function fazerSom(key) {
    var audio;
    switch (key.toLowerCase()) {
        case 'a':
            audio = new Audio('assets/sounds/leftCrash.mp3');
            break;
        case 's':
            audio = new Audio('assets/sounds/tom1.mp3');
            break;
        case 'd':
            audio = new Audio('assets/sounds/snare.mp3');
            break;
        case 'j':
            audio = new Audio('assets/sounds/tom3.mp3');
            break;
        case 'k':
            audio = new Audio('assets/sounds/tom2.mp3');
            break;
        case 'l':
            audio = new Audio('assets/sounds/kickbass.mp3');
            break;
        default:
            return; 
    }
    audio.play();
}


function addAnimacao(key) {
    var button = document.querySelector('.' + key.toLowerCase());
    if (button) {
        button.classList.add('pressed');
        setTimeout(function() {
            button.classList.remove('pressed');
        }, 100);
    }
}


function checkCapsLock(event) {
    if (event.getModifierState && event.getModifierState('CapsLock')) {
        alert("Caps Lock está ativado! Desative para tocar a bateria!");
    }
}


var buttons = document.querySelectorAll('.drum');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        var buttonInnerHTML = this.innerHTML.toLowerCase();
        fazerSom(buttonInnerHTML);
        addAnimacao(buttonInnerHTML);
    });
});


document.addEventListener('keydown', function(event) {
    if (event.key.length === 1 && event.key.match(/[a-z]/i)) {
        checkCapsLock(event);
    }
    fazerSom(event.key);
    addAnimacao(event.key);
});
