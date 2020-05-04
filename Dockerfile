FROM centos:7
LABEL maintainer "Nozomi Aoyama <jgs.kuee@gmail.com>"
COPY ./nginx/nginx.repo /etc/yum.repos.d/nginx.repo
RUN yum install -y nginx
CMD ["nginx", "-g", "daemon off;"]