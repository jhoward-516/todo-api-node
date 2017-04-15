const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to MongoDB server...');
    }
    console.log('connected to MongoDB server');

    // deleteMany
/*    db.collection('Todos').deleteMany({text:'test'}).then( (result) => {
        console.log(result);
    });*/

    //deleteOne
/*    db.collection("Todos").deleteOne({text: "test delete one"}).then( (result) => {
        console.log(result);
    });*/


    //findOneAndDelete
/*    db.collection('Todos').findOneAndDelete({completed: false}).then( (result) =>{
        console.log(result);
    });*/
    
    // challenges
/*    db.collection('Users').deleteMany({name: 'John'}).then( (result) => {
        console.log(result);
    });
*/
    db.collection('Users').findOneAndDelete({_id: new ObjectID('58f24740ebdb3d8863400e92')}).then( (result) => {
        console.log(result);
    });

    // db.close();
});