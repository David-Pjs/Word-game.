console.log("hello");
const btnel4 = document.getElementById("btn-el4")
const btnel1 = document.getElementById("btn-el1")
let Score = document.getElementById("score")
let scoreboard = 0


document.getElementById('pr').innerHTML = '<h1>Word Game</h1>'

document.getElementById('lp').innerHTML = '<p>Want to have fun while learning new words?</p>'
document.getElementById('gr').innerHTML = '<p>Well then......Get readyyy!1111</p>'
document.getElementById("Play").innerHTML = "<button onclick='play()' >Play</button>"

document.getElementById('daily').innerHTML = '<button>Daily challenge</button>'
document.getElementById('new').innerHTML = '<button>New words</button>'
document.getElementById('facts').innerHTML = '<button>Interesting facts</button>'
document.getElementById('thoughts').innerHTML = '<button>Questions</button>'
document.getElementById("settings").innerHTML = "<button onclick='settings()' >Settings</button>"



function play() {
    console.log('PLAY');
    document.getElementById("pr").innerHTML = '<p></p>'
    document.getElementById("lp").innerHTML = '<p></p>'
    document.getElementById("gr").innerHTML = '<p></p>'
    document.getElementById("Play").innerHTML = '<p></p>'
    document.getElementById("daily").innerHTML = '<p></p>'
    document.getElementById("new").innerHTML = '<p></p>'
    document.getElementById("facts").innerHTML = '<p></p>'
    document.getElementById("thoughts").innerHTML = '<p></p>'
    document.getElementById("settings").innerHTML = '<p></p>'

    User = prompt("Enet your name user!!")
    document.getElementById("greeting").innerHTML = `Hello ${User}`
    document.getElementById("display").innerHTML = '<p>SELECT A LEVEL</p>'
    document.getElementById("level1").innerHTML = '<button onclick= "levelone()">LEVEL 1</button>'
    document.getElementById("level2").innerHTML = '<button onclick= "levelone()">LEVEL 2</button>'
    document.getElementById("level3").innerHTML = '<button onclick= "levelthree()">LEVEL 3</button>'

}

function settings(){
    document.getElementById("pr").innerHTML = '<p></p>'
    document.getElementById("lp").innerHTML = '<p></p>'
    document.getElementById("gr").innerHTML = '<p></p>'
    document.getElementById("Play").innerHTML = '<p></p>'
    document.getElementById("daily").innerHTML = '<p></p>'
    document.getElementById("new").innerHTML = '<p></p>'
    document.getElementById("facts").innerHTML = '<p></p>'
    document.getElementById("thoughts").innerHTML = '<p></p>'

    
      
}

function challenge() {

}

function words() {

}
// <p id="Level1">Level 1</p>
//         <button onclick="btn()" id="btn-el2"> LETS PLAY</button> <br>

//         <p id="display-el"></p>

//         <p id="display-el2"></p>
//         <p id="display"></p>
{
    /* <button id="btn-el4" onclick="btn()"> START GAME</button>
    <p id="display-el2"></p>
    <p id="score">SCORE: 0</p>
    <p>TIMER</p> */
}

function levelthree() {
    document.getElementById("greeting").innerHTML = '<p> </p>'
    document.getElementById("display").innerHTML = '<p> </p>'

    document.getElementById("start").innerHTML = "<button onclick='btn()' >START</button>"
    document.getElementById("level1").innerHTML = '<p></p>'
    document.getElementById("level2").innerHTML = '<p></p>'
    document.getElementById("level3").innerHTML = '<p></p>'
    document.getElementById("level4").innerHTML = '<p></p>'
    document.getElementById("level5").innerHTML = '<p></p>'

}

function btn() {
    console.log("him");
    document.getElementById("start").innerHTML = "<p  ></p>"

    document.getElementById("display-el2").innerHTML = `Instructions: 
    Choose the word that best suits the meaning or give the coreect spelling for the word. `

    document.getElementById("display-el3").innerHTML = "<p>Q1</p>"
    document.getElementById("display-el4").innerHTML = '<p>Kept secret or done secretly.</p>'
    document.getElementById("display-el5").innerHTML = "<button onclick='one()' >Coocon</button>"
    document.getElementById("display-el6").innerHTML = "<button onclick='two()' >Clandestine</button>"
    document.getElementById("display-el7").innerHTML = "<button onclick='three()' >Convoid</button>"
    document.getElementById("display-el8").innerHTML = "<button onclick='four()' >Agnostic</buton>"
    document.getElementById("score").innerHTML = "<p>SCORE:</p>"
    document.getElementById("timer").innerHTML = "<p>TIMER:</p>"

}

function one() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Clandestine</p>'
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='next()' > NEXT</button>"
}

function two() {
    document.getElementById("co").innerHTML = '<p>Correct!! </br> Keep playing</p>'
    scoreboard = scoreboard + 1
    Score.innerText = `SCORE: ${scoreboard }`
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='next()' > NEXT</button>"

}

function three() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Clandestine</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='next()' > NEXT</button>"

}

function four() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Clandestine</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='next()' > NEXT</button>"

}



function next() {
    document.getElementById("co").innerHTML = '<p></p>'

    console.log("him");
    document.getElementById("start").innerHTML = "<p  ></p>"
    document.getElementById("display-el2").innerHTML = `Instructions: 
    Choose the word that best suits the meaning or give the coreect spelling for the word. `
    document.getElementById("display-el3").innerHTML = "<p></p>"
    document.getElementById("display-el4").innerHTML = '<p>.</p>'
    document.getElementById("display-el5").innerHTML = "<button onclick='a()' >February</button>"
    document.getElementById("display-el6").innerHTML = "<button onclick='b()' >Ferbuary</button>"
    document.getElementById("display-el7").innerHTML = "<button onclick='c()' >Febuary</button>"
    document.getElementById("display-el8").innerHTML = "<button onclick='d()' >Febuarry</buton>"
    document.getElementById("score").innerHTML = "<p>SCORE:</p>"
    document.getElementById("timer").innerHTML = "<p>TIMER:</p>"
}


function a() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Ferbuary</p>'
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='nexttt()' > -></button>"


}

