# Aruya Make Up Artist — Website

Website satu halaman (HTML + Tailwind CSS + JavaScript biasa).

## Struktur
- `index.html`  : isi halaman. Styling memakai class Tailwind langsung di markup.
- `style.css`   : CSS hasil build (sudah jadi, ini yang dipakai browser). Jangan diedit manual.
- `src/input.css` : sumber CSS. Berisi komponen kecil (tombol, judul) dan bagian kompleks (loading, kursor, dial, tampilan foto besar).
- `tailwind.config.js` : warna dan font brand (hitam, emas, blush; Cormorant Garamond + Outfit).
- `script.js`   : bahasa ID/EN, dial portofolio, tampilan foto besar, kursor, loading.
- `assets/`     : logo dan foto portofolio.

## Deploy ke Cloudflare Pages
`style.css` sudah jadi, jadi **tidak perlu build**. Unggah seluruh isi folder ini.
Kosongkan "Build command", dan isi "Output directory" dengan `/` (atau biarkan kosong).

## File untuk Google (taruh di folder paling luar)
- `sitemap.xml` dan `robots.txt`: ganti `https://DOMAINANDA.com` dengan alamat website sebenarnya (3 tempat).
- `googleGANTI_DENGAN_KODE_DARI_GOOGLE.html`: file verifikasi Google Search Console.
  1. Daftar di https://search.google.com/search-console, pilih "URL prefix", masukkan alamat website.
  2. Pilih metode verifikasi "HTML file", lalu unduh file yang diberikan Google (namanya `google` + kode unik + `.html`).
  3. Ganti file placeholder ini dengan file asli dari Google (nama dan isinya harus persis sama), unggah, lalu klik Verify.
  4. Setelah terverifikasi, kirim `https://alamatanda.com/sitemap.xml` di menu Sitemaps.
  Jangan hapus file verifikasi setelah berhasil.

## Kalau mengubah class Tailwind di index.html / script.js
CSS perlu dibangun ulang (butuh Node.js):

    npm install
    npm run build      # menghasilkan style.css baru
    npm run dev        # opsional: build otomatis saat file berubah

Perubahan teks, foto, atau link tidak memerlukan build.

## Catatan
Nama class `.dring` (cincin dial) sengaja bukan `.ring`, karena `ring` adalah nama utilitas Tailwind.
