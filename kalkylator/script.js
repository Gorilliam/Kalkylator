// let result = ""
// let a = ""
// let b = ""


// function multiplication(a, b) {
//     return a * b 

// }

// function addition(a, b) {
//     return a + b 

// }

// function subtraction (a, b) {
//     return a - b 

// }

// function division(a, b) {
//     return a / b 

// }
// const fromTextArea = document.getElementById('text') 

// const button1 = document.getElementById('nr1') 
// const button2 = document.getElementById('nr2') 
// const add = document.getElementById('add') 

// button1.addEventListener('click', (e) => {
//     console.log(button1.textContent)
//     a = Number(button1.textContent) 

// })

// button2.addEventListener('click', (e) => {
//     console.log(button2.textContent)
//     b = Number(button2.textContent)
//     fromTextArea.textContent += button2.textContent 
// })

// add.addEventListener("click", () => {
//     console.log(addition(a, b))
// })


 let result


 const a = document.getElementById('inp1')
 const b = document.getElementById('inp2')
 const addition = document.getElementById('add')
 const subtraction = document.getElementById('sub')
 const division = document.getElementById('division')
 const multiplication = document.getElementById('mult')
 const total = document.getElementById('total')


addition.addEventListener('click', (e) => {
    result = Number(a.value) + Number(b.value)
    total.textContent = result
    console.log(result)
})

subtraction.addEventListener('click', (e) => {
    result = Number(a.value) - Number(b.value)
    total.textContent = result
    console.log(result)
})

division.addEventListener('click', (e) => {
    result = Number(a.value) / Number(b.value)
    total.textContent = result
    console.log(result)
})

multiplication.addEventListener('click', (e) => {
    result = Number(a.value) * Number(b.value)
    total.textContent = result
    console.log(result)
})
