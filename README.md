# 📰 Liputan 26 - Portal Artikel & Berita Terkini

Landing page portal berita dan artikel terpercaya dengan konten berkualitas seputar teknologi, lingkungan, pendidikan, dan berita terkini Indonesia.

## 🌐 Demo Website

Website ini sudah dilayani melalui **GitHub Pages**. Kunjungi: https://mfsa01.github.io/artikel-ppw/

## ✨ Fitur Utama

- **📱 Responsive Design** - Optimal di semua ukuran layar (mobile, tablet, desktop)
- **🎨 Modern UI** - Interface yang clean dan user-friendly dengan desain contemporary
- **⚡ Performance** - Lazy loading untuk gambar dan optimasi performa
- **🔒 Protected Content** - Proteksi terhadap inspect element dan klik kanan
- **🏃 Trending Section** - Ticker berita trending yang berjalan otomatis
- **📧 Newsletter Subscription** - Form langganan email untuk pembaca
- **🏷️ Kategori Artikel** - Organisir artikel dalam kategori berbeda
- **📰 Article Grid** - Grid layout yang responsif untuk menampilkan artikel

## 📁 Struktur Project

```
artikel-ppw/
├── index.html          # File HTML utama
├── style.css           # Stylesheet utama
├── proteksi.css        # Styling untuk elemen proteksi
├── proteksi.js         # Script proteksi website
├── images/             # Folder untuk gambar dan aset visual
│   ├── hero.png        # Gambar hero banner
│   ├── tech.png        # Gambar kategori teknologi
│   ├── environment.png # Gambar kategori lingkungan
│   └── education.png   # Gambar kategori pendidikan
└── README.md           # File dokumentasi ini
```

## 🛠️ Teknologi yang Digunakan

- **HTML5** - Semantic markup untuk struktur website
- **CSS3** - Styling modern dengan flexbox dan grid
- **Vanilla JavaScript** - Interaktivitas tanpa framework eksternal
- **Google Fonts** - Font Inter dan Playfair Display

## 🚀 Cara Menggunakan

### 1. Clone Repository

```bash
git clone https://github.com/MFSA01/artikel-ppw.git
cd artikel-ppw
```

### 2. Buka di Browser

Cukup buka file `index.html` di browser favorit Anda:

```bash
# Menggunakan Live Server (jika tersedia)
python -m http.server 8000
# atau
php -S localhost:8000
```

Kemudian buka `http://localhost:8000` di browser.

## 📝 Konten Artikel

Website ini menampilkan artikel-artikel dalam kategori:

1. **Teknologi** - Inovasi AI, digital transformation, dan perkembangan tech
2. **Lingkungan** - Energi terbarukan, sustainability, dan isu lingkungan
3. **Pendidikan** - Kurikulum, pembelajaran digital, dan transformasi pendidikan
4. **Berita Hangat** - Update terkini dari berbagai topik

## 🔐 Fitur Keamanan

Website dilengkapi dengan proteksi untuk mencegah:

- ❌ Right-click (klik kanan)
- ❌ Inspect Element (F12)
- ❌ Keyboard shortcuts developer tools (Ctrl+Shift+I, Ctrl+Shift+J, dll)
- ❌ View Source (Ctrl+U)
- ❌ Drag & download gambar
- ❌ Save Page (Ctrl+S)

Fitur ini diimplementasikan di dalam file `proteksi.js`.

## 🎯 Fitur Responsif

Website menggunakan CSS media queries untuk memberikan pengalaman optimal di:

- 📱 Mobile devices (320px - 768px)
- 📱 Tablet (768px - 1024px)
- 🖥️ Desktop (1024px keatas)

## 📧 Newsletter Subscription

Pengguna dapat berlangganan untuk mendapatkan artikel terbaru langsung di email mereka melalui form di sidebar kanan.

## 👤 Author

**Muhammad Farrel Satrio Adipramana** (25.12.3569)

## 📄 Lisensi

Project ini adalah tugas untuk mata kuliah **Pemrograman Web (PPW)**.

## 📞 Kontak & Info Lebih Lanjut

- **Email**: redaksi@liputan26.id
- **Telepon**: (021) 123-4567
- **Lokasi**: Jakarta, Indonesia

---

© 2026 Liputan 26. Hak cipta dilindungi — Muhammad Farrel Satrio Adipramana
