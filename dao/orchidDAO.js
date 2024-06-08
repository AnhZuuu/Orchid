const mssql = require("mssql");
const dbConfig = require("../config/db.config");
const Orchid = require("../bo/orchid");
const orchidDAO = {

findAllOrchids : () => {
  return new Promise((resolve, reject) => {
    mssql.connect(dbConfig, function (err, result) {
      const request = new mssql.Request();
      request.query(`SELECT * FROM ORCHID;`, (err, res) => {
        if (err) reject(err);

        resolve(res.recordset); 
      });
    });
  });
},


insertOrchids : (orchidObject) => {
 const orchid = new Orchid(orchidObject.orchidName,  orchidObject.isNatural);

  return new Promise((resolve, reject) => {
    mssql.connect(dbConfig, function (err, result) {
      const request = new mssql.Request()
        .input("orchidName", orchid.orchidName )
        .input("isNatural",orchid.isNatural);

      request.query(
        `INSERT INTO ORCHID (orchid_name, is_natural) VALUES (@orchidName, @isNatural);`,
        (err, res) => {
          if (err) reject(err);
         // console.log(res.recordset);
          resolve(res.recordset); 
         
        }
      );
      
    });
  });
},


updateOrchids : (param_id, orchidObject) => {
  return new Promise((resolve, reject) => {
    mssql.connect(dbConfig, function (err, result) {

      var request = new mssql.Request()
        .input("orchid_id", param_id)
        .input("orchidName", orchidObject.orchidName)
        .input("isNatural", orchidObject.isNatural);

      request.query(
        `UPDATE Orchid SET orchid_name = @orchidName, is_natural = @isNatural WHERE orchid_id = @orchid_id;`,
        (err, res) => {
          if (err) reject(err);
        //  console.log(res.recordset);
          resolve(res.recordset); 
        }
      );
    });
  });
},


deleteOrchidById :(param_id) => {
  return new Promise((resolve, reject) => {
    mssql.connect(dbConfig, function (err, result) {
      const request = new mssql.Request()
      .input("orchid_id", param_id);
      request.query(`DELETE FROM ORCHID WHERE orchid_id = @orchid_id`, (err, res) => {
        if (err) reject(err);
      //  console.log(res.recordset);
        resolve(res.recordset); 
      });
    });
  });
}
}
module.exports = orchidDAO;