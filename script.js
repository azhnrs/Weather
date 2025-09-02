$(document).ready(function() {
    // Variabel untuk menyimpan informasi cuaca
    let weatherData = {};
    const apiKey = '0df05272f8ea4b9db5b54926242912'; 

    // Fungsi untuk mengambil data cuaca dari API
    function fetchWeather(city) {
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
    }

    // Fungsi untuk menampilkan informasi cuaca
    function displayWeather(data) {
        if (data && data.current) {
            let temperature = data.current.temp_c;
            let tempEmoticon = temperature > 30 ? '🔥' : temperature > 20 ? '😊' : '❄️';
            let humidity = data.current.humidity;
            let humidityEmoticon = humidity > 70 ? '💧' : humidity > 40 ? '🌫️' : '🌬️';
            let pressure = data.current.pressure_mb; 
            let pressureEmoticon = pressure > 1013 ? '🌤️' : pressure >= 1000 ? '🌥️' : '🌧️';
            let windSpeed = data.current.wind_kph; 
            let windEmoticon = windSpeed > 20 ? '🌪️' : windSpeed >= 10 ? '🌬️' : '🍃';
            let weatherDescription = data.current.condition.text; 
            let descriptionEmoticon;
            switch (weatherDescription.toLowerCase()) {
                case 'clear':
                    descriptionEmoticon = '☀️';
                    break;
                case 'partly cloudy':
                    descriptionEmoticon = '🌤️';
                    break;
                case 'cloudy':
                    descriptionEmoticon = '☁️';
                    break;
                case 'rain':
                    descriptionEmoticon = '🌧️';
                    break;
                case 'snow':
                    descriptionEmoticon = '❄️';
                    break;
                default:
                    descriptionEmoticon = '🌈';
            }

            $('#weatherInfo').html(`
                <h2>Cuaca di ${data.location.name}, ${data.location.country}</h2>
                <p>Suhu: ${temperature} °C ${tempEmoticon}</p>
                <p>Kelembapan: ${humidity} % ${humidityEmoticon}</p>
                <p>Tekanan: ${pressure} hPa ${pressureEmoticon}</p>
                <p>Kecepatan Angin: ${windSpeed} km/jam ${windEmoticon}</p>
                <p>Deskripsi: ${weatherDescription} ${descriptionEmoticon}</p>
                <p>Waktu Pembaruan: ${data.current.last_updated}</p>
            `);
        } else {
            $('#weatherInfo').html('<p>Tidak ada data cuaca untuk kota ini.</p>');
        }
    }

    // Fungsi untuk memulai kotak yang bergerak
    function startMovingBox() {
        const messages = {
            '🔥': {
                text: "Wah panas ya, jangan lupa minum air yang banyak.",
                img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fid.pngtree.com%2Ffree-png-vectors%2Fminum-air&psig=AOvVaw1WuqwSvKMU-Cx5X98dMmIP&ust=1756376803238000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIipvdfjqo8DFQAAAAAdAAAAABAE" 
            },
            '😊': {
                text: "Wah cuacanya nyaman ya....",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDQ3QfL8NTESIafSakZwnMQp67vTEmfnjfgw&s" 
            },
            '❄️': {
                text: "Dingiiin..... Ayo pakai jaketnya.",
                img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fid%2Fvector%2Ffreezing-shivering-young-boy-winter-cold-standing-snowman-cartoon-vector-322704314.html&psig=AOvVaw0v5hHOW11_TXBzLKCVN6bv&ust=1756376688074000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLiaxJ3jqo8DFQAAAAAdAAAAABAE" 
            }
        };

        // Menentukan emotikon berdasarkan suhu
        let currentTemp = weatherData.current.temp_c;
        let currentEmoticon = currentTemp > 30 ? '🔥' : currentTemp > 20 ? '😊' : '❄️';

        // Mengambil pesan dan gambar berdasarkan emotikon
        let currentMessage = messages[currentEmoticon];
        $('#movingMessage').text(currentMessage.text);
        $('#movingImage').attr('src', currentMessage.img).show();

        setInterval(() => {
            const containerWidth = $('.container').width() - 100; 
            const containerHeight = $('.container').height() - 100; 
            const randomX = Math.random() * containerWidth;
            const randomY = Math.random() * containerHeight;

            $('#movingBox').css({
                left: randomX + 'px',
                top: randomY + 'px'
            });
        }, 5000);
    }

    // Event jQuery untuk tombol cek cuaca
    $('#getWeatherBtn').on('click', function() {
        const city = $('#cityInput').val(); 
        if (city) {
            fetchWeather(city); 
        } else {
            alert('Silakan memasukkan kota terlebih dahulu.'); 
        }
    });

    $('#getWeatherBtn').html('☁️ Cek Cuaca ☀️'); 
});