const container = document.getElementById('container');

function setSideSize(size = 4) {
    for (let i = 0; i < size**2; i++) {
        const flexBasis = 100 / size;
        const div = document.createElement('div');
        div.classList.add('squares');
        div.style.flexBasis = `${flexBasis}%`;
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = '#4d4da4';
        });
        container.appendChild(div);
    }
}

setSideSize(10)
