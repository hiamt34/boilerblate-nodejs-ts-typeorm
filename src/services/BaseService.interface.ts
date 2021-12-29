import { DeleteResult } from 'typeorm'

/* eslint-disable no-unused-vars */
export interface IBaseService<T> {
    getAll(): Promise<T[]>
    getById(query: any): Promise<T | null>
    create(data: any): Promise<T[]>
    update(query: any, update: any): Promise<T | null>
    destroy(query: any): Promise<DeleteResult>
}
