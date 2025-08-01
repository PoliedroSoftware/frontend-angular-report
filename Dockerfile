###############################
# Etapa de build
FROM node:18 AS builder
WORKDIR /app

# Copiar solo los archivos necesarios para instalar dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install -f

# Copiar el resto de los archivos del proyecto
COPY . .

# Construir la aplicación
RUN npm run build

###############################
# Etapa de producción
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/client/browser /usr/share/nginx/html


