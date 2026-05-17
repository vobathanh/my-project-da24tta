function kiemTra() {
    let mkCu = document.getElementById("mkcu").value;
    let mkMoi = document.getElementById("mkmoi").value;
    let nhapLai = document.getElementById("nhaplaimk").value;

    if (mkCu == "" || mkMoi == "" || nhapLai == "") {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }

    if (mkMoi != nhapLai) {
        alert("Mật khẩu mới không khớp");
    } else {
        alert("Đổi mật khẩu thành công");
    }
}