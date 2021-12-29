import fs from 'fs'
import pinoms from 'pino-multi-stream'

export const log = pinoms({
    streams: [
        { stream: fs.createWriteStream('./tmp/info.stream.out') },
        {
            level: 'fatal',
            stream: fs.createWriteStream('./tmp/fatal.stream.out'),
        },
        {
            level: 'error',
            stream: fs.createWriteStream('./tmp/error.stream.out'),
        },
    ],
})
