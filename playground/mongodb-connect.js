const {MongoClient, ObjectID} = require('mongodb'); //8

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{ //1
    if(err) {
        return console.log(`Unable to connect to MongoDB server`); //2
    }
    console.log(`Connected to MongoDB server`);

    /*db.collection('Todos').insertOne({ //4
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if (err) {//5
            return console.log(`Failed to insert the document`, err); 
        }
        console.log(JSON.stringify(result.ops, undefined, 2)); //6
   });*/

/*   db.collection('Users').insertOne({
       name: 'Drizzt',
       age: 257,
       location: 'Neverwinter'
   }, (err, result) => {
       if (err) {
        return console.log('Failed to insert user', err);
       }
       console.log(result.ops[0]._id.getTimestamp());
    });
*/

    db.close(); //3
}); 

//7 - Object Destructuring Example
/*var user = {name: "Cattie-Brie", age: 30}; 
var {name} = user;
var {age} = user;
console.log(name, age);
*/

//9
/*var obj = new ObjectID();
console.log(obj);
*/


/*
1 - Take 2 args -> The first arg is a string that represents the url where our DB lives. In this case we connect to the locahost and look for the TodoApp DB 
    We do not need to create the TodoApp DB, mongodb does this for us when it finds out that a call to the a non-existant db has been made
    The second arg is a callback that will run after the connection succeed/failed. If the connection is successful than pass the DB into db, otherwise err
2 - We need to use the return statement because it stops the function from continuing. So if an error occured the function breaks here. Just console.log the err
    means that we can continue the code that rests INSIDE the func. Use return it can replace the else stetment and mopre erwadable.
3 - This closes the connection to the MongoDB server
4 - The basic structure is: db.collection('collectionName').insertOne({document}, (errFirstCallback)=>{callbackBehaviour}); or simply put: db.collection().insertOne({}, ()=>{});
    We added some basic info to the collection
5 - Starting with the error, we return (to break the func process) a message to inform the process failed and attaching the err itself to clarify
6 - Pretty printing the success message
7 - Obejct destructuring (ES6): Create new variables from an object property. Here we create an object with name and age properties, we can create a new    
    variable with just the name property value on it by using ES6 object destructuring:   {properyName} = object; This takes the property name from the 
    object and turns it into a var with the same name of the property name (name) and insert it's value.
    Using object destructuring allows us to use more functionality on the value we pull from the objects
8 - Using object destructurin on the MongoClient. It is similar to: const MongoClient = require('mongodb').MongoClient; 
    We set up a var that has the same name of the required object - MongoClient, setting it's value to the var value
    ObjectIF constructor function lets us create new object IDs one the fly to uniquely identify things
9 - Example of how to create object IDs

*/

/*
console.log();
*/