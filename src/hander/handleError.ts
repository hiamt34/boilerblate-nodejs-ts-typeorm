import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import { log } from '../logger'
import { ApiError } from './apiError'

export const catchAsync =
    (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next))
            .then((data) => {
                log.info(`[${req.ip}, ${req.method}, ${req.path}]`)
                return res.json({
                    code: httpStatus.OK,
                    status: true,
                    data,
                })
            })
            .catch((err) => {
                new ApiError(httpStatus['BAD_REQUEST'], err.message, res)
            })
    }