function b() {
    document.getElementById("co").innerHTML = '<p>Correct!! </br> </p>'
    scoreboard = scoreboard + 1
    Score.innerText = `SCORE: ${scoreboard }`
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='nexttt()' > -></button>"

}

function c() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Faebruary</p>'
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='nexttt()' > -></button>"

}

function d() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Faebruary</p>'
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='nexttt()' > -></button>"

}

function nexttt() {
    document.getElementById("co").innerHTML = '<p></p>'

    console.log("him");
    document.getElementById("start").innerHTML = "<p  ></p>"
    document.getElementById("display-el2").innerHTML = `Instructions: 
    Choose the word that best suits the meaning or give the coreect spelling for the word. `
    document.getElementById("display-el3").innerHTML = "<p></p>"
    document.getElementById("display-el4").innerHTML = '<p>The state of having being abandoned.</p>'
    document.getElementById("display-el5").innerHTML = "<button onclick='e()' >Derelictiony</button>"
    document.getElementById("display-el6").innerHTML = "<button onclick='f()' >Advocate</button>"
    document.getElementById("display-el7").innerHTML = "<button onclick='g()' >Metacognition</button>"
    document.getElementById("display-el8").innerHTML = "<button onclick='h()' >allocate</buton>"
    document.getElementById("score").innerHTML = "<p>SCORE:</p>"
    document.getElementById("timer").innerHTML = "<p>TIMER:</p>"
}


function e() {
    document.getElementById("co").innerHTML = '<p>Correct!! </br> </p>'

    scoreboard = scoreboard + 1
    Score.innerText = `SCORE: ${scoreboard }`
    stop()
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='nextt()' > -></button>"


}

function f() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is dereliction</p>'
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='nextt()' > -></button>"

}

function g() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is dereliction</p>'
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='nextt()' > -></button>"

}

function h() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is dereliction</p>'
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='nextt()' > -></button>"

}

function nextt() {
    document.getElementById("co").innerHTML = '<p></p>'

    console.log("him");
    document.getElementById("start").innerHTML = "<p  ></p>"
    document.getElementById("display-el2").innerHTML = `Instructions: 
    Choose the word that best suits the meaning or give the coreect spelling for the word. `
    document.getElementById("display-el3").innerHTML = "<p></p>"
    document.getElementById("display-el4").innerHTML = '<p>The rejection of all religious and moral principles in the believe thhat life is meaningless.</p>'
    document.getElementById("display-el5").innerHTML = "<button onclick='i()' >Nihilism</button>"
    document.getElementById("display-el6").innerHTML = "<button onclick='j()' >Surrealism</button>"
    document.getElementById("display-el7").innerHTML = "<button onclick='k()' >Racism</button>"
    document.getElementById("display-el8").innerHTML = "<button onclick='l()' >Objectivism</buton>"
    document.getElementById("score").innerHTML = "<p>SCORE:</p>"
    document.getElementById("timer").innerHTML = "<p>TIMER:</p>"
}


function i() {
    document.getElementById("co").innerHTML = '<p>Correct!! </br> </p>'
    scoreboard = scoreboard + 1
    Score.innerText = `SCORE: ${scoreboard }`
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='retrospect()' > -></button>"


}

function j() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Nihilism</p>'
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='retrospect()' > -></button>"

}

function k() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Nihilism</p>'
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='retrospect()' > -></button>"

}

function l() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Nihilism</p>'
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='retrospect()' > -></button>"

}


function retrospect() {
    document.getElementById("co").innerHTML = '<p></p>'
    console.log("him");
    document.getElementById("start").innerHTML = "<p  ></p>"
    document.getElementById("display-el2").innerHTML = `Instructions: 
    Choose the word that best suits the meaning or give the coreect spelling for the word. 
    `
    document.getElementById("display-el3").innerHTML = "<p></p>"
    document.getElementById("display-el4").innerHTML = '<p>A survey or review of past events.</p>'
    document.getElementById("display-el5").innerHTML = "<button onclick='m()' >Plan</button>"
    document.getElementById("display-el6").innerHTML = "<button onclick='n()' >Census</button>"
    document.getElementById("display-el7").innerHTML = "<button onclick='o()' >Retrospect</button>"
    document.getElementById("display-el8").innerHTML = "<button onclick='p()' >Redress</buton>"
    document.getElementById("score").innerHTML = "<p>SCORE:</p>"
    document.getElementById("timer").innerHTML = "<p>TIMER:</p>"
}


function m() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Retrospect</p>'
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='ne()' > -></button>"

}

function n() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Retrospect</p>'
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='ne()' > -></button>"

}

function o() {
    document.getElementById("co").innerHTML = '<p>Correct!! </br> </p>'

    scoreboard = scoreboard + 1
    Score.innerText = `SCORE: ${scoreboard }`


    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p><p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='ne()' > -></button>"

}

function p() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Retrospect</p>'
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='ne()' > -></button>"

}



function ne() {
    document.getElementById("co").innerHTML = '<p></p>'

    console.log("him");
    document.getElementById("start").innerHTML = "<p  ></p>"
    document.getElementById("display-el2").innerHTML = `Instructions: 
    Choose the word that best suits the meaning or give the coreect spelling for the word. `
    document.getElementById("display-el3").innerHTML = "<p></p>"
    document.getElementById("display-el4").innerHTML = '<p>A medicine taken to counter act a particular poison.</p>'
    document.getElementById("display-el5").innerHTML = "<button onclick='q()' >Oxytocin</button>"
    document.getElementById("display-el6").innerHTML = "<button onclick='r()' >Renin</button>"
    document.getElementById("display-el7").innerHTML = "<button onclick='s()' >Laxative</button>"
    document.getElementById("display-el8").innerHTML = "<button onclick='t()' >Antidote</buton>"
    document.getElementById("score").innerHTML = "<p>SCORE:</p>"
    document.getElementById("timer").innerHTML = "<p>TIMER:</p>"
}


function q() {

    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Antidote</p>'
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='ne1()' > -></button>"

}

function n() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Antidote</p>'
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='ne1()' > -></button>"

}

function s() {

    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Antidote</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='ne1()' > -></button>"

}

function t() {
    document.getElementById("co").innerHTML = '<p>Correct!! </br> </p>'
    scoreboard = scoreboard + 1
    Score.innerText = `SCORE: ${scoreboard }`
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='ne1()' > -></button>"

}






