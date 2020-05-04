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
sudo pip3.6 install flask uwsgi flask_restful gensim flask_cors mecab-python3 scipy statistics flask_sqlalchemy
sudo rpm -ivh http://packages.groonga.org/centos/groonga-release-1.1.0-1.noarch.rpm
sudo yum makecache
sudo yum -y install mecab mecab-ipadic
sudo yum -y install mecab-devel

-------------------確定------------------

sudo yum install -y git
sudo pip3.6 install uwsgi numpy
sudo yum install -y gcc gcc-c++ make git openssl-devel　bzip2-devel zlib-devel readline-devel sqlite-devel patch
sudo yum install -y blas-devel lapack-devel atlas-devel
sudo pip3.6 install scipy matplotlib ipython pandas sympy nodes
sudo pip3.6 install pydot sphinx
sudo pip3.6 install --upgrade gensim

mkdir -p ~/source/mecab
cd ~/source/mecab
wget 'https://drive.google.com/uc?export=download&id=0B4y35FiV1wh7cENtOXlicTFaRUE' -O mecab-0.996.tar.gz
tar zxvf mecab-0.996.tar.gz
cd mecab-0.996
./configure --prefix=/opt/mecab --with-charset=utf8 --enable-utf8-only
make
sudo make install
echo "export PATH=/opt/mecab/bin:\$PATH" >> ~/.bashrc
source ~/.bashrc
mecab-config --libs-only-L | sudo tee /etc/ld.so.conf.d/mecab.conf
sudo ldconfig

mkdir ~/source/mecab-ipadic
cd ~/source/mecab-ipadic
wget 'https://drive.google.com/uc?export=download&id=0B4y35FiV1wh7MWVlSDBCSXZMTXM' -O mecab-ipadic-2.7.0-20070801.tar.gz
tar zxvf mecab-ipadic-2.7.0-20070801.tar.gz
cd mecab-ipadic-2.7.0-20070801

cd ~/source
git clone --depth 1 https://github.com/neologd/mecab-ipadic-neologd.git
sudo pip3.6 install mecab-
sudo yum install -y swig
<!-- model.vecの送信が問題 情報オチ？-->

sudo firewall-cmd --add-service=http --permanent
sudo firewall-cmd --reload
sudo mkdir /nginx
cd ~
sudo mv movie_reccomend/nginx.repo /nginx/nginx.repo

sudo yum install -y yum-utils device-mapper-persistent-data lvm2
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo yum makecache fast
sudo yum install -y docker-ce
sudo systemctl enable docker
sudo systemctl start docker
sudo usermod -aG docker $USER

cd ~/movie_recommend
sudo docker build -t centos-nginx:1.0 .
sudo cp /nginx/nginx.repo /etc/yum.repos.d/nginx.repo
