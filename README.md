# Lab de Seguridad: Mitigación de SQL Injection 

Laboratorio práctico de Auditoría Ofensiva y Defensa Backend.

## Tecnologías
- **Backend:** Node.js, Express, TypeScript
- **Base de Datos:** MySQL (Docker Container)
- **Driver:** mysql2/promise (Consultas Preparadas)

## ?? Hallazgos de Seguridad
Se detecto una vulnerabilidad crítica de **SQL Injection** en el endpoint de autenticación (/api/login) debido a la concatenación directa de variables en la consulta nativa de la base de datos.

## ??? Mitigación Defensiva
El backend fue blindado utilizando **Consultas Preparadas (Prepared Statements)** mediante el método .execute(). Esto separa estrictamente el código de los datos del usuario, neutralizando cualquier intento de manipulación lógica (vuelto inmune a payloads como ' OR '1'='1).

##  Verificación
El script de explotación (	est-exploit.js) ahora es rechazado de forma segura devolviendo un **HTTP Status Code 401 (Unauthorized)** en lugar de un colapso interno 500 o la fuga de registros.
