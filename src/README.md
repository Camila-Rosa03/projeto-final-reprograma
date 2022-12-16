

Olá, meu nome é Camila
Tenho 26 anos, moro em São Paulo-SP, sou formada em Gestão financeira e no momento estou em transição de carreira, cursando desenvolvimento back-end na [{reprograma}](https://reprograma.com.br/) - Todas em Tech. Abaixo falarei mais sobre o projeto!
```

 Sobre o projeto: Imobiliaria Comuna
 
```
 Comuna surgiu da necessidade em encontrar casas para alugar nas favelas que possuem em meu bairro. O intuito da plataforma é atuar com o público classe C/D, e dar voz e acesso e valorizar o morador da comunidade.
 
 Mas como acontece a divulgação dos imóveis localizados nessas áreas de grande densidade urbana?

 Nas comunidades ainda é forte o anúncio de imóveis nos postes de luz e vias públicas. Quem tem interesse em alugar ou vender, cola um papel pela vizinhança e aguarda o contato de interessados.

Muito se fala no mercado imobiliário sobre a necessidade de inovação. Bem, aqui está uma oportunidade para dar uma olhada em um público pouco atendido, mas muito promissor: tanto em termos de volume de pessoas quanto de renda circulante. Um fato importante nem todos os imóveis nas favelas são não regularizados; moradores de diversas comunidades do país têm a escritura de suas casas.
 

```
📋 Dados para Collection
_id: autogerado 
description: String,
price:Number,
location: String,
status: Boolean,
user: autogerado

```
```
🛣️ Rotas
GET/	Acesso a todas as casas
POST/ Cadastro de uma nova casa
PATCH/atualizar/:id	Alteração de dados da casa
DELETE/remover/:id	Exclusão da casa no banco de dados
```
```
🛠️ Tecnologias e pacotes utilizados
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
  📁 PROJETO-LIVRE-ESPORTE-NA-REDE
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
  |    |- 📁 routes  
  |         |- 📄 index.js   
  |         |- 📄 projetosRoutes.js 
  |         |- 📄 usuariosRoutes.js 
  |
  |    |- 📄 app.js 
  |    |- 📄 README.md  
  |    |- 📄 routes.js 
  |    |- 📄 server.js
  |
  |- 📄 .gitignore  
  |- 📄 package-lock.json  
  |- 📄 package.json 
  |- 📄 vercel.json  

Futuras implementações:

