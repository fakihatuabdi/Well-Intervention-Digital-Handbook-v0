# Vercel Deployment & PWA Installation Guide

## 📱 Apa yang Sudah Disetup
Aplikasi Rig Hub sudah dikonfigurasi sebagai **Progressive Web App (PWA)** yang dapat:
- ✅ Dijalankan di browser HP (responsive design)
- ✅ Diinstal sebagai app dengan icon di home screen
- ✅ Bekerja offline dengan caching
- ✅ Ter-update otomatis setiap kali ada perubahan code

---

## 🚀 Step 1: Setup Vercel Deployment

### A. Persiapan (Hanya dilakukan sekali)

1. **Buka website Vercel**
   - Kunjungi https://vercel.com
   - Klik "Sign up" → Pilih "Continue with GitHub"
   - Login dengan akun GitHub Anda
   - Authorize Vercel untuk akses repository

2. **Import Repository**
   - Di dashboard Vercel, klik "New Project"
   - Pilih repository `codespaces-react`
   - Klik "Import"
   - Biarkan semua settings default, klik "Deploy"
   - Tunggu 1-2 menit hingga selesai

3. **Dapatkan URL Live**
   - Setelah deploy selesai, Vercel akan menampilkan URL
   - Contoh: `https://rig-hub.vercel.app`
   - Salin URL ini untuk dibagikan ke tester

### B. Automatic Deployment (Otomatis setiap push)

Mulai sekarang, setiap kali Anda:
```bash
git push origin main
```

Vercel **otomatis:**
- Mendeteksi perubahan
- Rebuild aplikasi
- Deploy versi baru
- Dalam 30-60 detik, update live di URL

**Tidak perlu manual deploy lagi!**

---

## 📲 Step 2: Cara Instalasi untuk Tester

### **Untuk Pengguna iPhone/iPad (iOS)**

1. **Buka link aplikasi di Safari**
   - Kirim URL Vercel ke tester
   - Tester buka di browser Safari (important: bukan Chrome!)

2. **Tap Share Button**
   - Tekan tombol "Share" (persegi dengan panah ke atas)

3. **Tap "Add to Home Screen"**
   - Scroll ke bawah, cari opsi "Add to Home Screen"
   - Tap "Add"

4. **Selesai!**
   - Aplikasi muncul di home screen dengan icon
   - Tap icon untuk membuka aplikasi

---

### **Untuk Pengguna Android**

1. **Buka link aplikasi di Chrome atau Browser**
   - Kirim URL Vercel ke tester
   - Tester buka di Chrome (atau browser lainnya)

2. **Tunggu "Install" Prompt**
   - Browser akan menampilkan popup "Install app"
   - Atau klik menu (⋮) → "Install app"

3. **Tap "Install"**
   - Konfirmasi instalasi

4. **Selesai!**
   - Aplikasi muncul di home screen
   - Tap icon untuk membuka aplikasi

---

### **Jika tidak ada prompt Install (Manual)**

**Android:**
1. Buka menu (⋮) di Chrome
2. Tap "Add to home screen"
3. Nama otomatis terisi "Rig Hub"
4. Tap "Add"

**iOS:**
1. Tap Share button (persegi dengan panah atas)
2. Scroll cari "Add to Home Screen"
3. Tap dan konfirmasi

---

## ✅ Testing Checklist untuk Tester

Berikut hal yang perlu ditest:

- [ ] **Mobile Responsiveness**
  - Aplikasi tampil rapi di HP (portrait & landscape)
  - Semua tombol mudah diklik
  
- [ ] **Navigation**
  - Semua menu berfungsi (Home, Handbook, Calculator, dll)
  - Back button bekerja
  
- [ ] **Data Display**
  - Logo Rig Hub tampil dengan benar
  - Konten handbook terbaca baik
  - Gambar/icon loading dengan baik
  
- [ ] **Offline Mode**
  - Aplikasi masih bisa diakses setelah buka sekali (caching)
  - Fitur offline features bekerja
  
- [ ] **Performance**
  - Aplikasi cepat loading
  - Tidak lag saat navigasi

---

## 📝 Sharing Info ke Tester

Copy template ini untuk mengirim ke tester:

```
Halo, 

Aplikasi Rig Hub sudah siap untuk di-test! 

🔗 Link: [PASTE_VERCEL_URL_HERE]

📲 Cara Install:
- iPhone/iPad: Buka di Safari → Share → Add to Home Screen
- Android: Buka di Chrome → Install app prompt

Aplikasi ini bisa diakses di HP seperti app native. Setiap kali ada update, langsung ter-update otomatis.

Silakan test fitur-fitur dan kasih feedback!

Terima kasih,
[Your Name]
```

---

## 🔄 Update & Maintenance

### Ketika Ada Perubahan Code:

1. **Edit code di VS Code**
2. **Commit & Push**
   ```bash
   git add .
   git commit -m "Update: [deskripsi perubahan]"
   git push origin main
   ```
3. **Vercel otomatis redeploy** (tunggu 1-2 menit)
4. **Tester buka ulang aplikasi** → sudah update!

### Cek Status Deployment:
- Buka https://vercel.com/dashboard
- Pilih project "codespaces-react"
- Lihat deployment history dan status

---

## 🆘 Troubleshooting

### "Install button tidak muncul di Android"
- Buka Chrome menu (⋮) → "Add to home screen"
- Atau tunggu beberapa detik, popup akan muncul

### "Aplikasi tidak ter-update meski sudah push"
- Hapus aplikasi dari home screen
- Install ulang dari browser
- Atau force refresh (Ctrl+Shift+R di browser)

### "Vercel deployment failed"
- Cek email dari Vercel untuk error message
- Verify bahwa semua file tercommit di git
- Cek https://vercel.com/dashboard untuk detail error

### "Offline mode tidak bekerja"
- Buka aplikasi setidaknya 1x saat online
- Service worker butuh waktu untuk cache
- Cek browser DevTools → Application → Service Workers

---

## 📚 Useful Links

- **Vercel Dashboard**: https://vercel.com/dashboard
- **PWA Guide**: https://web.dev/progressive-web-apps/
- **Manifest.json**: Sudah di `/public/manifest.json`
- **Service Worker**: Sudah di `/public/sw.js`

---

Siap untuk production! 🎉
