$(document).ready(function () {

    const form = $("#formKontak");
    const errorMsg = $("#errorMsg");
    const successAlert = $("#alertSuccess");

    form.on("submit", function (e) {
        e.preventDefault();

        errorMsg.text(""); 
        successAlert.addClass("d-none").removeClass("show");

        const nama = $("#nama").val().trim();
        const email = $("#email").val().trim();
        const hp = $("#hp").val().trim();
        const pesan = $("#pesan").val().trim();

        if (nama === "" || email === "" || hp === "" || pesan === "") {
            errorMsg.text("⚠ Semua field wajib diisi!");
            return;
        }

        if (!/^[0-9]+$/.test(hp)) {
            errorMsg.text("⚠ Nomor HP hanya boleh angka!");
            return;
        }

        successAlert.removeClass("d-none").addClass("show");

        form.trigger("reset");
    });

    $("button[type='reset']").on("click", function () {
        errorMsg.text("");
        successAlert.addClass("d-none").removeClass("show");
    });
});
