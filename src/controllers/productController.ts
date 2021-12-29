import { Products } from '../database/entity/Products.entity'
import { ProductService } from '../services'
import { BaseController } from './baseController.controller'

class ProductController extends BaseController<Products> {}

export const productController = new ProductController(new ProductService())
