# Se puede observar que la imagen base es maven:3.8.3-openjdk-17, la cual contiene Maven y JDK 17.
FROM node:19-alpine

# Se establece el directorio de trabajo
WORKDIR /frontend

# Se copian los archivos del directorio "scr" al contenedor container
COPY package*.json ./

# Se ejecuta el comando "npm", ubicando el archivo package.json
RUN npm i --silent

# Se copian los archivos del directorio "scr" al contenedor container
COPY . .

# Se expone un puerto especifico del contenedor
EXPOSE 5173

# Configuración de variables de entorno
ENV VITE_BACKEND_HOST="localhost"
ENV VITE_BACKEND_PORT="8080"

# Inicio del frontend, ubicando el empaquetado
CMD ["npm", "run", "dev"]