const OnDangNhap = function(){
    try {
        var FormDangNhap = document.forms["FormDangNhap"];
        console.log(FormDangNhap);
        var username = FormDangNhap["username"].value;
        var password = FormDangNhap["password"].value;
        // alert(username);
        // alert(password);
        // goi API => get Token
        if(username!="admin" || password != "123456"){
            throw "Tài khoản/ mật khẩu không đúng";
        }
        return true;
    } catch (error) {
        alert(error);
        return false;    
    }
}