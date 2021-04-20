const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

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
        age: '25'
    }).then((result) => {
        console.log(result.ops)
    })

    // insert multiple documents into 'user collection'
    const users = [
        {
            name: 'Md. Rudra',
            age: 24
        }, {
            name: 'Md. Mahedi',
            age: 25
        }
    ]
    db.collection('user').insertMany(
        users
    ).then((result) => {
        console.log(result.ops)
    })

    /*---------------------------------------------------------------
    |                         READ-OPERATIONS                       |
    ---------------------------------------------------------------*/



}).catch((error) => {
    console.log('error', error)
})
