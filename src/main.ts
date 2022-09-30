import '@/main.css';
import axios from 'axios';

const form = document.querySelector<HTMLFormElement>('#form')!;
const addressInput = document.querySelector<HTMLInputElement>('#address')!;

type NominatimGeocodingResponse = {
  features: {
    geometry: {
      coordinates: [number, number];
    };
  }[];
};

async function searchAddressHandler(e: SubmitEvent) {
  e.preventDefault();

  const enteredAddress = addressInput.value;

  if (!enteredAddress) return;

  try {
    const { data } = await axios.get<NominatimGeocodingResponse>(
      `https://nominatim.openstreetmap.org/search?q=${encodeURI(
        enteredAddress,
      )}&format=geocodejson`,
    );

    if (!data.features.length) throw new Error('Could not fetch location!');

    const [longitude, latitude] = data.features[0].geometry.coordinates;

    console.log(longitude, latitude);
  } catch (error: any) {
    alert(error.message);
    console.log(error);
  }

  // send this to Google's API
}

form.addEventListener('submit', searchAddressHandler);
