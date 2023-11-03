let db = [];

let idCounter = 1001;
/**
 * 
 3 ways to pass info from client to backend
 query parameter
 path parameter
 request body
 */
//how do we want to respond to a request to add an item to our todo list
let  addItem = function(req, res){

// get the item info from the request: label, notes
// generate: id, done

    let item = {
        done: false,
        label: req.body.label,
        notes: req.body.notes,
        id: idCounter
    };
    idCounter++;
    
    db.push(item);

    //204 is "everything is ok but I dont have anything to send back"
    res.json(item);
};

let  deleteItem = function(req, res){
    let id = req.params.id;

    for(let i=0; i<db.length; i++){
        let item = db[i];
        if(id == item.id){
            foundIndex = i;
        }
    }
    let deletedItem;
    if(foundIndex >=0){
        db.splice(foundIndex, 1);
    }
    res.json(deletedItem);
};

let  listItems = function(req, res){
    let copyArray = []

    for(let i=0; i<db.length; i++){
        let item = db[i];
        let copyItem = {
            done: item.done,
            label: item.label,
            id:  item.id
        };
    }
      res.json(copyArray);
}

let  getItem = function(req, res){

    let id = req.params.id;

    let foundItem;
    for(let i=0;i<db.length; i++){
        if(id == db[i].id){
            foundItem = db[i];
        }
    }
    res.json(foundItem);
};

let  updateItem = function(req, res){
    let id = req.params.id;
    let label = req.body.label;
    let notes = req.body.notes;
    let done = req.body.done;

if(done == true){
    done = true;
} else {
done = false;
}
let foundItem;
for(let i=0; i<db.length;i++){
    let item = db[i];
    if(id == item.id){
        item.done = done
        item.label = label;
        item.notes = notes;
        foundItem = item;
    }
    res.json(foundItem);
}
};

module.exports = {
    addItem, 
    deleteItem,
    listItems,
    getItem,
    updateItem
}