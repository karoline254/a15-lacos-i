

let resposta = Number(prompt("Deseja comer mais coxinhas? S ou N: "))
let conta = 0
let valor = 2.50

while(resposta !== "n"){  
    conta = conta + valor
    resposta = prompt("Deseja comer mais coxinhas? S ou N: ")
} 
console.log("Ok, não quer mais! \nTotal da conta: ", conta, "reais")
