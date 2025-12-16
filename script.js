const namaUMKM = 'Jus Buah Asli';
console.log('Nama UMKM:', namaUMKM);

let jusMangga = 10;
let jusJeruk = 8;
let jusAlpukat = 6;
let jusMelon = 5;
let jusNanas = 7;
let jusSirsak = 4;

let totalProduk = jusMangga + jusJeruk + jusAlpukat + jusMelon + jusNanas + jusSirsak;
console.log('Total produk berdasarkan jenis:', totalProduk);

console.log('===== Daftar Produk Jus Buah Asli =====');
console.log('Jus Mangga:', jusMangga, 'botol');
console.log('Jus Jeruk:', jusJeruk, 'botol');
console.log('Jus Alpukat:', jusAlpukat, 'botol');
console.log('Jus Melon:', jusMelon, 'botol');
console.log('Jus Nanas:', jusNanas, 'botol');
console.log('Jus Sirsak:', jusSirsak, 'botol');
console.log('=======================================');

if (totalProduk > 30) {
    console.log('Produksi sangat bagus! Persediaan banyak tersedia!');
} else {
    console.log('Produksi masih perlu ditingkatkan untuk memenuhi permintaan.');
}

// INDEX.HTML

document.addEventListener("DOMContentLoaded", function() {
    const temaSelect = document.getElementById("temaSelect");
    const body = document.body;

    temaSelect.addEventListener("change", function() {
        let tema = temaSelect.value;

        if (tema === "putih") {
            body.style.backgroundColor = "#ffffff";
            body.style.color = "#000000";
        }
        else if (tema === "hijau") {
            body.style.backgroundColor = "#9cf59cff";
            body.style.color = "#000000";
        }
        else if (tema === "krem") {
            body.style.backgroundColor = "#ffeebdff";
            body.style.color = "#000000";
        }
    });
});
