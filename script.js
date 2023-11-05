// randomized heckles held in a list
var level1 = ["Really...", "This is just sad.", "Hey mom! Look at this idiot.", "Use ALL of your brain.", "You are not a real person.", "Lord help us.", "You really are smart...", "Try a little bit harder...", "You lack brain power.", "Pathetic.", "This guy STINKS!", "Do better.", "Be better."]
var level2 = ["you. suck.", "This is your best?", "Please tell me there's more.", "...", "I'm disappointed.", "Be better.", "Do better.", "That's it?", "Good. If you want to get hacked.", "Poor", "Give me a little more effort.", "That's what you are going with?"]
var level3 = ["Okay. Better.", "Hmmm. Maybe you are smart.", "Add some special characters. Please.", "(－‸ლ)", "I pray for your bank account.", "Could be better.", "Add...more...", "B-", "Add a '&' or someething.", "More. MORE. MORE!", "Use more of that brain.", "Great! Now try again."]
var level4 = ["You're getting it.", "Wow something other than 123.", "I'm clapping right now.", "Your mother is proud.", "You're doing great sweetie.", "Warmer.", "Better.", "Give me more *umph*.", "I'll give you an A (for now).", "Are you writing this down?", "You are kinda smart.", "You got it! (kinda)", "I believe in you."]


// declare variables and fill them with its element via id
var password = document.getElementById("password");
var heckle = document.getElementById("heckle");

// variable for button
const toggleButton = document.querySelector(".btn");


// eventListener -> waits for an event to occur, in this case we are waiting for an input
    // check length (have 4 different levels)
// randomize each line for each level
password.addEventListener("input", () => { 
    if(password.value.length == 0){  // length of password = 0
        heckle.innerHTML = "I asked for a PASSWORD.";
        console.log(document.body.style.backgroundColor);
        
        // whenever we go back to password.length = 0, we want the box to be white for dark mode and visa versa
        if(document.body.style.backgroundColor == "rgb(242, 232, 207)"){  // light mode
            password.style.borderColor = "black";
            heckle.style.color = "black";
        } else{  // dark mode
            password.style.borderColor = "white";
            heckle.style.color = "white";
        }

    } else if (password.value.length <= 2){  // level 1 (red)
        const randomLine1 = Math.floor(Math.random() * level1.length);
        console.log(randomLine1, level1[randomLine1]);

        heckle.innerHTML = level1[randomLine1];
        password.style.borderColor = "#C1121F";
        heckle.style.color = "#C1121F";

    } else if(password.value.length >= 3 && password.value.length <= 6){  // level 2 (orange)
        const randomLine2 = Math.floor(Math.random() * level2.length);
        console.log(randomLine2, level2[randomLine2]);

        heckle.innerHTML = level2[randomLine2];
        password.style.borderColor = "#ff8500";
        heckle.style.color = "#ff8500";

    } else if(password.value.length >= 7 && password.value.length <= 11){  // level 3 (yellow)
        const randomLine3 = Math.floor(Math.random() * level3.length);
        console.log(randomLine3, level3[randomLine3]);

        heckle.innerHTML = level3[randomLine3];

        // change the tone of the yellow depending on light or dark mode
        if(document.body.style.backgroundColor == "rgb(242, 232, 207)"){  // light mode
            password.style.borderColor = "#ffb703";
            heckle.style.color = "#ffb703";
        } else{  // dark mode
            password.style.borderColor = "#ffdd00";
            heckle.style.color = "#ffdd00";
    
        }
    } else if(password.value.length > 12){  // level 4 (green)
        const randomLine4 = Math.floor(Math.random() * level4.length);
        console.log(randomLine4, level4[randomLine4]);

        heckle.innerHTML = level4[randomLine4];
        password.style.borderColor = "#08a045";
        heckle.style.color = "#08a045";
    }
})

// function that will change the toggle image
function changeImage(fileName){
    let img = document.querySelector("#toggle");
    img.setAttribute("src", fileName);
}

// keep count of clicks (this will allow us to toggle the light and dark mode)
var clicks = 1;
toggleButton.addEventListener("click", () => {
    clicks++;
});

toggleButton.addEventListener("click", () => {
    if(clicks % 2 == 0){ // light mode
        console.log("light mode");
        password.style.borderColor = password.style.color = heckle.style.color = "black";  // input box and password
        document.body.style.backgroundColor = "#f2e8cf"; 
        changeImage("dark.png");
    } else{  // dark mode
        console.log("dark mode");
        password.style.borderColor = password.style.color = heckle.style.color = "white";  // input box and password
        document.body.style.backgroundColor = "#201f21";
        changeImage("light.png");
    }
});

