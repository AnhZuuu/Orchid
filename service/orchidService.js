const OrchildRepository = require("../repository/orchidRepository");

const OrchildService = {
  getAllOrchids: async (req, res) => {
    return await OrchildRepository.getAllOrchids();
  },
  insertOrchids:async (orchid) => {
    return await OrchildRepository.insertOrchids(orchid);
  },
  updateOrchids: async (orchid_id, orchid) => {
  return await OrchildRepository.updateOrchids(orchid_id, orchid);
  },
  deleteOrchids: async (orchid_id) => {
    const obj = await OrchildRepository.deleteOrchids(orchid_id);
  }
}

module.exports = OrchildService;