# Build de contexto: la raíz del repo.
# docker build -f Dockerfile .

FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build

# Sitio 100% estático: nginx solo sirve los archivos ya compilados,
# no hace falta Node en producción.
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
