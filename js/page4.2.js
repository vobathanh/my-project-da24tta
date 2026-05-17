let sl = document.getElementById("soluong");
let dg = document.getElementById("dongia");
let tt = document.getElementById("thanhtien");

function tinhTien() {
    let soLuong = Number(sl.value);
    let donGia = Number(dg.value);
    tt.value = soLuong * donGia;
}

sl.addEventListener("input", tinhTien);
dg.addEventListener("input", tinhTien);