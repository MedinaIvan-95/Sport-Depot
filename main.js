const franelasItem = document.querySelector('.franelas-footer');

const PantalonesItem = document.querySelector('.pantalones-footer');

const zapatosItem = document.querySelector('.zapatos-footer');

const modalScreen = document.querySelector('.modal');

const closeButton = document.querySelector('.close__button');

const imgItem1 = document.querySelector("#card-image-1");

const imgItem2 = document.querySelector("#card-image-2");

const imgItem3 = document.querySelector("#card-image-3");

franelasItem.addEventListener('click', () => {
    modalScreen.classList.toggle('show');
    imgItem1.src="https://imgur.com/Bkq2Zyb.png";
    imgItem2.src="https://imgur.com/Bkq2Zyb.png";
    imgItem3.src="https://imgur.com/Bkq2Zyb.png";

})

PantalonesItem.addEventListener('click', () => {
    modalScreen.classList.toggle('show');
    imgItem1.src="https://imgur.com/UqY80xa.png";
    imgItem2.src="https://imgur.com/UqY80xa.png";
    imgItem3.src="https://imgur.com/UqY80xa.png";
})

zapatosItem.addEventListener('click', () => {
    modalScreen.classList.toggle('show');
    imgItem1.src="https://imgur.com/qc2NIDc.png";
    imgItem2.src="https://imgur.com/qc2NIDc.png";
    imgItem3.src="https://imgur.com/qc2NIDc.png";
})

closeButton.addEventListener('click', () => {
    modalScreen.classList.toggle('show');
})