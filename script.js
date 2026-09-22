import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 5000,
  duration: '1m',
  thresholds: {
    http_req_duration: ['p(95)<2000'], // 95% de las peticiones deben responder en menos de 2s
    http_req_failed: ['rate<0.05'],     // Menos del 5% de errores
  },
};

export default function () {
  const res = http.get('https://megatickets-cliente.com/comprar');
  
  check(res, {
    'status es 200': (r) => r.status === 200,
    'responde en menos de 2s': (r) => r.timings.duration < 2000,
  });

  sleep(1);
}
