let bts = document.getElementsByClassName('join');
function redirect() {
    window.open('/C:/Users/Acer/vscode/WebDev/starfleetNews/QUARK.html');
}
for (let bt of bts) {
    bt.addEventListener('click', redirect);
}