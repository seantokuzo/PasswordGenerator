const characters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '!', '@', '#', '$', '%', '^', '&', '*', '<', '>', '?', '-', '+', '='
]

const inputOne = document.getElementById('input-1')
const inputTwo = document.getElementById('input-2')
const inputThree = document.getElementById('input-3')
const inputFour = document.getElementById('input-4')
const copy1 = document.getElementById('copy1')
const copy2 = document.getElementById('copy2')
const copy3 = document.getElementById('copy3')
const copy4 = document.getElementById('copy4')
let firstClick = true
let num = 10

function getOnePassword() {
    let newPassword = []
    for (let i = 0; i < num; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        newPassword.push(characters[randomIndex])
    }
    return newPassword.join('')
}


const getAllPasswords = () => {
    firstClick = false
    inputOne.value = getOnePassword()
    inputOne.style.color = "var(--green-password)"
    inputTwo.value = getOnePassword()
    inputTwo.style.color = "var(--green-password)"
    inputThree.value = getOnePassword()
    inputThree.style.color = "var(--green-password)"
    inputFour.value = getOnePassword()
    inputFour.style.color = "var(--green-password)"

    if (!firstClick) {
        copy1.innerHTML = '<i class="fa-solid fa-clipboard" id="clip1"></i>'
        copy2.innerHTML = '<i class="fa-solid fa-clipboard" id="clip2"></i>'
        copy3.innerHTML = '<i class="fa-solid fa-clipboard" id="clip3"></i>'
        copy4.innerHTML = '<i class="fa-solid fa-clipboard" id="clip4"></i>'
        const clip1 = document.getElementById('clip1')
        clip1.addEventListener('click', copyPasswordOne)
        const clip2 = document.getElementById('clip2')
        clip2.addEventListener('click', copyPasswordTwo)
        const clip3 = document.getElementById('clip3')
        clip3.addEventListener('click', copyPasswordThree)
        const clip4 = document.getElementById('clip4')
        clip4.addEventListener('click', copyPasswordFour)
    }
}

function copyPasswordOne() {
    inputOne.select()
    inputOne.setSelectionRange(0, 99999)
    console.log(inputOne.value)
    navigator.clipboard.writeText(inputOne.value)
        .then(() => alert("Copied the text: " + inputOne.value))
        .catch(() => alert("Oops, sopmething went wrong"))
}
function copyPasswordTwo() {
    inputTwo.select()
    inputTwo.setSelectionRange(0, 99999)
    console.log(inputTwo.value)
    navigator.clipboard.writeText(inputTwo.value)
        .then(() => alert("Copied the text: " + inputTwo.value))
        .catch(() => alert("Oops, sopmething went wrong"))
}

function copyPasswordThree() {
    inputThree.select()
    inputThree.setSelectionRange(0, 99999)
    console.log(inputThree.value)
    navigator.clipboard.writeText(inputThree.value)
        .then(() => alert("Copied the text: " + inputThree.value))
        .catch(() => alert("Oops, sopmething went wrong"))
}

function copyPasswordFour() {
    inputFour.select()
    inputFour.setSelectionRange(0, 99999)
    console.log(inputFour.value)
    navigator.clipboard.writeText(inputFour.value)
        .then(() => alert("Copied the text: " + inputFour.value))
        .catch(() => alert("Oops, sopmething went wrong"))
}

const myButton = document.getElementById('button')
myButton.addEventListener('click', getAllPasswords)
const myLength = document.getElementById('length-input')
myLength.addEventListener('change', (event) => {
    console.log(event)
    num = event.target.value
})