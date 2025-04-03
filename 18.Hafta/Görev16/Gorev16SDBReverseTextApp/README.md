# 📱 Reverse Text App

React Native (TypeScript) kullanılarak geliştirilen bu uygulama, kullanıcının girdiği metni tersine çevirir ve ekranda gösterir. Proje, temel bileşen yapısı, kullanıcı etkileşimi ve test süreçlerini kapsamaktadır.

## 🚀 Özellikler

- ✅ Kullanıcıdan metin alma (TextInput)
- 🔁 Metni tersine çevirme
- ❌ Temizle butonu ile alanları sıfırlama
- ⚠️ Maksimum metin uzunluğu kontrolü (50 karakter)
- 🎨 Temel stil uygulamaları
- 🧪 Jest + React Native Testing Library ile yazılmış testler

## 🛠️ Kurulum

1. Expo CLI ile projeyi başlat:
   ```bash
   git clone https://github.com/kullanici-adi/reverse-text-app.git
   cd reverse-text-app
   npm install
   npx expo start
   ```

2. Jest testlerini çalıştırmak için:
   ```bash
   npm test
   ```

## 🧪 Test Sonuçları

```
 PASS  src/tests/App.test.tsx
  √ Boş metin girildiğinde sonuç da boş olmalı (2901 ms)
  √ Normal metin ters çevriliyor mu (17 ms)
  √ Özel karakterler ters çevriliyor mu (14 ms)
  √ Temizle butonu çalışıyor mu (12 ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        6.07 s
Ran all test suites.
```

## 📁 Proje Yapısı

```
/reverse-text-app
├── App.tsx
├── /src
│   ├── /components
│   │   ├── TextInputComponent.tsx
│   │   └── ButtonComponent.tsx
│   └── /tests
│       └── App.test.tsx
└── README.md
```

## 📝 Lisans

Bu proje yalnızca eğitim amaçlıdır.
