let formSignIn = document.getElementById('form-signin')


// console.log(formSignUp);
formSignIn.addEventListener("submit", function(event){
    // ngăn chặn hành vi mặc định của form
    event.preventDefault();


    // lấy thông tin khi người dùng nhập vào ô input
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    // console.log(fullname, email, password);
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let auth = users.some(user => user.email === email && user.password === password)
    // isExisting: True/False
    if (auth){
        // lưu thông tin của user vào local storage với key là "currentUser"
        let currentUser = users.find((user) => user.email === email && user.password === password)
        localStorage.setItem("currentUser", JSON.stringify(currentUser))
        alert("Đăng nhập thành công!!")
        window.location.href = '/index.html'
    } else{
        alert("Vui lòng nhập lại email và password")
    }
})
