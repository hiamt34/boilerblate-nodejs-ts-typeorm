import 'reflect-metadata'
import express from 'express'
import helmet from 'helmet'
import './database'
import cors from 'cors'
import { limiter } from './middleware/rateLimiter.middleware'
import { routers } from './routers'
import { log } from './logger'
import { ApiError } from './hander/apiError'
import httpStatus from 'http-status'
import os from 'os'

const PORT: number = (process.env.PORT as unknown as number) || 3000
const HOST: string = process.env.HOST || '0.0.0.0'
const IS_PRODUCTION = Boolean(process.env.IS_PRODUCTION) || false
const allowedOrigins = ['http://localhost:3000']

const options: cors.CorsOptions = {
    origin: allowedOrigins,
}

const app = express()
app.use(helmet())
app.use(cors(options))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

if (IS_PRODUCTION) {
    app.use('/', limiter)
    process.env.UV_THREADPOOL_SIZE = os.cpus().length as unknown as string
}

app.listen(PORT, HOST, () => {
    log.info(`Server listing on ${PORT}`)

    routers()

    app.use(
        (_req, res) =>
            new ApiError(httpStatus['NOT_FOUND'], httpStatus['404'], res)
    )
})

export default app
