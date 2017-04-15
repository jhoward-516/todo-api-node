const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to MongoDB server...');
    }
    console.log('connected to MongoDB server');

    /*db.collection('Todos').find({
        _id: new ObjectID('58f24302ebdb3d8863400d53')
    }).toArray().then( (docs) => {
            console.log('Todos');
            console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });*/

/*    db.collection('Todos').find().count().then( (count) => {
            console.log(`Todos Count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });*/

    db.collection('Users').find({name:'John'}).count().then( (count) => {
        console.log(`Users with name John: ${count}`);
    }, (err) => {
        console.log('unable to count records', err);
    });

        db.collection('Users').find({name:'John'}).toArray().then( (docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to fetch records', err);
    });

    // db.close();
});