//take value from button 
//select Element
const nums = document.querySelectorAll('.row span');
const input = document.querySelector('input')
nums.forEach((num) => {
    num.addEventListener('click', () => {
        if (num.textContent != "del") {
            input.value += num.textContent;
        }
    })
})
const del = document.querySelector('.del');
del.addEventListener('click', () => {
    //remove item by item 
    // input.value = input.value.slice(0, input.value.length - 1)
    //Remove all items
    input.value = " ";
})
// (=) onclick 
const solve = document.querySelector('.solve')
solve.addEventListener('click', () => {
    //If the first item is + or - or * or /
    if (input.value[0] === "+" || input.value[0] === "-" || input.value[0] === "*" || input.value[0] === "/") { alert("Enter number first") }
    //If the last item is + or - or * or /
    else if (input.value[input.value.length - 1] === "+" || input.value[input.value.length - 1] === "-" || input.value[input.value.length - 1] === "*" || input.value[input.value.length - 1] === "/") { alert("Enter number last") }
    else {
        solving()
        // console.log(typeof (input.value))
    }
})
function solving() {
    if (input.value.includes("+")) {
        const result = input.value.split("").filter(function (ele) {
            return !isNaN(parseInt(ele));
        }).reduce(function (acc, current) {
            return +acc + +current;
        })
        input.value = result
    }
    else if (input.value.includes("-")) {
        const result = input.value.split("").filter(function (ele) {
            return !isNaN(parseInt(ele));
        }).reduce(function (acc, current) {
            return +acc - +current;
        })
        input.value = result
    }
    else if (input.value.includes("*")) {
        const result = input.value.split("").filter(function (ele) {
            return !isNaN(parseInt(ele));
        }).reduce(function (acc, current) {
            return +acc * +current;
        })
        input.value = result
    }
    else if (input.value.includes("/")) {
        const result = input.value.split("").filter(function (ele) {
            return !isNaN(parseInt(ele));
        }).reduce(function (acc, current) {
            return +acc / +current;
        })
        input.value = result
    }
}
