# YuCoffe — template landing page editorial hijau + krem (kopi lokal)

Template demo untuk menawarkan jasa landing page ke UMKM. Dibuat dengan Astro, tanpa Tailwind, JavaScript hanya untuk pilihan biji, kalkulator seduh, dan formulir.
Semua nama biji, harga, cerita pendiri, alamat, dan kebijakan di dalamnya adalah **contoh**. Ganti sebelum dipakai klien.

## Menjalankan

Butuh Node.js 22 atau lebih baru.

```bash
npm install
npm run dev       # lihat di http://localhost:4321 sambil mengedit
npm run build     # hasil jadi ada di folder dist/
npm run preview   # coba hasil build
```

Folder `dist/` sudah ikut di zip ini, jadi bisa langsung diunggah ke Netlify, Cloudflare Pages, atau hosting statis lain tanpa build ulang.
Kalau kamu mengubah foto atau teks, jalankan `npm run build` lagi lalu unggah ulang `dist/`.

## Mengganti foto (foto dummy → foto asli)

Semua foto ada di satu tempat: **`public/images/`**. Saat ini semuanya foto dummy (satu foto yang dipotong beda-beda).
Cara paling mudah: **timpa file dengan nama yang sama**. Semua foto di template ini **persegi (1:1)**.

| File di `public/images/` | Dipakai untuk | Ukuran foto yang disarankan |
| --- | --- | --- |
| `hero.jpg` | foto kecil di kartu pembuka (di atas daftar "Minggu ini / Proses / Sangrai / Rasa") | 1000 × 1000 px |
| `produk-1.jpg` | biji pertama di katalog (Toraja Sapan) | 1000 × 1000 px |
| `produk-2.jpg` | biji kedua (Gayo Pegasing) | 1000 × 1000 px |
| `produk-3.jpg` | biji ketiga (Flores Bajawa) | 1000 × 1000 px |
| `produk-4.jpg` | biji keempat (Kerinci Kayu Aro) | 1000 × 1000 px |
| `pendiri.jpg` | foto bulat kecil di atas surat pendiri | 400 × 400 px, wajah di tengah |

Catatan:
- Foto produk paling bagus: kemasan atau biji kopi dari atas, latar polos terang atau kayu, cahaya jendela. Satu gaya untuk semua foto supaya katalog terlihat rapi.
- Ganti foto katalog saat ganti isi `catalog.items` supaya foto dan nama biji cocok. Foto berganti otomatis saat pembeli mengklik tab biji.
- Pakai `.jpg` dan usahakan di bawah 300 KB per foto (kompres di squoosh.app).
- Mau pakai nama file atau format lain (`.webp`, `.png`)? Taruh file di `public/images/`, lalu ubah alamatnya di `src/data/site.js` (kolom `image`).

## Mengganti isi

Semua teks ada di **`src/data/site.js`**.

- **Nama usaha, nomor WhatsApp, alamat, jam buka**: bagian `site`. Nomor WhatsApp pakai kode negara tanpa `+` dan tanpa 0 di depan (contoh `6281234567890`). `phoneShown` adalah nomor yang tampil besar di bagian bawah.
- **Kartu di atas ("kartu cupping")**: `hero.fields`, empat baris keterangan biji unggulan minggu ini.
- **Biji, ukuran, dan harga**: `catalog.items`. Setiap biji punya `prices` yang urutannya mengikuti daftar `sizes` (100 g, 250 g, 1 kg). Mau menambah ukuran, tambahkan di `sizes` dan pastikan setiap biji punya harga sebanyak ukuran.
- **Pilihan gilingan**: `grinds` (nama dan keterangan singkatnya).
- **Cara seduh**: `brew.methods`. Isi `ratio` (perbandingan air : kopi), suhu, waktu, dan langkah. Kalkulator menghitung gram kopi dan ml air dari jumlah cangkir (`cupMl` = ml per cangkir).
- **Surat pendiri, tanya jawab, kupon**: bagian `letter`, `faq`, `coupon`.
- **Warna**: bagian `:root` paling atas `src/styles/main.css` (dua hijau, krem, hijau muda).
- **Font**: Newsreader (judul) dan Hanken Grotesk (teks). Sudah ikut terpasang, tidak memanggil Google Fonts.

## Cara kerja pesanan lewat WhatsApp

Dua jalur:

1. **Katalog**: pembeli memilih biji, berat, dan gilingan. Harga berubah langsung, tombol "Pesan lewat WhatsApp" membuka WhatsApp dengan pesan terisi, contoh:
   ```
   Halo YuCoffe, saya mau pesan Kerinci Kayu Aro 1 kg, giling halus. Harga Rp 365.000. Atas nama:
   ```
2. **Kupon di bagian bawah**: pembeli mengisi nama, pesanan, kota, dan catatan, lalu WhatsApp terbuka dengan pesan yang sudah terisi.

Template ini statis (tidak ada keranjang atau pembayaran). Pembayaran dan stok diatur lewat obrolan WhatsApp.

## Yang perlu kamu ganti sebelum dipakai klien

- Nama usaha, semua biji, asal, harga
- Cerita pendiri dan kebijakan di tanya jawab (pengiriman, pembayaran)
- Hari sangrai, alamat, jam buka, nomor telepon, nomor WhatsApp
- Semua foto (lihat tabel di atas)
