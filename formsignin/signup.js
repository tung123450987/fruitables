let formSignUp = document.getElementById('form-signup')


// console.log(formSignUp);
formSignUp.addEventListener("submit", function(event){
    // ngăn chặn hành vi mặc định của form
    event.preventDefault();


    // lấy thông tin khi người dùng nhập vào ô input
    let fullname = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    // console.log(fullname, email, password);
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let isExisting = users.some(user => user.email === email)
    // isExisting: True/False
    if(fullname.length > 0 && email.length > 0 && password.length > 0){
        if (isExisting){
            alert("Email đã được đăng ký! Vui lòng nhập email khác")
        } else{
            users.push({fullname, email, password, avatar: "https://cdn.dribbble.com/userupload/14631505/file/original-193b558cb064e7c48864d7914c0b3d17.jpg?resize=1024x768"})
            // console.log(users);
            localStorage.setItem("users", JSON.stringify(users))
            alert("Đăng ký thành công!!!")
            // chuyển hướng đến trang đăng nhập
            window.location.href = '/formsignin/signin.html'
        }
    } else {
        alert("Vui lòng nhập đầy đủ thông tin!!!")
    }
})
