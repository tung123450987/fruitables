let auth = JSON.parse(localStorage.getItem('currentUser'))
console.log(auth);

let signOut = document.getElementById('signOut')
let signIn = document.getElementById('sign-in')
let welcome = document.getElementById('welcome')
let avatar = document.getElementById('avatar')

console.log(signOut);
signOut.style.display = 'none'

if (auth) {
    signOut.style.display = 'block'
    signIn.style.display = 'none'
    welcome.innerText = "Hello, " + auth.fullname
    avatar.src = auth.avatar      
}

function handleSignOut (){
    localStorage.removeItem("currentUser")
    window.location.href = '/formsignin/signup.html'
}

signOut.addEventListener('click', handleSignOut)
