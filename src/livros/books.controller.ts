import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Book } from "./book.model";
import { BooksService } from "./books.service";

@Controller('books')
export class BooksController {

    constructor(private booksService: BooksService) { }

    @Get()
    findAll(): Promise<Book[]> {
        return this.booksService.findAll();
    }

    @Get(':code')
    findByCode(@Param() params): Promise<Book> {
        return this.booksService.findByCode(params.codigo);
    }

    @Post()
    create(@Body() book): void {
        this.booksService.create(book);
    }

    @Put()
    update(@Body() book): Promise<Book> {
        return this.booksService.update(book);
    }

    @Delete(':id')
    delete(@Param() params): void {
        return this.booksService.delete(params.id);
    }
}