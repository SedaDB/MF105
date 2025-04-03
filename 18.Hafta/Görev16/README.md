# 📱 Reverse Text App

React Native kullanarak geliştirilen bu uygulama, kullanıcının girdiği metni tersine çevirir ve ekranda gösterir. Eğitim amaçlı bu proje, temel arayüz oluşturma, fonksiyonel bileşenler kullanımı ve test yazımı konularını kapsamaktadır.

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

## 📁 Proje Yapısı

```
/reverse-text-app
├── App.js
├── /src
│   ├── /components
│   │   ├── TextInputComponent.js
│   │   └── ButtonComponent.js
│   └── /tests
│       └── App.test.js
└── README.md
```

## 🧪 Test Senaryoları

- Boş metin ters çevrilmemeli
- Normal metin ters çevrilmeli
- Özel karakterler ters çevrilmeli
- Temizle butonu çalışmalı
- Uzun metin girildiğinde hata mesajı gösterilmeli

## 📷 Ekran Görüntüsü (Opsiyonel)

> İstersen buraya bir simülasyon ekran görüntüsü ekleyebilirsin.

## 📝 Lisans

Bu proje yalnızca eğitim amaçlıdır.
