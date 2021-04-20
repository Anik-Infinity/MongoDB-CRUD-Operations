const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectId = mongodb.ObjectID

const connectionURL = 'mongodb://127.0.0.1:27018'
const databaseName = 'mongodb-test'

// connect to the database
MongoClient.connect(connectionURL, { useUnifiedTopology: true }).then((client) => {

    // create(if not exist) and get the instance of the database
    const db = client.db(databaseName)

    /*---------------------------------------------------------------
    |                       INSERT-OPERATIONS                       |
    ---------------------------------------------------------------*/

    // insert single document into 'user collection'
    db.collection('user').insertOne({
        name: 'Shahidullah Anik',
        age: 25
    }).then((result) => {
        console.log(result.ops)
    })

    // insert multiple documents into 'user collection'
    const UserList = [
        {
            name: 'Md. Rudra',
            age: 24
        }, {
            name: 'Md. Mahedi',
            age: 25
        }
    ]
    db.collection('user').insertMany(UserList).then((result) => {
        console.log(result.ops)
    })

    /*---------------------------------------------------------------
    |                         READ-OPERATIONS                       |
    ---------------------------------------------------------------*/

    // read single document by id from user collection
    db.collection('user').findOne({ _id: new ObjectId("607e203ee636481aad1b5c2a") }).then((user) => {
        console.log(user)
    })

    // read multiple documents by age from user collection
    db.collection('user').find({ age: 25 }).toArray().then((users) => {
        console.log(users)
    })

    /*---------------------------------------------------------------
    |                        UPDATE-OPERATIONS                      |
    ---------------------------------------------------------------*/

    // update single document by id of user collection
    db.collection('user').updateOne({
        _id: new ObjectId("607e203ee636481aad1b5c2a")
    }, {
        $set: {
            name: 'Md. Bijoy'
        }
    }).then((result) => {
        console.log(result)
    })

    // update multiple documents by age of user collection
    db.collection('user').updateMany({
        age: 24
    }, {
        $set: {
            age: 26
        }
    }).then((result) => {
        console.log(result)
    })

    /*---------------------------------------------------------------
    |                        DELETE-OPERATIONS                      |
    ---------------------------------------------------------------*/

    // delete single document by id form user collection
    db.collection('user').deleteOne({
        _id: new ObjectId("607e203ee636481aad1b5c2a")
    }).then((result) => {
        console.log(result)
    })

    // delete multiple documents by age form user collection
    db.collection('user').deleteMany({
        age: 25
    }).then((result) => {
        console.log(result)
    })


}).catch((error) => {
    console.log('error', error)
})
