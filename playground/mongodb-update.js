const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err) {
        return console.log(`Unable to connect to MongoDB server`); 
    }
    console.log(`Connected to MongoDB server`);

    /*
    db.collection('Todos')
        .findOneAndUpdate({ //1
            _id: new ObjectID("58a3109161f867db2221c24e") //2
        }, {
            $set: {completed: true} //3
        }, {
            returnOriginal: false   //4
        })
        .then((result) => {
            console.log(result);
    }, (err) => { });
    */

    db.collection('Users')
        .findOneAndUpdate({
            name: "Cattie - Brie"
        }, {
            $set: {name: 'Wulfgar'},
            $inc: {age: +5}
        }, {
            returnOriginial: false
        })
        .then((result) => {
        console.log(result);
    }, (err) => { });

    db.close(); 
}); 






/*
1 - Update and return the updated item. Skeletal form:
    db.collection(collectionName).findOneAndUpdate(filter, updateOperations, options, callback).then(()=>{}, ()=>{});
2 - This is the filter -> which item from the collection we want to update. In this case an item with a specfic ID
3 - In update we cannot just use comparisons, we need to specify update operation, preceeded by $
    In this case we want to $set the value of completed key to true
4 - We'd like to get the updated version of the item. Thye default is the old one so we set in this options arg to false
*/
