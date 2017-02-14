const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err) {
        return console.log(`Unable to connect to MongoDB server`); 
    }
    console.log(`Connected to MongoDB server`);

    /*
    db.collection('Todos').deleteMany({ text: 'East lunch' }).then((result) => {
        console.log(result);
    }, (err) => { });
    */

    /*
    db.collection('Todos').deleteOne({ text: 'East lunch' }).then((result) => {
        console.log(result);
    }, (err) => { });
    */

    /*
    db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
        console.log(result);
    }, (err) => { });
    */

    db.collection('Users').deleteMany({ age: 257 }).then((result) => {
        console.log(`The deleteMany result is: ${result}`);
    }, (err) => { });

    db.collection('Users')
        .findOneAndDelete({
            _id: new ObjectID("58a3137a61f867db2221c327")
        })
        .then((result) => {
            console.log(`The deleted item from findOneAndDelete is: ${JSON.stringify(result, undefined, 2)}`);
        }, (err) => { });


    db.close(); 
}); 






/*
1 - delete all files with text property of "Eat lunch", apply this as a promise using then
    skeletal sturc: db.collection(collectionName).deleteMany({Query}).then((result) => { }, (err) => { });
*/
