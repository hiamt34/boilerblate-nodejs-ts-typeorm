import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { ApiError } from '../hander/apiError'
import { IBaseService } from '../services/BaseService.interface'

export class BaseController<T> {
    public service: IBaseService<T>

    constructor(service: IBaseService<T>) {
        this.service = service
    }

    public reads = async () => {
        return this.service.getAll()
    }

    public read = async (req: Request, res: Response) => {
        const query = {
            id: req.params.id,
        }

        const data = await this.service.getById(query)

        if (!data)
            return new ApiError(httpStatus['NOT_FOUND'], 'NOT_FOUND', res)

        return data
    }

    public create = async (req: Request) => {
        return this.service.create(req.body)
    }

    public update = async (req: Request, res: Response) => {
        const query = {
            id: req.params.id,
        }

        const data = await this.service.update(query, req.body)

        if (!data)
            return new ApiError(
                httpStatus['NOT_FOUND'],
                httpStatus['404_NAME'],
                res
            )

        return data
    }

    public destroy = async (req: Request) => {
        const query = {
            id: req.params.id,
        }

        await this.service.destroy(query)

        return
    }
}
