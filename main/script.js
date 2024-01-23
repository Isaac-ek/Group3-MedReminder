// Api Endpoints

const login = async (username, password) => {
    const response = await fetch("/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({username, password}),
        redirect: 'follow',
    });
    if (response.redirected) {
        const finalUrl = response.url;
        console.log("Redirected to:", finalUrl)
        window.location.href = finalUrl
    }

    // if response status is 401 alert the user that the password is wrong
    if (response.status == 401) {
        alert("Password Incorrect")
    }
}


// Handle User Form
const login_submit = document.querySelector('#submit')
login_submit.addEventListener('click', function (e) {
    e.preventDefault()
    const username = document.querySelector("#username").value
    const pasword = document.querySelector("#password").value

    login(username, pasword)
})


