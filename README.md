

##### Olá, sou a Camila! Mulher negra, mãe de Milena, nascida e crescida na periferia de São Paulo-SP, sou formada em Gestão financeira e no momento estou em transição de carreira, cursando desenvolvimento back-end na [{reprograma}](https://reprograma.com.br/) - Todas em Tech. Abaixo falarei mais sobre o projeto!



 # Sobre o projeto: Imobiliária Comuna 🏘️
 

 Nas comunidades ainda é forte o anúncio de imóveis nos postes de luz e vias públicas. Quem tem interesse em alugar ou vender, cola um papel pela vizinhança e aguarda o contato de interessados.

 Comuna surgiu da necessidade em encontrar casas para alugar nas favelas que possuem em meu bairro. O intuito dessa aplicação é atuar com o público classe C/D para venda e locação de imóveis, dar voz, acesso e valorizar o morador da comunidade.

Inicialmente seria focado nas principais comunidades de São Paulo, e futuramente para os demais estados do país.

Muito se fala no mercado imobiliário sobre a necessidade de inovação. A imobiliária Comuna é a oportunidade para dar uma olhada em um público pouco atendido, mas muito promissor: tanto em termos de volume de pessoas quanto de renda circulante.

 

```
📋 Dados para Collection:

_id: autogerado 
description: String,
price:Number,
location: String,
status: Boolean,
user: autogerado

🛣️ Rotas :

GET/	Acesso a todas as casas
POST/ Cadastro de uma nova casa
PATCH/atualizar/:id Alteração de dados da casa
DELETE/remover/:id	Exclusão da casa no banco de dados


🛠️ Tecnologias e pacotes utilizados:

JavaScript
Node.js
Git
MongoDB
Insomnia
Vercel
express
nodemon
mongoose


📁 Arquitetura
  | 
  |-  📁 node_modules 
  |-  📁 src 
  |    |- 📁 controllers  
  |         |- 📄 HouseController.js   
  |         |- 📄 SessionController.js
  |  
  |    |- 📁 models 
  |         |- 📄 House.js 
  |         |- 📄 User.js 
  |   
  |
  |    |- 📄 app.js 
  |    |- 📄 routes.js 
  |    |- 📄 server.js
  |
  |- 📄 .gitignore  
  |- 📄 package-lock.json  
  |- 📄 package.json 
  |- 📄 README.md 
  |- 📄 vercel.json  

⚙️ Futuras implementações:

Desenvolver o Front-End
incluir autenticação e testes
Adicionar uma parte que faça conexão do locador com o locatário

```
- [LinkedIn](https://www.linkedin.com/in/camilarosadossantos/) 