function ne1() {
    document.getElementById("co").innerHTML = '<p></p>'

    console.log("him");
    document.getElementById("start").innerHTML = "<p  ></p>"
    document.getElementById("display-el2").innerHTML = `Instructions: 
    Choose the word that best suits the meaning or give the coreect spelling for the word. `
    document.getElementById("display-el3").innerHTML = "<p></p>"
    document.getElementById("display-el4").innerHTML = '<p>Excessively harsh.</p>'
    document.getElementById("display-el5").innerHTML = "<button onclick='u()' >Communism</button>"
    document.getElementById("display-el6").innerHTML = "<button onclick='v()' >Military</button>"
    document.getElementById("display-el7").innerHTML = "<button onclick='w()' >Blush</button>"
    document.getElementById("display-el8").innerHTML = "<button onclick='x()' >Draconian</buton>"
    document.getElementById("score").innerHTML = "<p>SCORE:</p>"
    document.getElementById("timer").innerHTML = "<p>TIMER:</p>"
}


function u() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Draconian</p>'
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='ne2()' > -></button>"
}

function v() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Draconian</p>'
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='ne2()' > -></button>"

}

function w() {

    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Draconian</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='ne2()' > -></button>"

}

function x() {

    document.getElementById("co").innerHTML = '<p>Correct!! </br> </p>'
    scoreboard = scoreboard + 1
    Score.innerText = `SCORE: ${scoreboard }`
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='ne2()' > -></button>"

}




function ne2() {
    document.getElementById("co").innerHTML = '<p></p>'

    console.log("him");
    document.getElementById("start").innerHTML = "<p  ></p>"
    document.getElementById("display-el2").innerHTML = `Instructions: 
    Choose the word that best suits the meaning and give the correct spelling. `
    document.getElementById("display-el3").innerHTML = "<p></p>"
    document.getElementById("display-el4").innerHTML = '<p>An ideal or perfect society mostly fictional.</p>'
    document.getElementById("display-el5").innerHTML = "<button onclick='a1()' >Utopia</button>"
    document.getElementById("display-el6").innerHTML = "<button onclick='a2()' >Zone</button>"
    document.getElementById("display-el7").innerHTML = "<button onclick='a3()' >Ethical</button>"
    document.getElementById("display-el8").innerHTML = "<button onclick='a4()' >Rome</buton>"
    document.getElementById("score").innerHTML = "<p>SCORE:</p>"
    document.getElementById("timer").innerHTML = "<p>TIMER:</p>"
}


function a1() {
    document.getElementById("co").innerHTML = '<p>Correct!! </br> </p>'
    scoreboard = scoreboard + 1
    Score.innerText = `SCORE: ${scoreboard }`
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='uto()' > -></button>"


}

function a2() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Utopia</p>'
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='uto()' > -></button>"

}

function a3() {

    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Utopia</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='uto()' > -></button>"

}

function a4() {



    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Utopia</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='uto()' > -></button>"

}



function uto() {
    document.getElementById("co").innerHTML = '<p></p>'

    console.log("him");
    document.getElementById("start").innerHTML = "<p  ></p>"
    document.getElementById("display-el2").innerHTML = `Instructions: 
    Choose the word that best suits the meaning and give the correct spelling. `
    document.getElementById("display-el3").innerHTML = "<p></p>"
    document.getElementById("display-el4").innerHTML = '<p>Appears every where.</p>'
    document.getElementById("display-el5").innerHTML = "<button onclick='a5()' >Antique</button>"
    document.getElementById("display-el6").innerHTML = "<button onclick='a6()' >Ubiquitous</button>"
    document.getElementById("display-el7").innerHTML = "<button onclick='a7()' >Cogent</button>"
    document.getElementById("display-el8").innerHTML = "<button onclick='a8()' >Dynamic</buton>"
    document.getElementById("score").innerHTML = "<p>SCORE:</p>"
    document.getElementById("timer").innerHTML = "<p>TIMER:</p>"
}


function a5() {

    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Ubiquitous</p>'
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Ubiquitous()' > -></button>"


}

function a6() {

    document.getElementById("co").innerHTML = '<p>Correct!! </br> </p>'

    scoreboard = scoreboard + 1
    Score.innerText = `SCORE: ${scoreboard }`

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Ubiquitous()' > -></button>"

}

function a7() {

    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Ubiquitous</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Ubiquitous()' > -></button>"

}

function a8() {



    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Ubiquitous</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Ubiquitous()' > -></button>"

}



function Ubiquitous() {
    document.getElementById("co").innerHTML = '<p></p>'

    console.log("him");
    document.getElementById("start").innerHTML = "<p  ></p>"
    document.getElementById("display-el2").innerHTML = `Instructions: 
    Choose the word that best suits the meaning and give the correct spelling. `
    document.getElementById("display-el3").innerHTML = "<p></p>"
    document.getElementById("display-el4").innerHTML = '<p>Old fashioned.</p>'
    document.getElementById("display-el5").innerHTML = "<button onclick='aa1()' >Neanderthal</button>"
    document.getElementById("display-el6").innerHTML = "<button onclick='aa2()' >Era</button>"
    document.getElementById("display-el7").innerHTML = "<button onclick='aa3()' >Anachronistic</button>"
    document.getElementById("display-el8").innerHTML = "<button onclick='aa4()' >Mundane</buton>"
    document.getElementById("score").innerHTML = "<p>SCORE:</p>"
    document.getElementById("timer").innerHTML = "<p>TIMER:</p>"
}


function aa1() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Anachronistic</p>'
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Anachronistic()' > -></button>"
}

function aa2() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Anachronistic</p>'
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Anachronistic()' > -></button>"
}

function aa3() {
    document.getElementById("co").innerHTML = '<p>Correct!! </br> </p>'
    scoreboard = scoreboard + 1
    Score.innerText = `SCORE: ${scoreboard }`
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Anachronistic()' > -></button>"
}

function aa4() {



    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Anachronistic</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Anachronistic()' > -></button>"

}





