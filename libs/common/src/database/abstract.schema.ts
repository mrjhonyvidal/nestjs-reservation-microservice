import { Prop, Schema } from "@nestjs/mongoose";
import { SchemaTypes } from "mongoose";

/**
 * Abstract Document
 * @description Abstract common document extended by all other microservices
 */
@Schema()
export class AbstractDocument {
    @Prop({ type: SchemaTypes.ObjectId })
    _id: string;
}