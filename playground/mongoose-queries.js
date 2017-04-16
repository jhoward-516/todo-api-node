const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*let id = '58f38a861cfff4281a45984b11';

if (!ObjectID.isValid(id)) {
    console.log('ID is not valid');
}*/

/*Todo.find({
    _id: id
}).then( (todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then( (todo) => {
    console.log('Todo', todo);
});*/

/*Todo.findById(id).then( (todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo by Id', todo);
}).catch( (e) => console.log(e) );*/

let userID = '58f2780df85d76481f4397ca';

User.findById(userID).then( (user) => {
    if (!user) {
        return console.log('User ID not found');
    }
    console.log('User by ID', user);
}).catch( (e) => console.log(e) );