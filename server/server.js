const db = require('./db')
const app = require('./index');
const PORT = process.env.PORT || 4000;

db.syncAndSeed()
    .then(() => app.listen(PORT, () => {
        console.log('synced and seed')
        console.log('listening to port', PORT)
    }))
