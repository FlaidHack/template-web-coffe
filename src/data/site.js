// YuCoffe — satu file untuk semua isi halaman.
// Ubah teks/harga/foto di sini, lalu `npm run build`.

export const site = {
  name: 'YuCoffe',
  title: 'YuCoffe — kopi gelas dan cup, pesan lewat WhatsApp',
  description:
    'Kopi petani lokal yang diseduh segar tiap hari. Pilih menu, panas atau dingin, tentukan jumlahnya, lalu pesan lewat WhatsApp.',
  // nomor WA tujuan: pakai kode negara, tanpa + dan tanpa 0 di depan
  whatsapp: '6281234567890',
  phoneShown: '0812-3456-7890',
  email: 'halo@yucoffe.example',
  address: 'Jl. Contoh No. 12, Samarinda',
  hours: 'Setiap hari, 08.00–21.00',
  roastDay: 'Selasa',
  city: 'Samarinda',
};

export const hero = {
  headline: ['Kopi lokal,', 'baru diseduh.'],
  text: 'YuCoffe menyeduh kopi petani lokal tiap hari — digelas, dicup, siap dibawa. Pilih menumu, panas atau dingin, lalu pesan lewat WhatsApp untuk diambil atau diantar.',
  cta: 'Lihat menu',
  // foto persegi 1:1, minimal 1000px — taruh di public/images/hero.jpg
  image: '/images/hero.jpg',
  alt: 'Foto contoh untuk kartu pembuka',
};

export const nav = [
  ['Menu', '#menu'],
  ['Tanya jawab', '#tanya'],
];

// kategori di sidebar kiri; tiap item menu punya .cat yang cocok dengan nama ini
export const menuCats = ['Promo', 'Kopi', 'Non kopi', 'Cemilan'];

export const menu = {
  heading: 'Menu kopi',
  items: [
    {
      cat: 'Promo',
      name: 'Kenyang Paket',
      desc: '2 gelas Kopi Susu Aren + Roti Bakar Aren. Hemat Rp 9.000 kalau diambil bareng.',
      price: 48000,
      image: '/images/produk-1.jpg',
    },
    {
      cat: 'Promo',
      name: 'Pair Sore',
      desc: 'Americano + Roti Bakar Aren, sepasang setia untuk sore.',
      price: 33000,
      image: '/images/produk-2.jpg',
    },
    {
      cat: 'Kopi',
      name: 'Kopi Susu Aren',
      desc: 'Signature kedai ini. Espresso, fresh milk, dan gula aren yang manis-gurih pas.',
      price: 22000,
      image: '/images/produk-1.jpg',
    },
    {
      cat: 'Kopi',
      name: 'Americano',
      desc: 'Espresso yang diencerkan air panas. Tegas, bersih, tanpa pahit menyengat.',
      price: 18000,
      image: '/images/produk-2.jpg',
    },
    {
      cat: 'Kopi',
      name: 'Cappuccino',
      desc: 'Seimbang antara espresso dan susu, foamnya lembut. Pas untuk pagi.',
      price: 25000,
      image: '/images/produk-3.jpg',
    },
    {
      cat: 'Non kopi',
      name: 'Susu Boba Aren',
      desc: 'Fresh milk, boba kenyal, gula aren asli. Tanpa kopi, tanpa rasa rugi.',
      price: 24000,
      image: '/images/produk-2.jpg',
    },
    {
      cat: 'Non kopi',
      name: 'Matcha Latte',
      desc: 'Matcha Jepang dengan fresh milk. Lembut, sedikit manis, manisnya pas.',
      price: 24000,
      image: '/images/produk-3.jpg',
    },
    {
      cat: 'Cemilan',
      name: 'Roti Bakar Aren',
      desc: 'Roti hangat mentega dengan gula aren yang leleh.',
      price: 18000,
      image: '/images/produk-4.jpg',
    },
    {
      cat: 'Cemilan',
      name: 'Pisang Goreng Madu',
      desc: 'Pisang kepok goreng garing, madu, dan taburan keju. Cocok pasangan Americano.',
      price: 16000,
      image: '/images/produk-4.jpg',
    },
  ],
  orderText: 'Pesan lewat WhatsApp',
};

// kolom form pesan: [id input, label, placeholder]
export const order = {
  heading: 'Pesan kopimu',
  text: 'Isi kolom ini, lalu WhatsApp terbuka dengan pesan yang sudah terisi.',
  fields: [
    ['nama', 'Nama', 'Nama kamu'],
    ['pesanan', 'Pesanan', 'Contoh: 2 Kopi Susu Aren, dingin'],
    ['kota', 'Kota kirim', 'Kota pengiriman'],
    ['catatan', 'Catatan', 'Kurang manis, tanpa es, dll.'],
  ],
  button: 'Kirim lewat WhatsApp',
};

export const footer = {
  notes: [
    'YuCoffe, kopi gelas dan cup tiap hari',
    'Setiap hari, 08.00–21.00',
    'Jl. Contoh No. 12, Samarinda',
  ],
  links: [
    ['Menu', '/menu'],
    ['Pesan', '/pesan'],
    ['Tanya jawab', '/tanya'],
  ],
};

// surat pendiri
export const letter = {
  // foto wajah pendiri, persegi — public/images/pendiri.jpg
  image: '/images/pendiri.jpg',
  alt: 'Foto contoh pendiri',
  paragraphs: [
    'Saya mulai YuCoffe dari satu mesin espresso kecil di teras rumah. Awalnya cuma ingin kopi yang rasanya mirip tempat asalnya, bukan pahit gosong seperti yang sering saya minum dulu.',
    'Tiap Selasa kami menyangrai biji dari petani yang kami kenal namanya, lalu menyeduhnya segar tiap pagi.',
    'Kami tidak menjanjikan kopi paling mahal. Kami menjanjikan kopi yang jujur: tertulis asalnya, tertulis sangraiannya, dan bisa kamu tanyakan langsung ke saya lewat WhatsApp.',
    'Kalau bingung pilih menu, ceritakan seleramu. Saya bantu pilihkan.',
  ],
  name: 'Yu',
  role: 'Pemilik YuCoffe',
  stripText: 'Tanya menu yang cocok:',
};

export const faq = {
  heading: 'Tanya jawab',
  items: [
    {
      q: 'Berapa lama pesanannya siap?',
      a: 'Kalau sudah pesan lewat WhatsApp, biasanya 10 sampai 15 menit. Saat ramai maksimal 25 menit — kami kabari dulu kalau lama.',
    },
    {
      q: 'Bisa kurang manis atau ganti susu oat?',
      a: 'Bisa. Tulis saja di catatan pesanan, misalnya less sugar atau ganti Oatside dengan tambahan Rp 3.000.',
    },
    {
      q: 'Kopi yang dipakai kopi apa?',
      a: 'Blend petani Gayo dan Toraja, kami sangrai sendiri tiap pekan. Asal bijinya selalu tertulis di papan kedai dan bisa kamu tanyakan.',
    },
    {
      q: 'Bagaimana cara membayar?',
      a: 'Lewat transfer bank, e-wallet, atau QRIS. Rinciannya kami kirim lewat WhatsApp setelah pesananmu kami konfirmasi.',
    },
    {
      q: 'Bisa pesan untuk rapat atau acara?',
      a: 'Bisa. Kirim menu dan jumlah cup yang kamu mau lewat WhatsApp, terutama kalau lebih dari 20 cup — kami siapkan sore sebelumnya.',
    },
  ],
};

// bantu rupiah & link WA — jangan diubah
export const rupiah = (n) => 'Rp ' + n.toLocaleString('id-ID');
export const wa = (text) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
