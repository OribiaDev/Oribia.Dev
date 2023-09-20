FROM nginx:1.25.2
COPY build /usr/share/nginx/html
COPY DockerExtras /etc/nginx

# documentation
# expose 80

CMD ["nginx", "-g", "daemon off;"]