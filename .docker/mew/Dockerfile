FROM nginx:1.21

RUN apt-get update && apt-get install -y --no-install-recommends \
  curl \
  unzip \
  && rm -rf /var/lib/apt/lists/*

RUN curl -Lo mew.zip https://github.com/MyEtherWallet/MyEtherWallet/releases/download/v5.8.3/MyEtherWallet-v5.8.3.zip \
  && rm -rf /usr/share/nginx/html/* \
  && unzip mew.zip -d /usr/share/nginx/html/ \
  && rm mew.zip

CMD ["nginx", "-g", "daemon off;"]
