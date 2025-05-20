# Fase 1: Construcción de la aplicación Angular usando la configuración de producción
FROM node:latest as build

WORKDIR /app

COPY package*.json ./
# ejecutar una instalación limpia de las dependencias
RUN npm ci
# instalar Angular CLI global
RUN npm install -g @angular/cli

COPY . .
RUN npm run build --configuration=production

# Fase 2: Servir la aplicación con Nginx 
FROM nginx:latest

# copiar el archivo de configuracion de nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copiar el build de angular en nginx
COPY --from=build /app/dist/angular-app/browser /usr/share/nginx/html

# Exponer puerto 80 (Nginx lo usa por defecto)
EXPOSE 80