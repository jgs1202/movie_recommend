FROM centos:7
LABEL maintainer "Nozomi Aoyama <jgs.kuee@gmail.com>"
RUN yum install -y nginx
CMD ["nginx", "-g", "daemon off;"]