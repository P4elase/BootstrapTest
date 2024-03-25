/////////////////// Random Color Buttons Block ////////////////////////////

class ColorChanger {
    constructor() {
        this.body = document.querySelector('body');
    }

    getRandomRGB() {
        return Math.random() * (255 - 0) + 0;
    }

    colorChange() {
        this.body.style.background = `rgb(${this.getRandomRGB()},${this.getRandomRGB()},${this.getRandomRGB()})`;
    }

    textChange() {
        this.body.style.color = `rgb(${this.getRandomRGB()},${this.getRandomRGB()},${this.getRandomRGB()})`;
    }

    changeBackground(red, green, blue) {
        this.body.style.background = `rgb(${red},${green},${blue})`;
    }

    changeText(red, green, blue) {
        this.body.style.color = `rgb(${red},${green},${blue})`;
    }
}


const colorChanger = new ColorChanger();


/////////////////// Color Sliders Block ////////////////////////////


class ColorSlidersChanger {
    constructor() {
        this.body = document.querySelector('body');
    }

    changeBackground() {
        let body = document.querySelector('body');
        body.style.background = 'rgb(' + document.getElementById("OutputIdRed").value + ',' + document.getElementById("OutputIdGreen").value + ',' + document.getElementById("OutputIdBlue").value + ')';
    }
    changeText() {
        let text = document.querySelector('body');
        text.style.color = 'rgb(' + document.getElementById("OutputIdRed1").value + ',' + document.getElementById("OutputIdGreen1").value + ',' + document.getElementById("OutputIdBlue1").value + ')';
    }
    
}


const colorSlidersChanger = new ColorSlidersChanger();

/////////////////// Event Listeners ////////////////////////////


document.getElementById('randomColorButton').addEventListener('click', () => {
    colorChanger.colorChange();
    colorChanger.textChange();
});

document.getElementById('changeBackgroundButton').addEventListener('click', () => {
    colorChanger.colorChange();
});

document.getElementById('changeTextButton').addEventListener('click', () => {
    colorChanger.textChange();
});




document.getElementById("customRange1").addEventListener("input", () => {
    colorSlidersChanger.changeBackground();
    Set_Cookie('OutputIdRed', document.getElementById("OutputIdRed").value, 7);
});
document.getElementById("customRange2").addEventListener("input", () => {
    colorSlidersChanger.changeBackground();
    Set_Cookie('OutputIdGreen', document.getElementById("OutputIdGreen").value, 7);
});
document.getElementById("customRange3").addEventListener("input", () => {
    colorSlidersChanger.changeBackground();
    Set_Cookie('OutputIdBlue', document.getElementById("OutputIdBlue").value, 7);
});


document.getElementById("customRange4").addEventListener("input", () => {
    colorSlidersChanger.changeText();
    Set_Cookie('OutputIdRed1', document.getElementById("OutputIdRed1").value, 7);
});
document.getElementById("customRange5").addEventListener("input", () => {
    colorSlidersChanger.changeText();
    Set_Cookie('OutputIdGreen1', document.getElementById("OutputIdGreen1").value, 7);
});
document.getElementById("customRange6").addEventListener("input", () => {
    colorSlidersChanger.changeText();
    Set_Cookie('OutputIdBlue1', document.getElementById("OutputIdBlue1").value, 7);
});

document.getElementById('DefaultColors').addEventListener('click', () => {
    let text = document.querySelector('body');
    text.style.color = 'black';
    text.style.background = 'aliceblue';
});
/////////////////// Cooooking ////////////////////////////


// function Set_Cookie(name, value, days) {
//     let expires = "";
//     let date = new Date();
//     if (days) {  
//         date.setTime(date.getTime() + (days*24*60*60*1000));
//         expires = "; expires=" + date.toUTCString();
//     }
//     document.cookie = name + "=" + (value || "") + expires + "; path=/";
// }

// function getCookie(name) {
//     let nameEQ = name + "=";
//     let ca = document.cookie.split(';');
//     for(let i=0;i < ca.length;i++) {
//         let c = ca[i];
//         while (c.charAt(0)==' ') c = c.substring(1,c.length);
//         if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
//     }
//     return null;
// }

// function applySliderValuesFromCookies() {
//     const red = getCookie('OutputIdRed') || 127;
//     const green = getCookie('OutputIdGreen') || 127;
//     const blue = getCookie('OutputIdBlue') || 127;
//     const red1 = getCookie('OutputIdRed1') || 127;
//     const green1 = getCookie('OutputIdGreen1') || 127;
//     const blue1 = getCookie('OutputIdBlue1') || 127;

//     document.getElementById("OutputIdRed").value = red;
//     document.getElementById("OutputIdGreen").value = green;
//     document.getElementById("OutputIdBlue").value = blue;
//     document.getElementById("OutputIdRed1").value = red1;
//     document.getElementById("OutputIdGreen1").value = green1;
//     document.getElementById("OutputIdBlue1").value = blue1;


//     colorSlidersChanger.changeBackground();

//     colorSlidersChanger.changeText();
// }

// window.onload = applySliderValuesFromCookies;


// function deleteCookie(name) {
//     document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
// }

// document.getElementById('deleteCookieButton').addEventListener('click', () => {
//     deleteCookie('OutputIdRed');
//     deleteCookie('OutputIdGreen');
//     deleteCookie('OutputIdBlue');
//     deleteCookie('OutputIdRed1');
//     deleteCookie('OutputIdGreen1');
//     deleteCookie('OutputIdBlue1');
// });