
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});
//Caracteres que se borraran
typewriter.typeString('Desarrolldora Frontend Jr')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Si lo puedes imaginar, lo puedes crear!')
    .pauseFor(2500)
    .deleteChars(6) //numero de caracteres que se borran
    .typeString('<strong>Programar!</strong>')
    .pauseFor(2500)
    .start();