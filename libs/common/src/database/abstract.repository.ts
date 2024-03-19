import { Model } from "mongoose";
import { AbstractDocument } from "./abstract.schema";
import { Logger } from "@nestjs/common";

/**
 * Abstract common repository extended by all other microservices
 * With CRUD operations: create, read, update, delete from our database
 */
export abstract class AbstractRepository<TDocument extends AbstractDocument> {
    protected abstract readonly logger: Logger;

    constructor(protected readonly model: Model<TDocument>) {}

    async create(document: Omit<TDocument, '_id'>): Promise<TDocument> {
        const createDocument = new this.model({
            ...document,
            _id: new Types.ObjectId(),
        });
        return (await createDocument.save()).toJSON() as unknown as TDocument;
    }
}