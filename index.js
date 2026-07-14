const btnOpenAddItem = document.getElementById("add");
const btnCloseAddItem1 = document.getElementById("closeAddItem1");
const btnCloseAddItem2 = document.getElementById("closeAddItem2");
const addItem = document.getElementById("addItem");
const btnAddItemButton = document.getElementById("addItemButton");
const texts = document.getElementById("texts");
const itens = document.getElementById("itens");
const itemNameInput = document.getElementById("itemName");
const qtdInput = document.getElementById("qtd");
const contElemText = document.getElementById("contElemText");
const form = document.getElementById("form");

const btnOpenEdit = document.getElementById("edit");
const editItem = document.getElementById("editItem");
const btnCloseEditItem = document.getElementById("closeEditItem");
const btnConcluirEdit = document.getElementById("concluirEdit");
const editItensList = document.getElementById("editItensList");

let listaItens = [];
let nextId = 1;

// ---------- Modal Adicionar ----------

btnOpenAddItem.addEventListener('click', () => {
    addItem.showModal();
})

btnCloseAddItem1.addEventListener('click', () => {
    addItem.close();
})

btnCloseAddItem2.addEventListener('click', () => {
    addItem.close();
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    btnAddItemButton.click();
})

btnAddItemButton.addEventListener('click', () => {
    const nome = itemNameInput.value.trim();
    const qtd = qtdInput.value.trim();

    if (!nome) {
        return;
    }

    listaItens.push({ id: nextId++, nome, qtd });

    addItem.close();
    itemNameInput.value = "";
    qtdInput.value = "";

    renderTudo();
})

// ---------- Modal Editar ----------

btnOpenEdit.addEventListener('click', () => {
    renderEditList();
    editItem.showModal();
})

btnCloseEditItem.addEventListener('click', () => {
    editItem.close();
})

btnConcluirEdit.addEventListener('click', () => {
    editItem.close();
})

function deletarItem(id) {
    listaItens = listaItens.filter(item => item.id !== id);
    renderTudo();
    renderEditList();
}

// ---------- Renderização ----------

function renderContador() {
    const total = listaItens.length;
    contElemText.innerText = total === 1 ? "1 item" : `${total} itens`;
}

function renderListaPrincipal() {
    itens.innerHTML = "";

    if (listaItens.length === 0) {
        texts.style.display = "flex";
        return;
    }

    texts.style.display = "none";

    listaItens.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("itemLista");

        const dot = document.createElement("span");
        dot.classList.add("itemDot");

        const nomeSpan = document.createElement("span");
        nomeSpan.classList.add("itemNome");
        nomeSpan.textContent = item.nome;

        li.appendChild(dot);
        li.appendChild(nomeSpan);

        if (item.qtd) {
            const qtdSpan = document.createElement("span");
            qtdSpan.classList.add("itemQtd");
            qtdSpan.textContent = item.qtd;
            li.appendChild(qtdSpan);
        }

        itens.appendChild(li);
    })
}

function renderEditList() {
    editItensList.innerHTML = "";

    if (listaItens.length === 0) {
        editItem.close();
        return;
    }

    listaItens.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("editItemLinha");

        const infoDiv = document.createElement("div");
        infoDiv.classList.add("editItemInfo");

        const dot = document.createElement("span");
        dot.classList.add("editItemDot");

        const nomeSpan = document.createElement("span");
        nomeSpan.classList.add("editItemNome");
        nomeSpan.textContent = item.nome;

        infoDiv.appendChild(dot);
        infoDiv.appendChild(nomeSpan);

        const acoesDiv = document.createElement("div");
        acoesDiv.classList.add("editItemAcoes");

        if (item.qtd) {
            const qtdSpan = document.createElement("span");
            qtdSpan.classList.add("editItemQtd");
            qtdSpan.textContent = item.qtd;
            acoesDiv.appendChild(qtdSpan);
        }

        const btnDelete = document.createElement("button");
        btnDelete.classList.add("editItemDelete");
        btnDelete.type = "button";
        btnDelete.innerHTML = "🗑";
        btnDelete.addEventListener('click', () => deletarItem(item.id));
        acoesDiv.appendChild(btnDelete);

        li.appendChild(infoDiv);
        li.appendChild(acoesDiv);

        editItensList.appendChild(li);
    })
}

function renderTudo() {
    renderContador();
    renderListaPrincipal();
}

renderTudo();