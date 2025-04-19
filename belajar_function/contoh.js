// 1. Membuat fungsi 'hello' dengan 2 argumen, 'name' dan 'origin' (dengan nilai default "Bandung")
function hello(name, origin = "Bandung") {
    // 2. Mengembalikan string sesuai format
    return `Halo! Nama saya ${name}. Saya tinggal di ${origin}.`;
  }
  
  // 4. Variabel 'rival' memanggil fungsi hello dengan nama dan origin
  const rival = hello('Rival', 'Tangerang');
  
  // 5. Variabel 'indra' memanggil fungsi hello hanya dengan nama (origin akan otomatis "Bandung")
  const indra = hello('Indra');
  
  // Menampilkan hasilnya
  console.log(rival); // Output: Halo! Nama saya Rival. Saya tinggal di Tangerang.
  console.log(indra);  // Output: Halo! Nama saya Indra. Saya tinggal di Bandung.
  