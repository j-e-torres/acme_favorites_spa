const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL, {
    dialect: false,
    logging: false
});

const User = db.define('user', {
    name: {
        type: Sequelize.STRING
    }
})

const Thing = db.define('thing', {
    name: {
        type: Sequelize.STRING
    }
})

const Favorite = db.define('favorite', {
    rank: {
        type: Sequelize.INTEGER
    }
})

Favorite.belongsTo(User);
Favorite.belongsTo(Thing);

User.hasMany(Favorite);
Thing.hasMany(Favorite);

const usernames = ['moe', 'larry', 'curly', 'shep'];
const things = ['foo', 'bar', 'bazz', 'quq', 'quip'];

const syncAndSeed = () => {
    return db.sync({ force: true })
    .then(() => {
        return Promise.all([
        Promise.all(
            usernames.map( name => User.create({ name }))
        )
        .then( items => items.reduce((acc, item)=> {
            acc[item.name] = item;
            return acc;
        }, {}))
        ,
        Promise.all(
            things.map( name => Thing.create({ name }))
        )
        .then( items => items.reduce((acc, item) => {
            acc[item.name] = item;
            return acc;
        }, {}))

        ]);
    })
    .then(([userMap, thingMap]) => {
        return Promise.all([
        Favorite.create({ userId: userMap.moe.id, thingId: thingMap.foo.id, rank: 7}),
        Favorite.create({ userId: userMap.moe.id, thingId: thingMap.bar.id, rank: 5}),
        Favorite.create({ userId: userMap.moe.id, thingId: thingMap.bazz.id, rank: 1}),
        Favorite.create({ userId: userMap.larry.id, thingId: thingMap.bazz.id, rank: 2},
        Favorite.create({ userId: userMap.larry.id, thingId: thingMap.bar.id, rank: 1}))
        ]);
    });
};

module.exports = {
    syncAndSeed, User, Thing, Favorite
}
