let bts = document.getElementsByClassName('join');
function redirect() {
    window.open('https://feguri.github.io/PROVISORY/QUARK');
}
function redirectMain() {
    location.reload();
}

function redirectArticle1() {
    window.open('https://feguri.github.io/PROVISORY/article-1')
}
function redirectArticle2() {
    window.open('https://feguri.github.io/PROVISORY/article-2')
}
for (let bt of bts) {
    bt.addEventListener('click', redirect);
}
document.getElementById('article1').addEventListener('click', redirectArticle1);
document.getElementById('article2').addEventListener('click', redirectArticle2);
document.getElementById('starfleet').addEventListener('click', redirectMain);
