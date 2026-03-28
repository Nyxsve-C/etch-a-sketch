const container = document.getElementById('container');
const button = document.querySelector('button');

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb;
}

function setSideSize(size = 4) {
    for (let i = 0; i < size**2; i++) {
        const square = document.createElement('div');
        const flexBasis = 100 / size + '%';
        let opacity = 0;

        square.classList.add('square');
        square.style.flexBasis = flexBasis;
        square.style.opacity = '0';

        ['pointerdown', 'pointerenter'].forEach(ev => {
            square.addEventListener(ev, e => {
                opacity += 0.1;
                square.style.opacity = opacity.toString();
                square.style.backgroundColor = randomColor();
                square.releasePointerCapture(e.pointerId);
            })
        });

        container.appendChild(square);
    }
}

setSideSize();

button.addEventListener('click', () => {
    const size = prompt('Enter side size (0-100)');
    if (size >= 0 && size <= 100) {
        container.replaceChildren();
        setSideSize(size);
    }
});
