function runExercise() {
    console.clear();

    const universitas = "universitas Muhammadiyah kalimantan timur";
    console.log("nama universitas", universitas);

    let jumlahMahasiswa = 25;
    jumlahMahasiswa = jumlahMahasiswa + 5;
    console.log("jumlah mahasiswa sekarang:", jumlahMahasiswa);

    let namalengkap = "Jarvis";
    console.log("Halo, Nama saya "+ namalengkap);

    let angka1 = 10
    let angka2 = 5
    console.log("hasil Penjumlahan", angka1 + angka2);
    console.log("hasil Pengurangan", angka1 - angka2);
    console.log("hasil Perkalian", angka1 * angka2);
    console.log("hasil Pembagian", angka1 / angka2);

    let nilaiUjian = 80;
    let lulus = nilaiUjian >= 70;
    console.log("apakah lulus dengan nilai", lulus);
}