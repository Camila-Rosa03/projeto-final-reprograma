import express from 'express';
import mongoose from 'mongoose';
import routes from './routes.js';

class App{

  constructor(){
    this.server = express();

    mongoose.set("strictQuery", true);
    mongoose.connect('mongodb://admin:704268@ac-4w7mdnu-shard-00-00.ptc9eji.mongodb.net:27017,ac-4w7mdnu-shard-00-01.ptc9eji.mongodb.net:27017,ac-4w7mdnu-shard-00-02.ptc9eji.mongodb.net:27017/?ssl=true&replicaSet=atlas-yhw958-shard-0&authSource=admin&retryWrites=true&w=majority'),{
      useNewUrlParser: true,
      useUnifiedTopology:true,
      useCreateIndex: true
           }

    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.server.use(express.json());
  }

  routes(){
    this.server.use(routes);
  }

}

export default new App().server;
