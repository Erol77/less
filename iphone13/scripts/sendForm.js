const sendForm = () => {
    // const form = document.querySelector('form');
    const btnOpenModal = document.querySelector('.card-details__button_delivery');
    const detailsTitle = document.querySelector('.card-details__title');
    const modal = document.querySelector('.modal');
    const modalTitle = document.querySelector('.modal__title');
    const modalClose = document.querySelector('.modal__close');
    const modalForm = document.querySelector('form');
    // console.log(modal,'....',btnOpenModal);
    btnOpenModal.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalTitle.textContent = detailsTitle.textContent;
    });
    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    modalForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const labels = document.querySelectorAll('.modal__label');
        const sendMessage = {};
        labels.forEach(label => {
            const span = label.querySelector('span');
            const input = label.querySelector('input'); //console.log(span.textContent,input.value);
            sendMessage[span.textContent] = input.value;
        });
        // console.log(sendMessage);
        fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                    sendMessage,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            .then((response) => response.json())
            .then((json) => console.log(json));
        modal.style.display = 'none';
        modalForm.reset();
    });
};
sendForm();