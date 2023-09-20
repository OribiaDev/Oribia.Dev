FROM nginx:1.25.2
COPY build /usr/share/nginx/html
COPY DockerExtras /etc/nginx

# Installs VIM
RUN apt-get update && apt-get install apt-file -y && apt-file update && apt-get install vim -y

# documentation
# expose 80

CMD ["nginx", "-g", "daemon off;"]