var drums = document.querySelectorAll(".drum")

for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function() {

        let buttonInner = this.innerHTML
        makeSound(buttonInner)

        buttonAnimation(buttonInner )
        
    })

    document.addEventListener("keydown", (e)=> {
        keyboardLetter = e.key

        makeSound(keyboardLetter)

        buttonAnimation(keyboardLetter)
    
    })
}

function makeSound(letter) {
    switch (letter) {
        case "w":
            var crash = new Audio("sounds/crash.mp3")
            crash.play()
            break;
        case "a":
            var kickBase = new Audio("sounds/kick-bass.mp3")
            kickBase.play()
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3")
            snare.play()
            break;   
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play()
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play()
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play()
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play()
            break;
    
        default:
            
            break;
    }
}

function buttonAnimation (currentKey) {
    let activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed")  

    setTimeout(() => {
        activeButton.classList.remove("pressed")
    }, 50)

}
// var audio = new Audio("sounds/tom-1.mp3")
//         audio.play()
