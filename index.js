/* Mobile Verification */

function checkmob(input) {
    if (input.value.length > 10) {
        alert("Maximum 10 Digits allowed");
        input.value = '';
    }
}

/* Form Submit */

function Submitdata() {
    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mob").value;;
    const date = document.getElementById("dob").value;

    const info = { name, mobile, date };

    localStorage.setItem("info", JSON.stringify(info));
    alert("Entered Information is Stored");
}

/* Display Data */

function displayStoreddata() {
    const info = JSON.parse(localStorage.getItem("info"));
    if (info) {
        const storeinfoList = document.getElementById("storeinfo");
        const listItem1 = document.createElement("li");
        listItem1.textContent = `Name: ${info.name}`;
        storeinfoList.appendChild(listItem1);
    }
}
function myf() {
    displayStoreddata();
}

/* Quiz Question */

const questionbank = [
    {
        quetxt: "Javascript is a/an _____ language.",
        a: "Object-based",
        b: "Object-oriented",
        c: "Procedural",
        d: "None of the above",
        correct: "b"
    },
    {
        quetxt: " What is the use of <noscript> in Javascript?",
        a: "The contents are displayed by non-JS based browsers",
        b: "Clears all cookies and cache",
        c: "Both of Them",
        d: "None of the above",
        correct: "a"
    },
    {
        quetxt: "When an operator's value is NULL, the typedef returned by unary operator is: ",
        a: "Boolean",
        b: "Undefined",
        c: "Object",
        d: "Integer",
        correct: "c"
    },
    {
        quetxt: "Which function is used to serialize an object into a JSON string in Javascript?",
        a: "stringify()",
        b: "parse()",
        c: "convert()",
        d: "None of the above",
        correct: "a"
    },
    {
        quetxt: "What does … operator do in JS?",
        a: "To compare the references",
        b: "It is used to describe datatype of undefined size",
        c: "No such operator exists",
        d: "It is used to spread iterables to individual elements",
        correct: "d"
    }
];

const Q = document.getElementById("Q");
const answer = document.querySelectorAll(".answer");
const quetxt = document.getElementById("quetxt");
const atxt = document.getElementById("atxt");
const btxt = document.getElementById("btxt");
const ctxt = document.getElementById("ctxt");
const dtxt = document.getElementById("dtxt");
const answerbtn = document.getElementById("answerbtn");


let qno = 0;
let result = 0;

function notselected() {
    answer.forEach(function (ans) {
        ans.checked = false;
    })
}

function selected() {
    let ans;
    answer.forEach(function (userans) {
        if (userans.checked === true) {
            ans = userans.id;
        }
    });
    return ans;
}

function loadQuiz() {
    notselected();
    var appearedquestion = questionbank[qno];
    quetxt.innerText = appearedquestion.quetxt;
    atxt.innerText = appearedquestion.a;
    btxt.innerText = appearedquestion.b;
    ctxt.innerText = appearedquestion.c;
    dtxt.innerText = appearedquestion.d;
};

loadQuiz();

answerbtn.addEventListener("click", function () {
    var answer = selected();
    if (answer == questionbank[qno].correct) {
        result = result + 4;
    }
    else {
        result = result - 1;
    }
    qno++;
    if (qno < questionbank.length) {
        loadQuiz();
    }
    else {
        if (result >= 8) {
            Q.innerHTML = `
                <h2 style="padding: 10px"> Congratulations !!! &#128512</h2><br>
                <h3 style="padding: 10px"> You scored ${result} out of 20 </h3>
                <center>
                    <img src="/images/congrats.png" height="200px" width="300px">
                </center><br>
                <button onclick="restartQuiz()" style="color: white; width: 150px; padding: 10px; text-align: center; background-color: #27bfee; border-radius: 
                5px; margin: 0px auto; padding:10px; cursor:pointer">Restart Quiz</button><br>
            `;
        }
        else {
            Q.innerHTML = `<h2 style="padding: 10px"> Oops... &#128542</h2><br>
                <h3 style="padding: 10px"> You scored ${result} out of 20 </h3>
                <h3 style="padding: 10px"> Better Luck Next Time !! </h3><br>
                <button onclick="restartQuiz()" style="color: white; width: 150px; padding: 10px; text-align: center; background-color: #27bfee; border-radius: 
                5px; margin: 0px auto; padding:10px; cursor:pointer">Restart Quiz</button><br>                
            `;
        }

    }
});

function restartQuiz() {
    // Navigate back to the quiz start page to restart the quiz
    window.location.href = "quiz.html";
}
