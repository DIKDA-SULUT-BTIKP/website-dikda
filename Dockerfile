# Menggunakan base image Node.js versi 14
FROM node:18

# Menentukan working directory untuk container
WORKDIR /app

# Menyalin seluruh source code ke working directory di container
COPY . .

# Menginstal dependencies untuk production dan kemudian build aplikasi
RUN npm install --production --unsafe-perm && npm run build

# Ekspos port yang digunakan oleh aplikasi (8080)
EXPOSE 5000

# Saat container diluncurkan, jalankan server dengan perintah npm start
CMD ["npm", "start"]
