import axios from 'axios';
import { decrypt, encryptedApiKey } from './api_key';

async function search(searchTerm: string, privateKey: string): Promise<Record<string, string>> {
  const key: string = decrypt(encryptedApiKey, privateKey);
  const url: string = `https://www.omdbapi.com/?apikey=${key}&t=${searchTerm}`;

  try {
    return (await axios.get(url)).data;
  } catch (err) {
    console.log(err);
  }
}

export { search };
