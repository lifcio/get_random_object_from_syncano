var Syncano = require("syncano");

aclKey = "API KEY WITH ACL";
className = "CLASS_NAME"; //this is a name of a class you'd like to store IDs of from
added_id = ARGS.id

var connection = Syncano({apiKey: aclKey,
                    defaults: {instanceName : META.instance, className: "id_holder"}
                }); //it sets id_holder as default class name - it's the class we will use to hold object IDs in
var DataObject = connection.DataObject;

var filter = {"class_name":{"_eq":className}}; //get object with IDs from given class

DataObject.please().list().filter(filter).then(function(res) {
    book_ids_holder = res[0]; //object with our IDs
    book_ids_holder.addUnique('ids', [added_id]); //add new ID
}).catch(function(err) {
    console.log(err); //in case of error
});
