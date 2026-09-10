FROM nginx:1.31.5-alpine

# Copy build to production folder on nginx
COPY dist /usr/share/nginx/html

# Copy config from extras to nginx config to make 404 page work
COPY DockerExtras /etc/nginx/conf.d

# Installs VIM (optional)
#RUN apt-get update && apt-get install apt-file -y && apt-file update && apt-get install vim -y

CMD ["nginx", "-g", "daemon off;"] 