const cityFilter = document.getElementById('cityFilter');
const amenitiesFilter = document.getElementById('amenitiesFilter');
const hotelList = document.getElementById('hotelList');
const hotels = Array.from(hotelList.getElementsByClassName('hotel'));

function filterHotels() {
  const selectedCity = cityFilter.value.toLowerCase();
  const selectedAmenity = amenitiesFilter.value.toLowerCase();

  hotels.forEach(hotel => {
    const hotelCity = hotel.dataset.city.toLowerCase();
    const hotelAmenities = hotel.dataset.amenities.toLowerCase();

    const matchCity = selectedCity === 'all' || hotelCity === selectedCity;
    const matchAmenity = selectedAmenity === 'all' || hotelAmenities.includes(selectedAmenity);

    if (matchCity && matchAmenity) {
      hotel.style.display = 'block';
    } else {
      hotel.style.display = 'none';
    }
  });
}

cityFilter.addEventListener('change', filterHotels);
amenitiesFilter.addEventListener('change', filterHotels);
