# Chatbot-Bike

Um Chatbot utilizando as ferramentas DialogFlow, Kommunicate e a biblioteca Nodejs. 
Esse software foi produzido para ser um chatbot onde você consegue fazer login, cadastro e comprar bicicletas diretamente no chat. 

## Teste 

Você pode testar clianco aqui no [Chatbot](https://chatbot-bike.vercel.app/).

## 🚀 Começo

Estas instruções permitirão que você obtenha uma cópia de trabalho do projeto em sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:
[Git](https://git-scm.com).
[MongoDB](https://www.mongodb.com/).
[NodeJS](https://nodejs.org/en).
Também é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Pondo o Chatbot para funcionar:

```bash
# Clone o repositorio
$ git clone https://github.com/raphaeltcf/Chatbot-bike
```

### No Windows: 

```bash
# Back-End

# Acesse a pasta do projeto em terminal/cmd
$ cd Chatbot-bike

# Instale as dependencias
npm install 

# Para funcionar:
$ npm start

# Front-End
Só abrir o arquivo index.html no seu browser

# Run the app in the Browser
```

### No Linux

```bash
# Acesse a pasta do projeto em terminal/cmd
$ cd Chatbot-bike


# Instale as bibliotecas: 
$ sudo apt update
$ sudo apt install nodejs npm
$ node -v
$ npm -v
$ wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
$ echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu $(lsb_release -cs)/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
$ sudo apt update
$ sudo apt install mongodb-org
$ sudo systemctl status mongod

# Para funcionar: 
$ npm start

```

## Como ele é
![img](https://i.ibb.co/N7xD8LY/Chat1.png)
![img](https://i.ibb.co/rcXtCKm/chat-2.png)
![img](https://i.ibb.co/wKw1zw4/chat-3.png)

### ✅ Features

- [x] Integrado com o banco de dados MongoDB
- [x] Loja integrada no chatbot 
- [x] Login integrado no chatbot
- [x] Cadastro integrado no chatbot
- [x] Verificação de CEP
- [x] Calculando preços
- [x] Comunicação com Dialog e Kommunicate
- [x] Executando em um contêiner Docker
 


## 🛠️ built with
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40" height="40" />  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" width="40" height="40" />  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="40" height="40" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="40" height="40" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="40" height="40" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" width="40" height="40" /> 
