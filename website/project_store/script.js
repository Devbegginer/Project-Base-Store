//creating a condition to open and close aba when user click in icon
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
//condition
if (bar){
bar.addEventListener('click',() => {
    nav.classList.add('active');
    })
}
if (close){
    close.addEventListener('click',() => {
        nav.classList.remove('active');
        })
    }