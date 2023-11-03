let express = require("express");
let PORT = 8002;

let app = express();
app.use(express.json()); //this is what allows to parse json in the request body

let routes = require("./routes");
app.use(routes);





app.listen(PORT, function(){
    console.log("Application started on port", PORT);
    
});

