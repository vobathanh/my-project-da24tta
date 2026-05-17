function in_bang_cc() {
    let so = document.getElementById("so").value;
    let kq = document.getElementById("kq");

    so = parseInt(so);

    if (isNaN(so) || so < 1 || so > 9) {
        kq.innerHTML = "Vui lòng nhập số từ 1 đến 9";
        return;
    }

    let bang = "";
    for (let i = 1; i <= 10; i++) {
        bang += so + " x " + i + " = " + (so * i) + "<br>";
    }

    kq.innerHTML = bang;
}