const OrchidDAO = require("../dao/orchidDAO");

const OrchildRepository = {
  getAllOrchids: async () => {
    return await OrchidDAO.findAllOrchids();
  },
  insertOrchids:async (orchid) => {
    return await OrchidDAO.insertOrchids(orchid);
  },
  updateOrchids: async (orchid_id, orchid) => {
  return await OrchidDAO.updateOrchids(orchid_id, orchid);
  },
  deleteOrchids: async (orchid_id) => {
    const obj = await OrchidDAO.deleteOrchidById(orchid_id);
  }
}

module.exports = OrchildRepository;