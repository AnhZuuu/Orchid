module.exports = app => {
    const orchidController = require("../controller/orchidController");
  
    app.get("/orchids/fetchAll", orchidController.getAllOrchids);
  
    app.post("/orchids/insert", orchidController.insertNewOrchids);
  
    app.put("/orchids/update/:orchid_id", orchidController.updateOrchids);
 
    app.delete("/orchids/delete/:orchid_id", orchidController.deleteOrchids);
  };