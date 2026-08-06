# QA Portfolio (Vite + React + TypeScript)

Hasil konversi dari `QAPortfolio.jsx` ke struktur project Vite dengan TypeScript.
Tampilan dan fungsi 100% sama seperti versi JSX aslinya — hanya struktur dan tipe yang ditambahkan.

## Cara menjalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

## Build production

```bash
npm run build
npm run preview
```

## Struktur

```
qa-portfolio/
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.tsx
    ├── App.tsx        <- komponen utama (dulu QAPortfolio.jsx)
    ├── index.css
    └── vite-env.d.ts
```

## Edit konten

Buka `src/App.tsx`, cari komentar `EDIT HERE` untuk mengubah:
1. `PROFILE` — nama, role, tagline, kontak
2. `STATS` — angka pengalaman
3. `SKILLS_MANUAL` / `SKILLS_AUTO` / `TOOLS` — skill & tools
4. `PIPELINE` — riwayat pengalaman kerja
5. `PROJECTS` — portfolio project testing