function Anachronistic() {
    document.getElementById("co").innerHTML = '<p></p>'

    console.log("him");
    document.getElementById("start").innerHTML = "<p  ></p>"
    document.getElementById("display-el2").innerHTML = `Instructions: 
    Choose the word that best suits the meaning and give the correct spelling. `
    document.getElementById("display-el3").innerHTML = "<p></p>"
    document.getElementById("display-el4").innerHTML = '<p>The quality of being impressive and imposing in appearance or style.</p>'
    document.getElementById("display-el5").innerHTML = "<button onclick='aa5()' >Grandiosity</button>"
    document.getElementById("display-el6").innerHTML = "<button onclick='aa6()' >Pretty</button>"
    document.getElementById("display-el7").innerHTML = "<button onclick='aa7()' >Fascinating</button>"
    document.getElementById("display-el8").innerHTML = "<button onclick='aa8()' >Beautiful</buton>"
    document.getElementById("score").innerHTML = "<p>SCORE:</p>"
    document.getElementById("timer").innerHTML = "<p>TIMER:</p>"
}


function aa5() {
    document.getElementById("co").innerHTML = '<p>Correct!! </br> </p>'
    scoreboard = scoreboard + 1
    Score.innerText = `SCORE: ${scoreboard }`
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Grandiosity()' > -></button>"

}

function aa6() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Grandiosity</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Grandiosity()' > -></button>"

}

function aa7() {

    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Grandiosity</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Grandiosity()' > -></button>"

}

function aa8() {



    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Grandiosity</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Grandiosity()' > -></button>"

}





function Grandiosity() {
    document.getElementById("co").innerHTML = '<p></p>'

    console.log("him");
    document.getElementById("start").innerHTML = "<p  ></p>"
    document.getElementById("display-el2").innerHTML = `Instructions: 
    Choose the word that best suits the meaning and give the correct spelling. `
    document.getElementById("display-el3").innerHTML = "<p></p>"
    document.getElementById("display-el4").innerHTML = '<p>Unwilling to take risksl.</p>'
    document.getElementById("display-el5").innerHTML = "<button onclick='aaa1()' >Cocon</button>"
    document.getElementById("display-el6").innerHTML = "<button onclick='aaa2()' >Waver</button>"
    document.getElementById("display-el7").innerHTML = "<button onclick='aaa3()' >Lock</button>"
    document.getElementById("display-el8").innerHTML = "<button onclick='aaa4()' >Circumspect</buton>"
    document.getElementById("score").innerHTML = "<p>SCORE:</p>"
    document.getElementById("timer").innerHTML = "<p>TIMER:</p>"
}


function aaa1() {

    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Circumspect</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Circumspect()' > -></button>"

}

function aaa2() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Circumspect</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Circumspect()' > -></button>"

}

function aaa3() {

    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Circumspect</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Circumspect()' > -></button>"

}

function aaa4() {
    document.getElementById("co").innerHTML = '<p>Correct!! </br> </p>'
    scoreboard = scoreboard + 1
    Score.innerText = `SCORE: ${scoreboard }`
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Circumspect()' > -></button>"

}




function Circumspect() {
    document.getElementById("co").innerHTML = '<p></p>'
    console.log("him");
    document.getElementById("start").innerHTML = "<p  ></p>"
    document.getElementById("display-el2").innerHTML = `Instructions: 
    Choose the word that best suits the meaning and give the correct spelling. `
    document.getElementById("display-el3").innerHTML = "<p></p>"
    document.getElementById("display-el4").innerHTML = '<p>Having the ability to speak fluently.</p>'
    document.getElementById("display-el5").innerHTML = "<button onclick='aaa5()' >Articulate</button>"
    document.getElementById("display-el6").innerHTML = "<button onclick='aaa6()' >Adapt</button>"
    document.getElementById("display-el7").innerHTML = "<button onclick='aaa7()' >Anticipate</button>"
    document.getElementById("display-el8").innerHTML = "<button onclick='aaa8()' >Edicate</buton>"
    document.getElementById("score").innerHTML = "<p>SCORE:</p>"
    document.getElementById("timer").innerHTML = "<p>TIMER:</p>"
}


function aaa5() {
    document.getElementById("co").innerHTML = '<p>Correct!! </br> </p>'
    scoreboard = scoreboard + 1
    Score.innerText = `SCORE: ${scoreboard }`
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Artic()' > -></button>"

}

function aaa6() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Articulate</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Artic()' > -></button>"

}

function aaa7() {

    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Articulate</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Artic()' > -></button>"

}

function aaa8() {



    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Articulate</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Artic()' > -></button>"

}



function Artic() {
    document.getElementById("co").innerHTML = '<p></p>'

    console.log("him");
    document.getElementById("start").innerHTML = "<p  ></p>"
    document.getElementById("display-el2").innerHTML = `Instructions: 
    Choose the word that best suits the meaning and give the correct spelling. `
    document.getElementById("display-el3").innerHTML = "<p></p>"
    document.getElementById("display-el4").innerHTML = '<p>.</p>'
    document.getElementById("display-el5").innerHTML = "<button onclick='ab1()' >Reterate</button>"
    document.getElementById("display-el6").innerHTML = "<button onclick='ab2()' >Retterate</button>"
    document.getElementById("display-el7").innerHTML = "<button onclick='ab3()' >Reiterate</button>"
    document.getElementById("display-el8").innerHTML = "<button onclick='ab4()' >Retorate</buton>"
    document.getElementById("score").innerHTML = "<p>SCORE:</p>"
    document.getElementById("timer").innerHTML = "<p>TIMER:</p>"
}


function ab1() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Reiterate</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Reiterate()' > -></button>"

}

function ab2() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Reiterate</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Reiterate()' > -></button>"

}

function ab3() {

    document.getElementById("co").innerHTML = '<p>Correct!! </br> </p>'
    scoreboard = scoreboard + 1
    Score.innerText = `SCORE: ${scoreboard }`

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Reiterate()' > -></button>"

}

function ab4() {



    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Reiterate</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Reiterate()' > -></button>"

}


