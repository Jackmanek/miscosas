var popupSize = {
    width: 780,
    height: 550
};

$(document).on('click', '.social-button', function (e) {
    var verticalPos = Math.floor(($(window).width() - popupSize.width) / 2),
        horisontalPos = Math.floor(($(window).height() - popupSize.height) / 2);

    var popup = window.open($(this).prop('href'), 'social',
        'width=' + popupSize.width + ',height=' + popupSize.height +
        ',left=' + verticalPos + ',top=' + horisontalPos +
        ',location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1');

    if (popup) {
        popup.focus();
        e.preventDefault();
    }

});

let randoF = Math.random()*frases.length+1;
console.log(randoF);
let frases = ["La suerte de tu día depende de cómo lo afrontes desde primera hora de la mañana",
"Cuida esos primeros minutos como la semilla de tu día, porque eso es lo que son. No los contamines mirando el correo ni las redes sociales.",
"«Sé el cambio que quieres ver en el mundo»—Mahatma Gandhi",
"«Qué maravilloso es que nadie tenga que esperar ni un segundo para empezar a mejorar el mundo» —Ana Frank"];