import Address from '../models/Address-model.js';

const addressController = (app, bd) => {
  const addressModel = new Address(bd);

  app.get('/address', async (req, res) => {
    try {
      const resposta = await addressModel.getAddress();
      res.status(200).json({
        address: resposta,
        erro: false,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
        erro: true,
      });
    }
  });

  app.get('/address/id/:id', async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try {
      const resposta = await addressModel.getAddressId(id);
      res.status(200).json({
        address: resposta,
        erro: false,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
        erro: true,
      });
    }
  });

  app.get('/address/codetracking/:code', async (req, res) => {
    const code = req.params.code;
    try {
      const resposta = await addressModel.getAddressCode(code);
      res.status(200).json({
        address: resposta,
        erro: false,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
        erro: true,
      });
    }
  });

  app.post('/address', async (req, res) => {
    const body = req.body;
    try {
      const resposta = await addressModel.newAddress(body);
      res.status(201).json({
        message: resposta,
        address: body,
        erro: false,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
        erro: true,
      });
    }
  });

  app.put('/address/id/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
      const resposta = await addressModel.updateAddress(id, body);
      res.status(200).json({
        message: resposta,
        address: body,
        erro: false,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
        erro: true,
      });
    }
  });

  app.delete('/address/id/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
      const resposta = await addressModel.deleteAddressID(id, body);
      res.status(200).json({
        message: resposta,
        address: body,
        erro: false,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
        erro: true,
      });
    }
  });
};

export default addressController;