function Reiterate() {
    document.getElementById("co").innerHTML = '<p></p>'

    console.log("him");
    document.getElementById("start").innerHTML = "<p  ></p>"
    document.getElementById("display-el2").innerHTML = `Instructions: 
    Choose the word that best suits the meaning and give the correct spelling. `
    document.getElementById("display-el3").innerHTML = "<p></p>"
    document.getElementById("display-el4").innerHTML = '<p>.</p>'
    document.getElementById("display-el5").innerHTML = "<button onclick='ab5()' >Pneumonia</button>"
    document.getElementById("display-el6").innerHTML = "<button onclick='ab6()' >Nemonia</button>"
    document.getElementById("display-el7").innerHTML = "<button onclick='ab7()' >Pnewmonia</button>"
    document.getElementById("display-el8").innerHTML = "<button onclick='ab8()' >Neumonea</buton>"
    document.getElementById("score").innerHTML = "<p>SCORE:</p>"
    document.getElementById("timer").innerHTML = "<p>TIMER:</p>"
}


function ab5() {
    document.getElementById("co").innerHTML = '<p>Correct!! </br> </p>'
    scoreboard = scoreboard + 1
    Score.innerText = `SCORE: ${scoreboard }`

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Pneumonia()' > -></button>"

}

function ab6() {
    document.getElementById("co").innerHTML = '<p>Wrong th right answer is Pneumonia</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Pneumonia()' > -></button>"

}

function ab7() {

    document.getElementById("co").innerHTML = '<p>Wrong th right answer is Pneumonia</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Pneumonia()' > -></button>"

}

function ab8() {



    document.getElementById("co").innerHTML = '<p>Wrong th right answer is Pneumonia</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Pneumonia()' > -></button>"

}

function Pneumonia() {
    document.getElementById("co").innerHTML = '<p></p>'

    console.log("him");
    document.getElementById("start").innerHTML = "<p  ></p>"
    document.getElementById("display-el2").innerHTML = `Instructions: 
    Choose the word that best suits the meaning and give the correct spelling. `
    document.getElementById("display-el3").innerHTML = "<p></p>"
    document.getElementById("display-el4").innerHTML = '<p>l.</p>'
    document.getElementById("display-el5").innerHTML = "<button onclick='ac1()' >Coloquial</button>"
    document.getElementById("display-el6").innerHTML = "<button onclick='ac2()' >Colloquial</button>"
    document.getElementById("display-el7").innerHTML = "<button onclick='ac3()' >Quolloquial</button>"
    document.getElementById("display-el8").innerHTML = "<button onclick='ac4()' >Colloqual</buton>"
    document.getElementById("score").innerHTML = "<p>SCORE:</p>"
    document.getElementById("timer").innerHTML = "<p>TIMER:</p>"
}


function ac1() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Colloquial</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Colloquial()' > -></button>"


}

function ac2() {

    document.getElementById("co").innerHTML = '<p>Correct!! </br> </p>'

    scoreboard = scoreboard + 1
    Score.innerText = `SCORE: ${scoreboard }`

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Colloquial()' > -></button>"

}

function ac3() {

    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Colloquial</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Colloquial()' > -></button>"

}

function ac4() {

    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Colloquial</p>'



    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Colloquial()' > -></button>"

}


function Colloquial() {
    document.getElementById("co").innerHTML = '<p></p>'

    console.log("him");
    document.getElementById("start").innerHTML = "<p  ></p>"
    document.getElementById("display-el2").innerHTML = `Instructions: 
    Choose the word that best suits the meaning and give the correct spelling. `
    document.getElementById("display-el3").innerHTML = "<p></p>"
    document.getElementById("display-el4").innerHTML = '<p>Capable of producing an abundance of offspirings.</p>'
    document.getElementById("display-el5").innerHTML = "<button onclick='ac5()' >Fecund</button>"
    document.getElementById("display-el6").innerHTML = "<button onclick='ac6()' >Connotation</button>"
    document.getElementById("display-el7").innerHTML = "<button onclick='ac7()' >Tryst</button>"
    document.getElementById("display-el8").innerHTML = "<button onclick='ac8()' >Chyme</buton>"
    document.getElementById("score").innerHTML = "<p>SCORE:</p>"
    document.getElementById("timer").innerHTML = "<p>TIMER:</p>"
}


function ac5() {
    document.getElementById("co").innerHTML = '<p>Correct!! </br> </p>'

    scoreboard = scoreboard + 1
    Score.innerText = `SCORE: ${scoreboard }`

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Fecund()' > -></button>"

}

function ac6() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Fecund</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Fecund()' > -></button>"

}

function ac7() {

    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Fecund</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Fecund()' > -></button>"

}

function ac8() {



    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Fecund</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Fecund()' > -></button>"

}


function Fecund() {
    document.getElementById("co").innerHTML = '<p></p>'

    console.log("him");
    document.getElementById("start").innerHTML = "<p  ></p>"
    document.getElementById("display-el2").innerHTML = `Instructions: 
    Choose the word that best suits the meaning and give the correct spelling. `
    document.getElementById("display-el3").innerHTML = "<p></p>"
    document.getElementById("display-el4").innerHTML = '<p>A set of instructions for problem solving.</p>'
    document.getElementById("display-el5").innerHTML = "<button onclick='ad1()' >Algebra.</button>"
    document.getElementById("display-el6").innerHTML = "<button onclick='ad2()' >Map.</button>"
    document.getElementById("display-el7").innerHTML = "<button onclick='ad3()' >Pie chart.</button>"
    document.getElementById("display-el8").innerHTML = "<button onclick='ad4()' >Algorithm.</buton>"
    document.getElementById("score").innerHTML = "<p>SCORE:</p>"
    document.getElementById("timer").innerHTML = "<p>TIMER:</p>"

}


function ad1() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Algorithm</p>'
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Algorithms()' > -></button>"
}

function ad2() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Algorithm</p>'
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Algorithms()' > -></button>"
}


function ad3() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Algorithm</p>'
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Algorithms()' > -></button>"
}

function ad4() {

    document.getElementById("co").innerHTML = '<p>Correct!! </p>'
    scoreboard = scoreboard + 1
    Score.innerText = `SCORE: ${scoreboard }`
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Algorithms()' > NEXT</button>"

}


