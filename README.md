# Leis AI — Vercel Kurulum Rehberi

## 📁 Dosya Yapısı
```
leis-ai/
├── api/
│   └── chat.js          ← Anthropic API proxy (backend)
├── public/
│   └── index.html       ← Frontend
├── vercel.json          ← Vercel config
└── README.md
```

## 🚀 Adım Adım Kurulum

### 1. GitHub'a yükle
- github.com → New repository → "leis-ai"
- Bu klasördeki tüm dosyaları yükle

### 2. Vercel'e bağla
- vercel.com → "Add New Project"
- GitHub reposunu seç → Import
- **Framework Preset: Other** seç
- Deploy butonuna bas

### 3. API Key ekle (ÇOK ÖNEMLİ)
Vercel Dashboard → Projen → Settings → Environment Variables:

| Name | Value |
|------|-------|
| `ANTHROPIC_API_KEY` | `sk-ant-...` (Anthropic'ten aldığın key) |

Ekledikten sonra: **Deployments → Redeploy**

### 4. Site hazır! 🎉
Vercel sana `leis-ai.vercel.app` gibi bir link verir.

## 🔑 Anthropic API Key nereden alınır?
→ console.anthropic.com → API Keys → Create Key

## ✨ Özellikler
- Kayıt / Giriş sistemi (localStorage)
- Gemini benzeri karanlık arayüz
- Web araştırma simülasyonu + kaynak linkleri
- Sohbet geçmişi
- Mobil uyumlu
