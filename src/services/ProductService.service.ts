import { DeleteResult } from 'typeorm'
import { Products } from '../database/entity/Products.entity'
import { IBaseService } from './BaseService.interface'

export class ProductService implements IBaseService<Products> {
    public getAll = async (): Promise<Products[]> => {
        try {
            return Products.find()
        } catch (error: any) {
            throw new Error(error)
        }
    }

    public getById = async (query: any): Promise<Products | null> => {
        try {
            return Products.findOne(query)
        } catch (error: any) {
            throw new Error()
        }
    }

    public create = async (data: any): Promise<Products[]> => {
        try {
            return Products.create(data)
        } catch (error: any) {
            throw new Error(error)
        }
    }

    public update = async (
        query: any,
        update: any
    ): Promise<Products | null> => {
        try {
            const product: Products | null = await Products.findOne(query)
            if (!product) {
                return product
            }

            Object.assign(product, update)
            await product.save()

            return product
        } catch (error: any) {
            throw new Error(error)
        }
    }

    public destroy = async (query: any): Promise<DeleteResult> => {
        try {
            return Products.delete(query)
        } catch (error: any) {
            throw new Error(error)
        }
    }
}
