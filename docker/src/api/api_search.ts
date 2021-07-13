import axios from 'axios';
import { decrypt, encryptedApiKey } from './api_key';

async function search(searchTerm: string, privateKey: string): Promise<Todo[]> {
  const key: string = decrypt(encryptedApiKey, privateKey);  // priv key gitignored
  const url: string = `https://www.omdbapi.com/?apikey=${key}&t=${searchTerm}`;

  try {
    return (await axios.get(url)).data;
  } catch (err) {
    console.log(err);
  }
}

export { search };
