const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    document.body.style.background = randonBg();
});

function randonBg(){
    return `hsl($(math.floor(math.random() * 360)}, 100%, 50%)`;
}