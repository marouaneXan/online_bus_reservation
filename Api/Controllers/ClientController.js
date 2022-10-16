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
module.exports={
    deleteClient
}