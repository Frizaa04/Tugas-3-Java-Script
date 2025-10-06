function cekKelulusan(){
    console.clear();
    let nilai = document.getElementById("nilai").value;

    if (nilai === "") {
        console.log("⚠️Nilai harus diisi terlebih dahulu");
        return;
    }

    nilai =parseInt(nilai);
    if (nilai >= 70){
        console.log("nilai anda:",nilai ,"Status lulus")
    } else{
        console.log("nilai anda:",nilai, "status tidak lulus")
    }
}