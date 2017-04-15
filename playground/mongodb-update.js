const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to MongoDB server...');
    }
    console.log('connected to MongoDB server');

/*    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('58f25a97ebdb3d88634013af')
    }, { 
        $set: {
            completed: true
        }

    }, {
        returnOriginal: false

    }).then( (result) => {
        console.log(result);
    });*/

    db.collection('Users').findOneAndUpdate(
        { _id: new ObjectID('58f24022d5dfe039d40cd1ef') }, 
        { $set: { name: 'John' }, $inc: { age: 1 } },
        { returnOriginal: false }
    ).then( (result) => {
        console.log(result);
    });

    // db.close();
});