function Algorithms() {
    document.getElementById("co").innerHTML = '<p></p>'

    console.log("him");
    document.getElementById("start").innerHTML = "<p  ></p>"
    document.getElementById("display-el2").innerHTML = `Instructions: 
    Choose the word that best suits the meaning and give the correct spelling. `
    document.getElementById("display-el3").innerHTML = "<p></p>"
    document.getElementById("display-el4").innerHTML = '<p>A treatment of disease by conventional means.</p>'
    document.getElementById("display-el5").innerHTML = "<button onclick='ad5()' >Allopathy</button>"
    document.getElementById("display-el6").innerHTML = "<button onclick='ad6()' >Ortodox</button>"
    document.getElementById("display-el7").innerHTML = "<button onclick='ad7()' >Western</button>"
    document.getElementById("display-el8").innerHTML = "<button onclick='ad8()' >Northern</buton>"
    document.getElementById("score").innerHTML = "<p>SCORE:</p>"
    document.getElementById("timer").innerHTML = "<p>TIMER:</p>"
}


function ad5() {
    document.getElementById("co").innerHTML = '<p>Correct!! </br> </p>'

    scoreboard = scoreboard + 1
    Score.innerText = `SCORE: ${scoreboard }`

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Allopathy()' > -></button>"

}

function ad6() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Allopathy</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Allopathy()' > -></button>"

}

function ad7() {

    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Allopathy</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Allopathy()' > -></button>"

}

function ad8() {



    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Allopathy</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Allopathy()' > -></button>"

}


function Allopathy() {
    document.getElementById("co").innerHTML = '<p></p>'

    console.log("him");
    document.getElementById("start").innerHTML = "<p  ></p>"
    document.getElementById("display-el2").innerHTML = `Instructions: 
    Choose the word that best suits the meaning and give the correct spelling. `
    document.getElementById("display-el3").innerHTML = "<p></p>"
    document.getElementById("display-el4").innerHTML = '<p>Kind or friendly towards a younger or less experirnced person.</p>'
    document.getElementById("display-el5").innerHTML = "<button onclick='ae1()' >Greenhorn.</button>"
    document.getElementById("display-el6").innerHTML = "<button onclick='ae2()' >Amid.</button>"
    document.getElementById("display-el7").innerHTML = "<button onclick='ae3()' >Avunvular.</button>"
    document.getElementById("display-el8").innerHTML = "<button onclick='ae4()' >Avid.</buton>"
    document.getElementById("score").innerHTML = "<p>SCORE:</p>"
    document.getElementById("timer").innerHTML = "<p>TIMER:</p>"
}


function ae1() {
    document.getElementById("co").innerHTML = '<p>Wrong th right answer is Avunvular</p>'
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Avunvular()' > -></button>"

}

function ae2() {
    document.getElementById("co").innerHTML = '<p>Wrong th right answer is Avunvular</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Avunvular()' > -></button>"

}

function ae3() {
    document.getElementById("co").innerHTML = '<p>Correct!! </p>'
    scoreboard = scoreboard + 1
    Score.innerText = `SCORE: ${scoreboard }`
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Avunvular()' > NEXT</button>"

}

function ae4() {



    document.getElementById("co").innerHTML = '<p>Wrong th right answer is Avunvular</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Avunvular()' > -></button>"

}


function Avunvular() {
    document.getElementById("co").innerHTML = '<p></p>'

    console.log("him");
    document.getElementById("start").innerHTML = "<p  ></p>"
    document.getElementById("display-el2").innerHTML = `Instructions: 
    Choose the word that best suits the meaning and give the correct spelling. `
    document.getElementById("display-el3").innerHTML = "<p></p>"
    document.getElementById("display-el4").innerHTML = '<p>A bold manner or show of boldness intended toimpress.</p>'
    document.getElementById("display-el5").innerHTML = "<button onclick='ae5()' >Heroism</button>"
    document.getElementById("display-el6").innerHTML = "<button onclick='ae6()' >Bravado</button>"
    document.getElementById("display-el7").innerHTML = "<button onclick='ae7()' >Acorn</button>"
    document.getElementById("display-el8").innerHTML = "<button onclick='ae8()' >Linger</buton>"
    document.getElementById("score").innerHTML = "<p>SCORE:</p>"
    document.getElementById("timer").innerHTML = "<p>TIMER:</p>"
}


function ae5() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Bravado</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Bravado()' > -></button>"

}

function ae6() {

    document.getElementById("co").innerHTML = '<p>Correct!! </br>  </p>'
    scoreboard = scoreboard + 1
    Score.innerText = `SCORE: ${scoreboard }`
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Bravado()' > NEXT</button>"


}

function ae7() {

    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Bravado</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Bravado()' > -></button>"

}

function ae8() {



    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Bravado</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Bravado()' > -></button>"

}


function Bravado() {
    document.getElementById("co").innerHTML = '<p></p>'

    console.log("him");
    document.getElementById("start").innerHTML = "<p  ></p>"
    document.getElementById("display-el2").innerHTML = `Instructions: 
    Choose the word that best suits the meaning and give the correct spelling. `
    document.getElementById("display-el3").innerHTML = "<p></p>"
    document.getElementById("display-el4").innerHTML = '<p>Old fashioned.</p>'
    document.getElementById("display-el5").innerHTML = "<button onclick='af1()' >Archaic.</button>"
    document.getElementById("display-el6").innerHTML = "<button onclick='af2()' >Ardent.</button>"
    document.getElementById("display-el7").innerHTML = "<button onclick='af3()' >Advert.</button>"
    document.getElementById("display-el8").innerHTML = "<button onclick='af4()' >Ariary.</buton>"
    document.getElementById("score").innerHTML = "<p>SCORE:</p>"
    document.getElementById("timer").innerHTML = "<p>TIMER:</p>"
}


function af1() {
    document.getElementById("co").innerHTML = '<p>Correct!! </br>  </p>'
    scoreboard = scoreboard + 1
    Score.innerText = `SCORE: ${scoreboard }`
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Archaic()' > NEXT</button>"


}

function af2() {
    document.getElementById("co").innerHTML = '<p>Wrong th right answer is Archaic</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Archaic()' > -></button>"

}

function af3() {

    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Archaic</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Archaic()' > -></button>"

}

function af4() {



    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Archaic</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Archaic()' > -></button>"

}


