const btn = document.querySelector('.btn');
const show = document.querySelector('#show');
const msg = document.querySelector('#msg');
show.innerHTML = 0;
let counter = 1;
const timeDelay = 2000;
addEventListener("click", (e) =>{
    e.preventDefault();
    show.innerHTML = counter++;
    if(counter-1 === 10){
        
        msg.classList.add('error');
        msg.innerHTML = 'Very Good';
        setTimeout(() => setMsg(''), timeDelay);
    } else if(counter-1 === 30){
        
        msg.classList.add('error');
        msg.innerHTML = 'U r pretty good at this';
        setTimeout(() => setMsg(''), timeDelay);
    } else if(counter-1 === 50){
        
        msg.classList.add('error');
        msg.innerHTML = 'Have u done this before??';
        setTimeout(() => setMsg(''), timeDelay);
    } else if(counter-1 === 80){
        
        msg.classList.add('error');
        msg.innerHTML = 'U can stop now';
        setTimeout(() => setMsg(''), timeDelay);
    } else if(counter-1 === 100){
        
        msg.classList.add('error');
        msg.innerHTML = 'I said stop!';
        setTimeout(() => setMsg(''), timeDelay);
    } else if(counter-1 === 20){
        
        msg.classList.add('error');
        msg.innerHTML = 'Nice progress, u seem too good...';
        setTimeout(() => setMsg(''), timeDelay);
    } else if(counter-1 === 110){
        
        msg.classList.add('error');
        msg.innerHTML = 'Stop u mother trucker!!!';
        setTimeout(() => setMsg(''), timeDelay);
    } else if(counter-1 === 120){
        
        msg.classList.add('error');
        msg.innerHTML = 'U r asking for it';
        setTimeout(() => setMsg(''), timeDelay);
    } else if(counter-1 === 130){
        
        msg.classList.add('error');
        msg.innerHTML = 'U asked for it, THE BAN HAMMER.';
        
        setTimeout(() => setMsg(''), timeDelay);
        setTimeout(() => alert('This site is closing'),timeDelay+500);
        setTimeout(() => close(),timeDelay+1000);
    } else if(counter-1 === 70){
        
        msg.classList.add('error');
        msg.innerHTML = 'We get it, u r good';
        setTimeout(() => setMsg(''), timeDelay);
    }
});

function setMsg(newMsg) {
    msg.innerHTML = newMsg;
    msg.classList.remove('error');
}