function ubahdenganid(){
    const paragrafId = document.getElementById("teks-id");
    paragrafId.textContent = "Teks ini diubah dengan get elementbyid()";
    paragrafId.style.color = "green";
    paragrafId.style.fontWeight = "bold";
    console.log("berhasil ubah dengan getelementbyid");
}

function ubahdenganquery(){
    const paragrafCLass = document.querySelector(".teks-class");
    paragrafCLass.textContent = "Teks ini diubah dengan queryselector()";
    paragrafCLass.style.color = "blue";
    paragrafCLass.style.fontStyle = "italic";
    console.log("Berhasil ubah dengan queryselector()")
}