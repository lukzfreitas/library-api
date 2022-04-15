import { Model } from 'mongoose';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Book, BookDocument } from './book.model';

@Injectable()
export class BooksService {

    constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) { }


    findAll(): Promise<Book[]> {
        return this.bookModel.find().exec();
    }

    findByCode(code: string): Promise<Book> {
        return this.bookModel.findOne({ code: code }).exec();
    }

    async create(book: Book): Promise<Book> {        
        return new this.bookModel(book).save();
    }

    async update(book: Book): Promise<Book> {
        return this.bookModel.findOneAndUpdate({ code: book.code }, book, { new: true }).exec();
    }

    delete(code: string): void {
        this.bookModel.findOneAndDelete({code: code}).exec();
    }
}