import characters from '/characters.js'


function getOnePassword() {
    let newPassword = []
    for (let i = 0; i < 10; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        newPassword.push(characters[randomIndex])
    }
    return newPassword
}


const getAllPasswords = () => {
    const inputOne = document.getElementById('input-1')
    const inputTwo = document.getElementById('input-2')
    const inputThree = document.getElementById('input-3')
    const inputFour = document.getElementById('input-4')
    
    inputOne.value = getOnePassword()
    inputTwo.value = getOnePassword()
    inputThree.value = getOnePassword()
    inputFour.value = getOnePassword()
}

const myButton = document.getElementById('button')
myButton.addEventListener('click', getAllPasswords)