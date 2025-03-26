document.addEventListener("DOMContentLoaded", () => {
    const forms = document.querySelectorAll("form");
    let somaRenda = 0
    let somaGasto = 0
    let somaTotal = 0
    forms.forEach((form) => {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            
            function executar() {
                const inputDate = document.getElementById("dt");
                const inputTitle = document.getElementById("title")
                const inputValue = document.getElementById("value")
                const inputEntry = document.getElementById("entry")
                let rendaMensal = document.getElementById("rendaMensal")
                const gastoMensal = document.getElementById("gastoMensal")
                let totalRenda = document.getElementById("totalRenda")
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
                const trashImg = document.createElement("img")
                
                // Adicionar a classe à <div>
                new_element.className = "teste";
                trashButton.className = "removeButton"

                switch(inputEntry.value){
                    case "Renda mensal":
                        entry.className = "entry"
                        break
                    case "Gasto mensal":
                        entry.className = "entry01"
                        break
                    case "Selecione a entrada":
                        alert("Insira uma entrada")
                        form.removeEventListener(event)
                        break
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
                trashButton.appendChild(trashImg)
                new_element.appendChild(trashButton)
                
                // Adicionar a <div> ao <body> ou a outro elemento da página
                let element = document.querySelector(".contentBox")
                element.appendChild(new_element)
                function apagarDiv(){
                    trashButton.addEventListener("click", (event) => {
                        event.preventDefault()
                        new_element.remove()
                        if(object.entry == "Renda mensal"){
                            somaRenda -= Number(object.value)
                            rendaMensal.innerHTML = 'R$' + String(somaRenda)
                        } else if(object.entry == "Gasto mensal"){
                            somaGasto -= Number(object.value)
                            gastoMensal.innerHTML = 'R$' + String(somaGasto)
                        }
                        somaTotal = somaRenda - somaGasto
                        totalRenda.innerHTML = 'R$' + String(somaTotal)
                    })

                }
                apagarDiv()
                

                if(object.entry == "Renda mensal"){
                    somaRenda += Number(object.value)
                    rendaMensal.innerHTML = 'R$' + String(somaRenda)
                
                }
                else if(object.entry == "Gasto mensal"){
                    somaGasto += Number(object.value)
                    gastoMensal.innerHTML = 'R$' + String(somaGasto)
                }
                    somaTotal = somaRenda - somaGasto
                    totalRenda.innerHTML = 'R$' + String(somaTotal)
                    
                
                
                
            }

            executar();
            
            
        });
        
    });
});
