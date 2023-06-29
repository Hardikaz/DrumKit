
document.querySelectorAll("img")[0].addEventListener("click",
 function(){

var audio = new Audio('sounds/tom-1.mp3');
audio.play();

});

document.querySelectorAll("img")[0].addEventListener("keyup",
 function(event){
console.log(event.key);
var audio = new Audio('sounds/tom-1.mp3');
audio.play();

});
// function a()
// {
//     var audio1 = new Audio('sounds/tom-1.mp3');
// audio1.play();
// }

document.querySelectorAll("img")[1].addEventListener("click",
 function(){

var audio = new Audio('sounds/tom-2.mp3');
audio.play();

});
function s(){
    var audio = new Audio('sounds/tom-2.mp3');
audio.play();
}

document.querySelectorAll("img")[2].addEventListener("click",
 function(){

var audio = new Audio('sounds/tom-3.mp3');
audio.play();

});

function d()
{
    var audio = new Audio('sounds/tom-3.mp3');
audio.play();
}
document.querySelectorAll("img")[3].addEventListener("click",
 function(){

var audio = new Audio('sounds/tom-4.mp3');
audio.play();

});

function f(){
    var audio = new Audio('sounds/tom-4.mp3');
audio.play();
}

document.querySelectorAll("img")[4].addEventListener("click",
 function(){

var audio = new Audio('sounds/kick-bass.mp3');
audio.play();

});
function g(){
    var audio = new Audio('sounds/kick-bass.mp3');
audio.play();
}

document.querySelectorAll("img")[5].addEventListener("click",
 function(){

var audio = new Audio('sounds/snare.mp3');
audio.play();

});
function h(){
    var audio = new Audio('sounds/snare.mp3');
audio.play();

}

document.querySelectorAll("img")[6].addEventListener("click",
 function(){

var audio = new Audio('sounds/crash.mp3');
audio.play();

});

function j(){
    var audio = new Audio('sounds/crash.mp3');
audio.play();
}


document.addEventListener("keypress",function(event){
    playSound(event.key);

    function playSound(key){
        switch(key)
        {
            case "a":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

            case "s":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;

                case "d":
                    var tom3 = new Audio('sounds/tom-3.mp3');
                    tom3.play();
                    break;
            
                    case "f":
                        var tom4 = new Audio('sounds/tom-4.mp3');
                        tom4.play();
                        break;
                        case "g":
                            var kick = new Audio('sounds/kick-bass.mp3');
                            kick.play();
                            break;
                        case "h":
                                var snare = new Audio('sounds/snare.mp3');
                                snare.play();
                                break;

                                case "j":
                                    var crash = new Audio('sounds/crash.mp3');
                                    crash.play();
                                    break;
                               

            

        }
    }
})