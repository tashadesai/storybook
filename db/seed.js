'use strict'

const db = require('APP/db')
    , {User, Thing, Favorite, Promise, Render} = db
    , {mapValues} = require('lodash')

function seedEverything() {
  const seeded = {
    renders: renders()
  }

  seeded.favorites = favorites(seeded)

  return Promise.props(seeded)
}

const renders = seed(Render, {
  boy: {
    name: 'boy',
    image: 'http://i.imgur.com/3NOvG4t.png'
  },
  girl: {
    name: 'girl',
    image: 'http://i.imgur.com/EsO3iMd.jpg'
  },
  man: {
    name: 'man',
    image: 'http://i.imgur.com/xIOvGWa.png'
  },
  woman: {
    name: 'woman',
    image: 'http://i.imgur.com/XOqM5AE.png'
  },
  omri: {
    name: 'Omri',
    color: 'pink',
    material: 'acetate',
    price: 21000,
    description: `You'll look totally heroic in these specs.`,
    image: 'http://i.imgur.com/u9I91HD.png',
    quantity: 31,
    season_id: 2
  },
  john: {
    name: 'John',
    color: 'red',
    material: 'acetate',
    price: 10000,
    description: `You'll look totally British in these specs.`,
    image: 'http://i.imgur.com/dHxKtyq.png',
    quantity: 84,
    season_id: 2
  },
  sam: {
    name: 'Sam',
    color: 'multi',
    material: 'acetate',
    price: 26000,
    description: `You'll look totally spiffy in these specs.`,
    image: 'http://i.imgur.com/kNe7EV8.png',
    quantity: 12,
    season_id: 3
  },
  ian: {
    name: 'Ian',
    color: 'gold',
    material: 'metal',
    price: 16500,
    description: `You'll look totally fresh in these specs.`,
    image: 'http://i.imgur.com/tcvgy5p.png',
    quantity: 31,
    season_id: 3
  },
  lisa: {
    name: 'Lisa',
    color: 'brown',
    material: 'mixed',
    price: 12500,
    description: `You'll look totally retro in these specs.`,
    image: 'http://i.imgur.com/Icvi1y4.png',
    quantity: 106,
    season_id: 3
  },
  yoonah: {
    name: 'Yoo-Nah',
    color: 'brown',
    material: 'acetate',
    price: 19500,
    description: `You'll look totally Harry-Potter-ish in these specs.`,
    image: 'http://i.imgur.com/MQ2Tv9C.png',
    quantity: 8,
    season_id: 4
  },
  robbyn: {
    name: 'Robbyn',
    color: 'blue',
    material: 'acetate',
    price: 23500,
    description: `You'll look totally smart in these specs.`,
    image: 'http://i.imgur.com/GVwBDLx.png',
    quantity: 76,
    season_id: 4
  },
  damon: {
    name: 'Damon',
    color: 'multi',
    material: 'mixed',
    price: 20500,
    description: `You'll look totally vogue in these specs.`,
    image: 'http://i.imgur.com/NHnYUPc.png',
    quantity: 49,
    season_id: 4
  }
})


const favorites = seed(Favorite,
  // We're specifying a function here, rather than just a rows object.
  // Using a function lets us receive the previously-seeded rows (the seed
  // function does this wiring for us).
  //
  // This lets us reference previously-created rows in order to create the join
  // rows. We can reference them by the names we used above (which is why we used
  // Objects above, rather than just arrays).
  ({users, things}) => ({
    // The easiest way to seed associations seems to be to just create rows
    // in the join table.
    'obama loves surfing': {
      user_id: users.barack.id,    // users.barack is an instance of the User model
                                   // that we created in the user seed above.
                                   // The seed function wires the promises so that it'll
                                   // have been created already.
      thing_id: things.surfing.id  // Same thing for things.
    },
    'god is into smiting': {
      user_id: users.god.id,
      thing_id: things.smiting.id
    },
    'obama loves puppies': {
      user_id: users.barack.id,
      thing_id: things.puppies.id
    },
    'god loves puppies': {
      user_id: users.god.id,
      thing_id: things.puppies.id
    },
  })
)

if (module === require.main) {
  db.didSync
    .then(() => db.sync({force: true}))
    .then(seedEverything)
    .finally(() => process.exit(0))
}

class BadRow extends Error {
  constructor(key, row, error) {
    super(error)
    this.cause = error
    this.row = row
    this.key = key
  }

  toString() {
    return `[${this.key}] ${this.cause} while creating ${JSON.stringify(this.row, 0, 2)}`
  }
}

// seed(Model: Sequelize.Model, rows: Function|Object) ->
//   (others?: {...Function|Object}) -> Promise<Seeded>
//
// Takes a model and either an Object describing rows to insert,
// or a function that when called, returns rows to insert. returns
// a function that will seed the DB when called and resolve with
// a Promise of the object of all seeded rows.
//
// The function form can be used to initialize rows that reference
// other models.
function seed(Model, rows) {
  return (others={}) => {
    if (typeof rows === 'function') {
      rows = Promise.props(
        mapValues(others,
          other =>
            // Is other a function? If so, call it. Otherwise, leave it alone.
            typeof other === 'function' ? other() : other)
      ).then(rows)
    }

    return Promise.resolve(rows)
      .then(rows => Promise.props(
        Object.keys(rows)
          .map(key => {
            const row = rows[key]
            return {
              key,
              value: Promise.props(row)
                .then(row => Model.create(row)
                  .catch(error => { throw new BadRow(key, row, error) })
                )
            }
          }).reduce(
            (all, one) => Object.assign({}, all, {[one.key]: one.value}),
            {}
          )
        )
      )
      .then(seeded => {
        console.log(`Seeded ${Object.keys(seeded).length} ${Model.name} OK`)
        return seeded
      }).catch(error => {
        console.error(`Error seeding ${Model.name}: ${error} \n${error.stack}`)
      })
  }
}

module.exports = Object.assign(seed, {users, things, favorites})
