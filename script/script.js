document.addEventListener("DOMContentLoaded", () => {
    const forms = document.querySelectorAll("form");

    forms.forEach((form) => {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            function executar() {
                const inputDate = document.getElementById("dt");
                const inputTitle = document.getElementById("title")
                const inputValue = document.getElementById("value")
                const inputEntry = document.getElementById("entry")

                const object = {
                    date: inputDate.value,
                    title: inputTitle.value,
                    entry: inputEntry.value,
                    value: inputValue.value
                };

                // Criar a <div> e o <span>
                let new_element = document.createElement("div");
                const text = document.createElement("span");
                const title = document.createElement("span");
                const entry = document.createElement("span");
                const value = document.createElement("span");
                const trashButton = document.createElement("button")
                
                // Adicionar a classe à <div>
                new_element.className = "teste";
                switch(inputEntry.value){
                    case "Renda mensal":
                        entry.className = "entry"
                        break
                    case "Gasto mensal":
                        entry.className = "entry01"
                }
                // Adicionar o texto da data ao <span>
                text.textContent = `${object.date}`
                title.textContent = `${object.title}`
                entry.textContent = `${object.entry}`
                value.textContent = `R$${object.value}`

                // Adicionar o <span> dentro da <div>
                new_element.appendChild(text);
                new_element.appendChild(title)
                new_element.appendChild(entry)
                new_element.appendChild(value)
                // Adicionar a <div> ao <body> ou a outro elemento da página
                let element = document.querySelector(".contentBox")
                element.appendChild(new_element)
            }

            executar();
            
        });
    });
});
