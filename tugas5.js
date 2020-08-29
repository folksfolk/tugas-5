// Jawaban Soal Nomor 1

function halo() {
    return "Halo Sanbers!";
  }
  
console.log(halo())

// Jawaban Soal Nomor 2

function kalikan(num1, num2) {
    return num1 * num2;
}
  
var num1 = 12
var num2 = 4
   
var hasilKali = kalikan(num1, num2)
console.log(hasilKali)

// Jawaban Soal Nomor 3

function introduce(name, age, address, hobby) {
    return "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di "
    + address + ", dan saya punya hobi " + hobby + "!";
}
  
var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
   
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan)

// Jawaban Soal Nomor 4

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var pesertaObj = {nama: arrayDaftarPeserta[0], 
    JenisKelamin: arrayDaftarPeserta[1],
   hobi: arrayDaftarPeserta[2],
   Tahun_lahir:arrayDaftarPeserta[3]}

console.log(pesertaObj.nama)
console.log(pesertaObj.JenisKelamin)
console.log(pesertaObj.hobi)
console.log(pesertaObj.Tahun_lahir)

// Jawaban Soal Nomor 5

var buah = [{nama: "strawberry", warna: "merah", adaBijinya: false, harga: 9000},
           {nama: "jeruk", warna: "oranye", adaBijinya: true, harga: 8000},
           {nama: "Semangka", warna: "Hijau dan Merah", adaBijinya: true,harga: 10000},
           {nama: "Pisang", warna: "Kuning", adaBijinya: false, harga: 5000}]

console.log(buah[0])
// Jawaban Soal Nomor 6

var dataFilm = []

function tambahFilm (nama, durasi, genre, tahun) {
  var obj = {nama: nama, durasi: durasi, genre: genre, tahun: tahun}
  dataFilm.push(obj)
}

tambahFilm("Fight Back to School", 100, "Action Comedy", 1991)
tambahFilm("Fight Back to School 2", 106, "Action Comedy", 1992)
tambahFilm("Fight Back to School 3", 89, "Action Comedy", 1993)

console.log(dataFilm)