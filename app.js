// event object argument e,evt
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// preventDefault() - prevents default behaviour

const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');
const link = document.getElementById('link');

heading.addEventListener('click', function(event) {
    console.log(event.currentTarget);
    console.log(this);
});

btn.addEventListener('click', function(event) {
event.currentTarget.classList.add('blue');
console.log(event.type);
});

function someFunc(e){
e.preventDefault(); // stops link from directing me to the top of the page
}

link.addEventListener('click',someFunc)
