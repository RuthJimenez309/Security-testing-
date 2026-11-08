# MySQL Security Lab: Offensive Exploitation & Defensive Patching

Este proyecto es un laboratorio practico  controlado de pruebas ofensivas y contramedidas defensivas en Node.js, TypeScript y MySQL.

## Arquitectura del Proyecto
- **Laboratorio Inseguro**: Endpoint vulnerable a SQL Injection mediante concatenacion directa de strings.
- **Motor de Explotacion**: Automation script en TypeScript enfocado en evadir autenticacion y extraer datos.
- **Módulo Defensivo**: Capa segura implementando consultas parametrizadas (Prepared Statements) verificada mediante Playwright.

## Estado Actual (Dia 1)
- Infraestructura de base de datos MySQL aislada en Docker.
- Esquema de base de datos con datos semilla y banderas de auditoria.
- Configuracion inicial de dependencias del entorno de ejecucion.
