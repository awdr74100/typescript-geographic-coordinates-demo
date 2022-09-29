import '@/main.css';

const form = document.querySelector<HTMLFormElement>('#form')!;
const addressInput = document.querySelector<HTMLInputElement>('#address')!;

function searchAddressHandler(e: SubmitEvent) {
  e.preventDefault();

  const enteredAddress = addressInput.value;

  // send this to Google's API
}

form.addEventListener('submit', searchAddressHandler);
