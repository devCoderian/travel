// import {Area} from './components/index.js';
import { api } from './APIs/api.js';

// const area = new Area();

// area.init("#app");
const responseBody = await api('미움받을용기');
// const check = responseBody.json();
console.log(responseBody);