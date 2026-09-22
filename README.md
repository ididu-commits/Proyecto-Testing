# Proyecto-Testing – Pruebas de Carga con k6

Script de prueba de carga (Performance Testing) usando **Grafana k6**.

## ¿Qué hace este script?
Simula 5000 usuarios concurrentes durante 1 minuto atacando el endpoint de compra de un e-commerce.

## Cómo ejecutarlo localmente

1. Instalá k6: https://k6.io/docs/get-started/installation/
2. Ejecutá:
```bash
k6 run script.js
