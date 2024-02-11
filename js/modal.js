export const Modal = {
    closeButton: document.querySelector('.closeBtn'),
    wrapper: document.querySelector('.modalWrapper'),
    message: document.querySelector('h2'),

    open(){
        Modal.wrapper.classList.add('open');
    },
    close(){
        Modal.wrapper.classList.remove('open');
    }
}

Modal.closeButton.onclick = () => {
    Modal.close();
}

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        Modal.close();
    }
})

