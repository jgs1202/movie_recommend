sudo yum update
sudo localectl set-locale LANG=en_US.UTF-8
sudo yum install -y epel-release gcc libgcc tk-devel
sudo yum install -y https://centos7.iuscommunity.org/ius-release.rpm
sudo yum install -y zlib-devel
sudo yum install -y libffi-devel
sudo yum install -y wget
sudo yum install -y openssl-devel
sudo yum install -y postgresql-devel
sudo yum install -y sqlite-devel
sudo yum install python36u python36u-libs python36u-devel python36u-pip.noarch
sudo ln -s /usr/bin/pip3.6 /usr/local/bin/pip
sudo pip3.6 install --upgrade setuptools
sudo pip3.6 install flask uwsgi flask_restful gensim flask_cors mecab-python3 scipy statistics
sudo rpm -ivh http://packages.groonga.org/centos/groonga-release-1.1.0-1.noarch.rpm
sudo yum makecache
sudo yum -y install mecab mecab-ipadic
sudo yum -y install mecab-devel
sudo pip3.6 install mecab-python3

-------------------確定------------------

sudo yum install -y git