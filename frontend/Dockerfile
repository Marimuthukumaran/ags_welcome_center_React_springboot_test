
# ===== Build stage =====
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build

# ===== Run stage (Nginx static + reverse proxy) =====
FROM nginx:alpine
# Replace default server with our config (serves React and proxies /api/* to backend)
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
