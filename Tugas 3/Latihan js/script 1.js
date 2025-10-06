const tombol = document.getElementById("btn")
const teks = document.getElementById("teks")

tombol.addEventListener("click", function(){
    teks.textContent ="teks berhasil diubah dengan java script";
    teks.style.color = "green";
});