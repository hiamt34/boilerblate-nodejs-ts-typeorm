import { createConnection } from 'typeorm'
import { log } from '../logger'

const connect = async () => {
    await createConnection()
        .then(() => {
            log.info('connect DB success!')
        })
        .catch((error) => {
            log.error('connect DB false!', error)
        })
}
connect()
