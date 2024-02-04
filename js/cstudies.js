let date = Math.floor(Date.now() / 1000)
let day = Math.floor(date / 86400)
let bdayLaurence = Math.floor(1114905600 / 86400)
let yrsLaurence = Math.floor((day - bdayLaurence) / 365)
let daysLaurence = (day - bdayLaurence) % 365

const dataLaurence = `Laurence (also known as "Chargie"), created MAY 01 - 2005, currently ` + yrsLaurence + ` years and ` + daysLaurence + ` days of age, takes on the shape of a space-grey coloured charging brick, and is classified as a "robotic citizen with sapient capabilities".  <br><br>
In the bounds of Consolia, they are a pioneer in multiple fields, most notably in mechanical engineering, development of firearms, information technology and metaphysical research.<br><br>
Laurence has made it his mission to dig into the government and find out about their potential secrets. He is firmly against the current leadership, due to having made terrible experiences with it. More recently, they have been the victim of a targeted attack, which included torture and irreperable damage to his right eye. This isn't depicted in the attached image - the picture was taken from their identification card and is considered out of date.<br><br>
They are currently one of the most wanted individuals within the megalopolis, due to several confirmed cases of intentional murder and grand theft, along with them being linked to a black market selling operation.`
const dataSpirit = `test2`
const dataRoman = `test3`
const dataCassidy = `test4`

const imgLaurence = '/media/laurencetransparent.png'
const imgSpirit = ''
const imgRoman = ''
const imgCassidy = ''

const images = [imgLaurence, imgSpirit, imgRoman, imgCassidy]
const citizens = ["Jinstar, Laurence"];
const data = [dataLaurence]



main();

function main() {
}

loopify("media/hum.wav", ready);
 function ready(err, loop) {
   if (err) {
     console.warn(err);
   }
   document.getElementById("firstClick").addEventListener("click", function () {
    loop.play();
   })
 }

function drawC(sound) {
    $('span').remove();
    const target = document.getElementById("main");
    for (let i = 0; i < citizens.length; i++) {
        target.innerHTML += "<span id='entry" + (i) +  "' style='user-select: none'>→ "  + citizens[i] + "<br></span>";
    }
    for (let i = 0; i < citizens.length; i++) {
        let item = document.getElementById(("entry" + i))
        item.addEventListener("click", open.bind(this, i));
    }
    if (sound) {
        let audio = new Audio('/media/buttonlow.wav');
        audio.play();
    }
}

function open(index) {
    let audio = new Audio('/media/buttonhigh.wav');
    audio.play();
    const target = document.getElementById("main");
    $('span').remove();
    target.innerHTML += "<span onclick='drawC(true)'>↓ " + citizens[index] + "</span><span><br><br><img src='" + images[index] + "'><br><br>" + data[index] + "</span>";
}
