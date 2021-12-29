import { Router } from 'express'
import { productController } from '../../controllers/productController'
import { catchAsync } from '../../hander/handleError'
import app from '../../server'

const router = Router()

export const testRouter = () => {
    app.use('/test', router)

    router.get('/', catchAsync(productController.reads))
    router.get('/:id', catchAsync(productController.destroy))
    // router.get('/:id', catchAsync(productController.read))
}
