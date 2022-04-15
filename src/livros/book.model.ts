import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type BookDocument = Book & Document

@Schema()
export class Book {

    @Prop()
    code: string;

    @Prop()
    name: string;

    @Prop()
    price: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);