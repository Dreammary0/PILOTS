document.body.style.overflow = "hidden"; /*прокрутка выкл*/
/*кнопки старт и стоп*/
let press_start = document.querySelector('#play');
let press_stop = document.querySelector('#stop');

const sqrs = document.getElementsByClassName('square');
let gridArr = Array.prototype.slice.call(sqrs);

let test=false;
let test1=false;

/*рандомное заполнение*/
function Show() {
    for (let i = 0; i < gridArr.length; i++) {
        if (Math.floor(Math.random() * 2) === 1) {
            gridArr[i].classList.add('red');
            const ecn=gridArr[i].className;
            console.log(ecn)
        } else {
            gridArr[i].classList.add("green");
            const ecn=gridArr[i].className;
            console.log(ecn)
        }
    }
}

/*поменяьть цвет*/
function Colors(elem){
    if (elem.classList.contains('green')){
        elem.classList.remove('green');
        elem.classList.add("red");}
    else{
        if (elem.classList.contains('red')){
            elem.classList.remove('red');
            elem.classList.add("green");}}
}


/*если тык на кружочек*/
window.addEventListener("click", (e) => {
    let target = e.target;
    if (target.className === 'square red' || e.target.className === 'square green') {
        let line = target.getAttribute('line');
        let col = target.getAttribute('col');
        for (let i = 0; i < gridArr.length; i++) {
            if (gridArr[i].getAttribute('line') === line ||
                gridArr[i].getAttribute('col') === col) {
                Colors(gridArr[i]);
            }
        }
    }
    /*условие конца игры*/
    test=gridArr.every(EndRed);
    console.log(test);
    test1=gridArr.every(EndGreen);
    console.log(test1);
    if (test===true || test1===true){
        setTimeout(function () {
            location.reload();
            alert("Потрясающая победа!");
        }, 1000);
    };


});

function EndRed(element) {
    return element.classList.contains('red');
}
function EndGreen(element) {
    return element.classList.contains('green');
}

press_start.addEventListener('click',Show);
press_stop.addEventListener('click',function (){
    location.reload();
});