function Archaic() {
    document.getElementById("co").innerHTML = '<p></p>'

    console.log("him");
    document.getElementById("start").innerHTML = "<p  ></p>"
    document.getElementById("display-el2").innerHTML = `Instructions: 
    Choose the word that best suits the meaning and give the correct spelling. `
    document.getElementById("display-el3").innerHTML = "<p></p>"
    document.getElementById("display-el4").innerHTML = '<p>Strong hostilty.</p>'
    document.getElementById("display-el5").innerHTML = "<button onclick='af5()' >Animosity</button>"
    document.getElementById("display-el6").innerHTML = "<button onclick='af6()' >Antagonistic</button>"
    document.getElementById("display-el7").innerHTML = "<button onclick='af7()' >Protagonistic</button>"
    document.getElementById("display-el8").innerHTML = "<button onclick='af8()' >Optimistic</buton>"
    document.getElementById("score").innerHTML = "<p>SCORE:</p>"
    document.getElementById("timer").innerHTML = "<p>TIMER:</p>"
}


function af5() {
    document.getElementById("co").innerHTML = '<p>Correct!! </br>  </p>'
    scoreboard = scoreboard + 1
    Score.innerText = `SCORE: ${scoreboard }`
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Animosity()' > NEXT</button>"


}

function af6() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Animosity</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Animosity()' > -></button>"

}

function af7() {

    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Animosity</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Animosity()' > -></button>"

}

function af8() {



    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Animosity</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Animosity()' > -></button>"

}


function Animosity() {
    document.getElementById("co").innerHTML = '<p></p>'

    console.log("him");
    document.getElementById("start").innerHTML = "<p  ></p>"
    document.getElementById("display-el2").innerHTML = `Instructions: 
    Choose the word that best suits the meaning and give the correct spelling. `
    document.getElementById("display-el3").innerHTML = "<p></p>"
    document.getElementById("display-el4").innerHTML = '<p>To flow or come forth from a channel.</p>'
    document.getElementById("display-el5").innerHTML = "<button onclick='ag1()' >Clypei</button>"
    document.getElementById("display-el6").innerHTML = "<button onclick='ag2()' >Disembogue</button>"
    document.getElementById("display-el7").innerHTML = "<button onclick='ag3()' >Dahila</button>"
    document.getElementById("display-el8").innerHTML = "<button onclick='ag4()' >Drain</buton>"
    document.getElementById("score").innerHTML = "<p>SCORE:</p>"
    document.getElementById("timer").innerHTML = "<p>TIMER:</p>"
}


function ag1() {

    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Disembogue</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Disembogue()' > -></button>"


}

function ag2() {

    document.getElementById("co").innerHTML = '<p>Correct!! </br>  </p>'
    scoreboard = scoreboard + 1
    Score.innerText = `SCORE: ${scoreboard }`
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Disembogue()' > NEXT</button>"


}

function ag3() {

    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Disembogue</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Disembogue()' > -></button>"

}

function ag4() {



    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Disembogue</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Disembogue()' > -></button>"

}


function Disembogue() {
    document.getElementById("co").innerHTML = '<p></p>'

    console.log("him");
    document.getElementById("start").innerHTML = "<p  ></p>"
    document.getElementById("display-el2").innerHTML = `Instructions: 
    Choose the word that best suits the meaning and give the correct spelling. `
    document.getElementById("display-el3").innerHTML = "<p></p>"
    document.getElementById("display-el4").innerHTML = '<p>A way in which something is usually done.</p>'
    document.getElementById("display-el5").innerHTML = "<button onclick='ag5()' >Convention</button>"
    document.getElementById("display-el6").innerHTML = "<button onclick='ag6()' >Composure</button>"
    document.getElementById("display-el7").innerHTML = "<button onclick='ag7()' >Convenant</button>"
    document.getElementById("display-el8").innerHTML = "<button onclick='ag8()' >Connection</buton>"
    document.getElementById("score").innerHTML = "<p>SCORE:</p>"
    document.getElementById("timer").innerHTML = "<p>TIMER:</p>"
}


function ag5() {
    document.getElementById("co").innerHTML = '<p>Correct!! </br>  </p>'
    scoreboard = scoreboard + 1
    Score.innerText = `SCORE: ${scoreboard }`
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Convention()' > NEXT</button>"

}

function ag6() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Convention</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Convention()' > -></button>"

}

function ag7() {

    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Convention</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Convention()' > -></button>"

}

function ag8() {



    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Convention</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Convention()' > -></button>"

}


function Convention() {
    document.getElementById("co").innerHTML = '<p></p>'

    console.log("him");
    document.getElementById("start").innerHTML = "<p  ></p>"
    document.getElementById("display-el2").innerHTML = `Instructions: 
    Choose the word that best suits the meaning and give the correct spelling. `
    document.getElementById("display-el3").innerHTML = "<p></p>"
    document.getElementById("display-el4").innerHTML = '<p>.</p>'
    document.getElementById("display-el5").innerHTML = "<button onclick='ah1()' >Aquire</button>"
    document.getElementById("display-el6").innerHTML = "<button onclick='ah2()' >Accquire</button>"
    document.getElementById("display-el7").innerHTML = "<button onclick='ah3()' >Acquirre</button>"
    document.getElementById("display-el8").innerHTML = "<button onclick='ah4()' >Acquire</buton>"
    document.getElementById("score").innerHTML = "<p>SCORE:</p>"
    document.getElementById("timer").innerHTML = "<p>TIMER:</p>"
}


function ah1() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Acquire</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Acquire()' > -></button>"


}

function ah2() {

    document.getElementById("co").innerHTML = '<p>Correct!! </br>  </p>'
    scoreboard = scoreboard + 1
    Score.innerText = `SCORE: ${scoreboard }`
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Acquire()' > NEXT</button>"

}

function ah3() {

    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Acquire</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Acquire()' > -></button>"

}

function ah4() {



    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Acquire</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Acquire()' > -></button>"

}


function Acquire() {
    document.getElementById("co").innerHTML = '<p></p>'

    console.log("him");
    document.getElementById("start").innerHTML = "<p  ></p>"
    document.getElementById("display-el2").innerHTML = `Instructions: 
    Choose the word that best suits the meaning and give the correct spelling. `
    document.getElementById("display-el3").innerHTML = "<p></p>"
    document.getElementById("display-el4").innerHTML = '<p>.</p>'
    document.getElementById("display-el5").innerHTML = "<button onclick='ah5()' >Misppell</button>"
    document.getElementById("display-el6").innerHTML = "<button onclick='ah6()' >Misspel</button>"
    document.getElementById("display-el7").innerHTML = "<button onclick='ah7()' >Mispell</button>"
    document.getElementById("display-el8").innerHTML = "<button onclick='ah8()' >Misspell</buton>"
    document.getElementById("score").innerHTML = "<p>SCORE:</p>"
    document.getElementById("timer").innerHTML = "<p>TIMER:</p>"
}


