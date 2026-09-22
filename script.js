import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 5000, // Usuarios virtuales concurrentes (escenario real)
  duration: '1m', // Duración de la prueba
  thresholds: {
    http_req_duration: ['p(95)<5000'], // 95% de las peticiones en menos de 5s
    http_req_failed: ['rate<0.20'],     // Menos del 20% de errores
  },
};

export default function () {
  const res = http.get('https://megatickets-cliente.com/comprar');

  check(res, {
    'status es 200': (r) => r.status === 200,
    'responde en menos de 5s': (r) => r.timings.duration < 5000,
  });

  sleep(1); // Simula la pausa de un usuario real
}
