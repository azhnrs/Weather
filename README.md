# Weather App - Aplikasi Cek Cuaca 🌤️

Aplikasi web sederhana untuk mengecek informasi cuaca dari berbagai kota di dunia. Project ini dibuat sebagai bagian dari bootcamp pembelajaran JavaScript dan jQuery.

## 🚀 Features

- **Pencarian Kota**: Masukkan nama kota untuk mendapatkan informasi cuaca terkini
- **Informasi Lengkap**: Menampilkan data cuaca meliputi:
  - Suhu saat ini (°C) dengan emoticon dinamis 🔥😊❄️
  - Kelembaban udara (%) dengan indikator visual 💧🌫️🌬️
  - Tekanan atmosfer (hPa) dengan status cuaca 🌤️🌥️🌧️
  - Kecepatan angin (km/jam) dengan level indicator 🌪️🌬️🍃
  - Deskripsi cuaca dengan emoticon matching ☀️🌤️☁️🌧️❄️
  - Waktu pembaruan data real-time
- **Interactive Moving Box**: Kotak pesan bergerak dengan saran berdasarkan cuaca
- **Dynamic Messages**: Pesan dan gambar yang berubah sesuai kondisi suhu
- **Beautiful UI**: Background blur dengan overlay transparan
- **Real-time Data**: Data cuaca terbaru dari WeatherAPI

## 🛠️ Tech Stack

- **HTML5**: Struktur halaman web (`<!DOCTYPE html>`)
- **CSS3**: Styling modern dengan fitur:
  - `background-image` dengan blur effect
  - `rgba()` untuk transparansi
  - `border-radius` untuk rounded corners
  - `box-shadow` untuk depth effect
  - `transition` untuk smooth animations
- **JavaScript (ES6+)**: Logic aplikasi dengan modern syntax
- **jQuery 3.6.0**: DOM manipulation dan AJAX requests
- **WeatherAPI**: External API untuk data cuaca real-time

## 📱 Screenshots

<img width="940" height="434" alt="image" src="https://github.com/user-attachments/assets/f01a55eb-1f78-451d-9f52-848ca8452b71" />

*Interface pencarian kota*

<img width="940" height="441" alt="image" src="https://github.com/user-attachments/assets/e4fa6c67-0307-4181-a30b-11fd857e874c" />

*Hasil informasi cuaca untuk Magelang, Indonesia*

## 🔧 Installation & Usage

1. Clone repository ini:
   ```bash
   git clone https://github.com/azhnrs/Weather.git
   ```

2. Masuk ke direktori project:
   ```bash
   cd Weather
   ```

3. Dapatkan API key dari [WeatherAPI.com](https://www.weatherapi.com/)

4. Ganti API key di file `script.js`:
   ```javascript
   const apiKey = 'YOUR_API_KEY_HERE';
   ```

5. Buka file `index.html` di browser atau jalankan dengan local server

## 🎯 Key Features Detail

### 1. **Smart Emoticon System**
Aplikasi menggunakan sistem emoticon cerdas yang berubah berdasarkan kondisi cuaca:

```javascript
// Temperature indicators
🔥 Suhu > 30°C (Panas)
😊 Suhu 20-30°C (Nyaman)  
❄️ Suhu < 20°C (Dingin)

// Humidity levels
💧 Kelembaban > 70% (Tinggi)
🌫️ Kelembaban 40-70% (Sedang)
🌬️ Kelembaban < 40% (Rendah)
```

### 2. **Interactive Moving Box**
Kotak pesan yang bergerak setiap 5 detik dengan saran berdasarkan suhu:
- **Panas (🔥)**: "Wah panas ya, jangan lupa minum air yang banyak."
- **Nyaman (😊)**: "Wah cuacanya nyaman ya...."
- **Dingin (❄️)**: "Dingiiin..... Ayo pakai jaketnya."

## 🌐 API Integration

Project ini menggunakan WeatherAPI.com untuk mendapatkan data cuaca real-time:

```javascript
// AJAX call menggunakan jQuery
$.ajax({
    url: `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`, 
    method: 'GET',
    success: function(data) {
        weatherData = data; 
        displayWeather(weatherData); 
        startMovingBox(); 
    },
    error: function() {
        alert('Gagal mengambil data cuaca. Pastikan nama kota benar.');
    }
});
```

### API Response Data:
- `data.location.name` - Nama kota
- `data.location.country` - Nama negara  
- `data.current.temp_c` - Suhu dalam Celsius
- `data.current.humidity` - Kelembaban (%)
- `data.current.pressure_mb` - Tekanan (hPa)
- `data.current.wind_kph` - Kecepatan angin (km/jam)
- `data.current.condition.text` - Deskripsi cuaca
- `data.current.last_updated` - Waktu update terakhir

## 📚 Learning Objectives

Project ini dibuat untuk mempelajari:
- **jQuery AJAX**: Menggunakan `$.ajax()` untuk API calls
- **DOM Manipulation**: Menggunakan jQuery selectors (`#`, class selectors)
- **Event Handling**: Click events dan user interactions
- **CSS3 Advanced**: Background effects, transitions, dan positioning
- **JavaScript ES6+**: Arrow functions, template literals, modern syntax
- **API Integration**: Parsing JSON response dan error handling  
- **Dynamic Content**: Mengubah konten berdasarkan data real-time
- **Animation & Effects**: Moving elements dan smooth transitions
- **Responsive Design**: Adaptive layout untuk berbagai screen size

## 🤝 Contributing

Contributions, issues, dan feature requests sangat diterima! 
Silakan check [issues page](../../issues) jika ingin berkontribusi.

## 📄 License

Project ini dibuat untuk tugas akhir materi JavaScript & jQuery dalam bootcamp Full Stack Web Development.
