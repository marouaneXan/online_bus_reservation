const asyncHandler = require("express-async-handler");
const Client = require("../Models/Client");

//@desc Delete
//@route /api/v1/clients/client_id
//@access private
const deleteClient = asyncHandler(async (req, res) => {
  const client = await Client.findById(req.params.client_id);
  //delete client
  client.remove();
  res.status(200).json({
    message: "Client deleted successfully",
  });
});

//@desc GET carDetails
//@route /api/v1/clients/client_id
//@access private
const clientDetails = asyncHandler(async (req, res) => {
  const client = await Client.find(req.params.client_id);
  res.status(200).json(client);
});

//@desc GET getAllClients
//@route /api/v1/clients
//@access private
const getAllClients = asyncHandler(async (req, res) => {
  const clients = await Client.find();
  clients.length
    ? res.status(200).json(clients)
    : res.status(400).json({
        message: "There is no clients",
      });
});
module.exports = {
  deleteClient,
  getAllClients,
  clientDetails,
};
