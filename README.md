# Liga Mercedina de Voley

Este es un proyecto para la liga mercedina de voley.

## Requisitos

    * Node > v20
    * Visual Studio Code
    * Docker --> para levantar la db localmente

## Levantar el proyecto

1. Clonar el repositorio
2. Ejecutar el comando `npm i` para instalar los paquetes y dependencias.
3. Clonar el archivo `.env.template` y renombrarlo como `.env`. Completar las variables de entorno.
4. Abrir Docker Desktop y ejecutar el comando `docker compose up -d`.
5. Una vez que la base de datos este levantada tenemos que aplicar las migraciones de Prisma. Para esto ejecutar el comando `npx prisma migrate deploy`.
6. Actualiza el cliente de prisma. Para eso ejecuta el comando `npx prisma generate`.
7. Levantar el proyecto. Ejecuta el comando `npm run dev`.
