const userLog = {
    "email": "sophie.bluel@test.tld",
    "password": "S0phie",
}

function return2 () {
    return 2
}
async function fetchLogin() {
    const r = await fetch('http://localhost:5678/api/users/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        }, 
        body: JSON.stringify(userLog)
        
    });

    if (r.ok) {
        const dataUser = await r.json()
        console.log(dataUser)
        return 
    }

    throw new Error('Impossible de contacter le serveur');
}


function formSubmit () {
    const submitBtn = document.getElementById("submitbtn")
    console.log(submitBtn)
    submitBtn.addEventListener("click", function(){
    
    })
    const inputMail = document.getElementById("email")
    const inputPassword = document.getElementById("password")
    console.log(inputMail)
}
formSubmit()

const number = return2()
console.log(number) 