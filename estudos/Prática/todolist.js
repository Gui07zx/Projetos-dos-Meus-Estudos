const itens = document.getElementById('itens');
const list = document.getElementById('list');
const add = document.getElementById('add');

const tasks = [];

add.addEventListener("click", function() {
    const itemText = itens.value.trim();

    if (itemText !== "") {
        tasks.push(itemText);

        const listItem = document.createElement("li")
        listItem.textContent = itemText;
        
        listItem.classList.add("naoconcluida");
        
        const markButton =
        document.createElement('button');
        markButton.textContent = "Concluir";
        

        const removeButton = document.createElement('button');
        removeButton.textContent = ("Remover");
        removeButton.style.marginLeft = "10px";
        
        markButton.addEventListener("click", function() {
            if (listItem.classList.contains("naoconcluida")) {
                
                listItem.classList.remove("naoconcluida");
                
                listItem.classList.add("concluida");
                markButton.textContent = "Desmarcar";
                } else {
                    listItem.classList.remove("concluida");
                    listItem.classList.add("naoconcluida");
                    markButton.textContent =
                    "Concluir"
                }
        })
        
        removeButton.addEventListener("click", function() {
            list.removeChild(listItem);
        })
        
        listItem.appendChild(markButton);
        
        listItem.appendChild(removeButton);

        list.appendChild(listItem);

        itens.value = "";
    } else {
        alert('Por favor, insira um texto antes de acionar.');
    }
})