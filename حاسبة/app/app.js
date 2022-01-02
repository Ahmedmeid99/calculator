//take value from button 
//select Element
const nums = document.querySelectorAll('.row span');
const input = document.querySelector('input')
console.log(input)
nums.forEach((num) => {
    num.addEventListener('click', () => {
        if (num.textContent != "del") {
            const current = "";
            input.value += num.textContent + current;
        }
    })
})
const del = document.querySelector('.del');
del.addEventListener('click', () => {
    input.value = input.value.slice(0, input.value.length - 1)
})
// (=) onclick 
const solve = document.querySelector('.solve')
solve.addEventListener('click', () => {
    //If the first item is + or - or * or /
    if (input.value[0] === "+") { alert("Enter number first") }
    else if (input.value[0] === "-") { alert("Enter your numbers first") }
    else if (input.value[0] === "*") { alert("Enter your numbers first") }
    else if (input.value[0] === "/") { alert("Enter your numbers first") }
    //If the last item is + or - or * or /
    else if (input.value[input.value.length - 1] === "+") { alert("Enter number last") }
    else if (input.value[input.value.length - 1] === "-") { alert("Enter number last") }
    else if (input.value[input.value.length - 1] === "*") { alert("Enter number last") }
    else if (input.value[input.value.length - 1] === "/") { alert("Enter number last") }
    else {
        if (input.value.includes("+")) { input.value = +input.value.substring(0, input.value.indexOf("+")) + +input.value.substring(input.value.indexOf("+") + 1) }
        else if (input.value.includes("-")) { input.value = +input.value.substring(0, input.value.indexOf("-")) - +input.value.substring(input.value.indexOf("-") + 1) }
        else if (input.value.includes("*")) { input.value = +input.value.substring(0, input.value.indexOf("*")) * +input.value.substring(input.value.indexOf("*") + 1) }
        else if (input.value.includes("/")) { input.value = +input.value.substring(0, input.value.indexOf("/")) / +input.value.substring(input.value.indexOf("/") + 1) }
    }
})