function ah5() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Misspell</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Misspell()' > -></button>"

}

function ah6() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Misspell</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Misspell()' > -></button>"

}

function ah7() {

    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Misspell</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Misspell()' > -></button>"

}

function ah8() {


    document.getElementById("co").innerHTML = '<p>Correct!! </br>  </p>'
    scoreboard = scoreboard + 1
    Score.innerText = `SCORE: ${scoreboard }`
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Misspell()' > NEXT</button>"



}


function Misspell() {
    document.getElementById("co").innerHTML = '<p></p>'

    console.log("him");
    document.getElementById("start").innerHTML = "<p  ></p>"
    document.getElementById("display-el2").innerHTML = `Instructions: 
    Choose the word that best suits the meaning and give the correct spelling. `
    document.getElementById("display-el3").innerHTML = "<p></p>"
    document.getElementById("display-el4").innerHTML = '<p>.</p>'
    document.getElementById("display-el5").innerHTML = "<button onclick='ai1()' >Milinnum</button>"
    document.getElementById("display-el6").innerHTML = "<button onclick='ai2()' >Milinium</button>"
    document.getElementById("display-el7").innerHTML = "<button onclick='ai3()' >Millennium</button>"
    document.getElementById("display-el8").innerHTML = "<button onclick='ai4()' >Milinnium</buton>"
    document.getElementById("score").innerHTML = "<p>SCORE:</p>"
    document.getElementById("timer").innerHTML = "<p>TIMER:</p>"
    console.log("stop");


}


function ai1() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Millennium</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Millennium()' > -></button>"

}

function ai2() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Millennium</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Millennium()' > -></button>"

}

function ai3() {

    document.getElementById("co").innerHTML = '<p>Correct!! </br>  </p>'
    scoreboard = scoreboard + 1
    Score.innerText = `SCORE: ${scoreboard }`
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Millennium()' > NEXT</button>"


}

function ai4() {



    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Millennium</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Millennium()' > -></button>"

}


function Millennium() {
    document.getElementById("co").innerHTML = '<p></p>'

    console.log("him");
    document.getElementById("start").innerHTML = "<p  ></p>"
    document.getElementById("display-el2").innerHTML = `Instructions: 
    Choose the word that best suits the meaning and give the correct spelling. `
    document.getElementById("display-el3").innerHTML = "<p></p>"
    document.getElementById("display-el4").innerHTML = '<p.</p>'
    document.getElementById("display-el5").innerHTML = "<button onclick='ai5()' >Acomodate</button>"
    document.getElementById("display-el6").innerHTML = "<button onclick='ai6()' >Accomodate</button>"
    document.getElementById("display-el7").innerHTML = "<button onclick='ai7()' >Acommodate</button>"
    document.getElementById("display-el8").innerHTML = "<button onclick='ai8()' >Accommodate</buton>"
    document.getElementById("score").innerHTML = "<p>SCORE:</p>"
    document.getElementById("timer").innerHTML = "<p>TIMER:</p>"

    console.log("stop");


}


function ai5() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Accommodate</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Accommodate()' > -></button>"

}

function ai6() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Accommodate</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Accommodate()' > -></button>"

}

function ai7() {
    document.getElementById("co").innerHTML = '<p>Correct!! </br>  </p>'
    scoreboard = scoreboard + 1
    Score.innerText = `SCORE: ${scoreboard }`
    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Accommodate()' > NEXT</button>"


}

function ai8() {


    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Accommodate</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Accommodate()' > -></button>"

}



function Accommodate() {
    document.getElementById("co").innerHTML = '<p></p>'

    console.log("him");
    document.getElementById("start").innerHTML = "<p  ></p>"
    document.getElementById("display-el2").innerHTML = `Instructions: 
    Choose the word that best suits the meaning and give the correct spelling. `
    document.getElementById("display-el3").innerHTML = "<p></p>"
    document.getElementById("display-el4").innerHTML = '<p>.</p>'
    document.getElementById("display-el5").innerHTML = "<button onclick='aj1()' >Occasion</button>"
    document.getElementById("display-el6").innerHTML = "<button onclick='aj2()' >Occassion</button>"
    document.getElementById("display-el7").innerHTML = "<button onclick='aj3()' >Ocasion</button>"
    document.getElementById("display-el8").innerHTML = "<button onclick='aj4()' >Occassion</buton>"
    document.getElementById("score").innerHTML = "<p>SCORE:</p>"
    document.getElementById("timer").innerHTML = "<p>TIMER:</p>"
    console.log("stop");


}


function aj1() {
    document.getElementById("co").innerHTML = '<p>Correct!! </br>  </p>'

    scoreboard = scoreboard + 1
    Score.innerText = `SCORE: ${scoreboard }`

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Occasion()' > NEXT</button>"


}

function aj2() {
    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Occasion</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Occasion()' > -></button>"

}

function aj3() {

    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Occasion</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Occasion()' > -></button>"

}

function aj4() {



    document.getElementById("co").innerHTML = '<p>Wrong the right answer is Occasion</p>'

    document.getElementById("display-el5").innerHTML = "<p1</p>"
    document.getElementById("display-el6").innerHTML = "<p></p>"
    document.getElementById("display-el7").innerHTML = "<p></p>"
    document.getElementById("display-el8").innerHTML = "<p></p>"
    document.getElementById("display-el9").innerHTML = "<button onclick='Occasion()' > -></button>"

}

function Occasion() {
    if (scoreboard >= 15){
        console.log("Congratulation!! you have unlocked new lwvwls");
        document.getElementById("display-el11").innerHTML = '<a href="Nwxt levels.html"><button >Check out the new levels.</button></a>'
    }

    else{
        console.log("Try again!!");
        document.getElementById("Play").innerHTML = "<button onclick='play()' >Play</button>"
        document.getElementById("level3").innerHTML = '<button onclick= "levelthree()">LEVEL 3</button>'
      
    }
}