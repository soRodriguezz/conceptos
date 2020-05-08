# especificar que se descargara desde docker hub node version 12
FROM node:12 

# especificar directorio de trabajo
WORKDIR /app

# pasar todos los archivos de trabajo dentro de la carpeta
# copia todos los que empiecen por package y tengan la estension json dentro del directorio
COPY package*.json ./

# Ejecutar un comando
RUN npm install

# copiar todo el src con '.' dentro del directorio de docker
COPY . .

# ejecutar un comando, indicar nombre del comando y los parametros
CMD ["npm", "start"]