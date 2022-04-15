import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivrosModule } from './livros/books.module';

@Module({
  imports: [LivrosModule, MongooseModule.forRoot('mongodb://localhost:27017/library')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
