# Panduan Merge Branch ke Branch Default Vercel

Dokumen ini berisi langkah-langkah untuk merge perubahan dari branch development (biasanya `main`) ke branch default yang terhubung dengan Vercel (`codespace-refactored-broccoli-jw9xj9x79vv25rjq`).

## Prasyarat
- Pastikan semua perubahan di branch `main` sudah di-commit
- Pastikan Anda memiliki akses push ke repository

## Langkah-Langkah Merge

### 1. Cek Status Git Saat Ini
```bash
cd /workspaces/Well-Intervention-Digital-Handbook-v0
git status
```
Pastikan working tree clean (tidak ada uncommitted changes).

### 2. Lihat Semua Branch yang Tersedia
```bash
git branch -a
```
Ini akan menampilkan semua branch lokal dan remote.

### 3. Cek Commit Terbaru di Branch Main
```bash
git log --oneline -10
```
Catat commit-commit yang akan di-merge ke branch default.

### 4. Checkout ke Branch Default Vercel
```bash
git checkout codespace-refactored-broccoli-jw9xj9x79vv25rjq
```
Jika branch belum ada di lokal, Git akan otomatis membuat tracking branch dari remote.

### 5. Pull Latest Changes dari Remote (Opsional tapi Disarankan)
```bash
git pull origin codespace-refactored-broccoli-jw9xj9x79vv25rjq
```
Ini memastikan branch lokal Anda up-to-date dengan remote.

### 6. Merge Branch Main ke Branch Default
```bash
git merge main -m "Merge main branch with latest updates into default branch"
```
Perintah ini akan merge semua commit dari `main` ke branch default.

**Catatan:** Jika ada konflik:
- Git akan menampilkan file-file yang konflik
- Edit file tersebut untuk resolve konflik
- Setelah selesai, jalankan:
  ```bash
  git add .
  git commit -m "Resolve merge conflicts"
  ```

### 7. Push Perubahan ke Remote Repository
```bash
git push origin codespace-refactored-broccoli-jw9xj9x79vv25rjq
```
Push ini akan trigger automatic deployment di Vercel.

### 8. Kembali ke Branch Main (Opsional)
```bash
git checkout main
```

### 9. Verifikasi Deployment di Vercel
- Buka dashboard Vercel Anda
- Cek status deployment untuk project ini
- Deployment biasanya selesai dalam 1-2 menit

## Perintah Lengkap (Copy-Paste)

Untuk kemudahan, berikut perintah lengkap yang bisa di-copy-paste:

```bash
# 1. Pastikan di branch main dan working tree clean
cd /workspaces/Well-Intervention-Digital-Handbook-v0
git status

# 2. Checkout ke branch default Vercel
git checkout codespace-refactored-broccoli-jw9xj9x79vv25rjq

# 3. Pull latest changes (optional)
git pull origin codespace-refactored-broccoli-jw9xj9x79vv25rjq

# 4. Merge dari main
git merge main -m "Merge main branch with latest updates"

# 5. Push ke remote (trigger Vercel deployment)
git push origin codespace-refactored-broccoli-jw9xj9x79vv25rjq

# 6. Kembali ke main
git checkout main
```

## Tips dan Best Practices

### 1. Selalu Commit Dulu Sebelum Merge
Pastikan semua perubahan di branch `main` sudah di-commit sebelum melakukan merge.

### 2. Test Lokal Sebelum Push
Setelah merge, Anda bisa test aplikasi di lokal terlebih dahulu:
```bash
npm run dev
```

### 3. Backup Branch (Opsional)
Jika ingin membuat backup branch default sebelum merge:
```bash
git checkout codespace-refactored-broccoli-jw9xj9x79vv25rjq
git checkout -b backup-default-$(date +%Y%m%d)
git checkout codespace-refactored-broccoli-jw9xj9x79vv25rjq
```

### 4. Rollback Jika Terjadi Masalah
Jika deployment gagal dan perlu rollback:
```bash
git checkout codespace-refactored-broccoli-jw9xj9x79vv25rjq
git reset --hard origin/codespace-refactored-broccoli-jw9xj9x79vv25rjq
git push origin codespace-refactored-broccoli-jw9xj9x79vv25rjq --force
```

### 5. Cek Diff Sebelum Merge
Untuk melihat perubahan apa saja yang akan di-merge:
```bash
git checkout codespace-refactored-broccoli-jw9xj9x79vv25rjq
git diff codespace-refactored-broccoli-jw9xj9x79vv25rjq..main
```

## Troubleshooting

### Konflik Merge
Jika terjadi konflik saat merge:
1. Git akan menampilkan file yang konflik
2. Buka file tersebut dan cari marker `<<<<<<<`, `=======`, `>>>>>>>`
3. Edit file untuk memilih perubahan yang ingin dipertahankan
4. Hapus marker konflik
5. Save file dan jalankan:
   ```bash
   git add .
   git commit -m "Resolve merge conflicts"
   ```

### Push Ditolak (Rejected)
Jika push ditolak karena remote memiliki perubahan yang tidak ada di lokal:
```bash
git pull origin codespace-refactored-broccoli-jw9xj9x79vv25rjq --rebase
git push origin codespace-refactored-broccoli-jw9xj9x79vv25rjq
```

### Branch Tidak Ditemukan
Jika branch default tidak ditemukan:
```bash
git fetch origin
git checkout codespace-refactored-broccoli-jw9xj9x79vv25rjq
```

## Alternatif: Mengubah Default Branch

Jika Anda ingin menjadikan `main` sebagai branch default (lebih simpel untuk kedepannya):

1. **Di GitHub:**
   - Buka repository di GitHub
   - Settings → Branches
   - Ubah default branch dari `codespace-refactored-broccoli-jw9xj9x79vv25rjq` ke `main`

2. **Di Vercel:**
   - Buka project di Vercel Dashboard
   - Settings → Git
   - Ubah Production Branch dari `codespace-refactored-broccoli-jw9xj9x79vv25rjq` ke `main`

3. **Merge final ke main dan push:**
   ```bash
   git checkout codespace-refactored-broccoli-jw9xj9x79vv25rjq
   git merge main
   git checkout main
   git merge codespace-refactored-broccoli-jw9xj9x79vv25rjq
   git push origin main
   ```

Setelah itu, Anda hanya perlu bekerja di branch `main` dan setiap push akan otomatis deploy ke Vercel.

---

**Terakhir diupdate:** 24 Desember 2025
**Versi:** 1.0
