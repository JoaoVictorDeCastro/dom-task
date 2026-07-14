const btnOpenAddItem = document.getElementById("add");
const btnCloseAddItem1 = document.getElementById("closeAddItem1");
const btnCloseAddItem2 = document.getElementById("closeAddItem2");
const addItem = document.getElementById("addItem");

btnOpenAddItem.addEventListener('click', () => {
    addItem.showModal();
})

btnCloseAddItem1.addEventListener('click', () => {
    addItem.close();
})

btnCloseAddItem2.addEventListener('click', () => {
    addItem.close();
})

