import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 5000, // Virtual Users (Usuarios concurrentes)
  duration: '1m', // Tiempo de la prueba
};

export default function () {
  http.get('https://megatickets-cliente.com/comprar');
  sleep(1); // Simula la pausa humana al leer
}
