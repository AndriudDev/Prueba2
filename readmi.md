# 1. Clonar el repositorio
git clone <url-del-repo>
cd express-mvc

# 2. Instalar dependencias
yarn install

# 3. Copiar variables de entorno
cp .env.example .env

# 4. Generar el cliente de Prisma y crear la BD
npx prisma migrate dev --name init

# 5. Poblar la base de datos con datos de ejemplo
yarn seed

# 6. Iniciar servidor de desarrollo (hot reload)
yarn dev

yarn install
yarn dev
