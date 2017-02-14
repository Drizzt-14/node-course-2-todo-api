const {MongoClient, ObjectID} = require('mongodb'); //8

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err) {
        return console.log(`Unable to connect to MongoDB server`); 
    }
    console.log(`Connected to MongoDB server`);

    /*db.collection('Todos').find({
        _id: new ObjectID('58a2c8823a3b1e2ab4e07560')
    }).toArray().then((docs) => { //1
        console.log(`Todos`);
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => { //2
        console.log(`Unable to fetch todos: ${err}`);
    }); */

     db.collection('Todos').find().count().then((count) => { //3
        console.log(`Todos Count: ${count}`);
    }, (err) => {
        console.log(`Unable to fetch todos: ${err}`);
    }); 
    
     db.collection('Users').find({name:'Drizzt'}).count().then((count) => { 
        console.log(`Drizzt Count: ${count}`);
    }, (err) => {
        console.log(`Unable to fetch todos: ${err}`);
    }); 

    db.collection('Users').find({name:'Drizzt'}).toArray().then((docs) => { 
        console.log(`Here are the Drizzts: ${JSON.stringify(docs, undefined, 2)}`);
    }, (err) => {
        console.log(`Unable to fetch todos: ${err}`);
    }); 
    
    db.close(); 
}); 






/*
1 - Look into the collection Todos, using find, put a cursor poiting at the beginning of the collection and then, using toArray()
    convert the collection to a JS array. Important: toArray() return a promise so we can use then method on it.
    Skeleton structure: db.collection('Todos').find().toArray().then((docs) => {}, (err) => {});
    If the query was successful than docs will contain the DB, so we define a callback for the fulfilled promise.
    We should also create an error to throw incase we get an empty result
    If the promise gets rejected than docs will be null and err wil be set to the error thrown so we log it
    IMPORTANT: We cannot query for a specific object ID by passing it's string value to the query, this is why we need to use the ObjectID cons. func
    we've imported previously. Object ID, as expected, is not a string.
2 - In case of an error, when the Promise gets rejected, log a message to the console with along with the associated error information
3 - We can also use count with it's promise behaviour, although in the documentations they use callback
*/
