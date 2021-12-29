import { log as logDev } from './logDev'
import { log as logPro } from './logPro'
import dotenv from 'dotenv'
dotenv.config()
const IS_PRODUCTION = Boolean(process.env.IS_PRODUCTION) || false

export const log = IS_PRODUCTION ? logPro : logDev
