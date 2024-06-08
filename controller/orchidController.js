const OrchildService = require("../service/orchidService");

exports.insertNewOrchids= async (req, res) => {
  const obj = await OrchildService.insertOrchids(req.body);
  res.send(obj);
};

exports.getAllOrchids= async (req, res) => {
  const obj = await OrchildService.getAllOrchids();
  res.send(obj);
};

exports.updateOrchids= async (req, res) => {
  const obj = await OrchildService.updateOrchids(req.params.orchid_id, req.body);
  res.send(obj);
};

exports.deleteOrchids= async (req, res) => {
  const obj = await OrchildService.deleteOrchids(req.params.orchid_id);
  res.send(obj);
};