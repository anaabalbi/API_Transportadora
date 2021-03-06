import AddressDAO from '../DAO/AddressDAO.js';
import AddressSchema from './shemas/AddressSchema.js';

class Address {
  constructor(db) {
    this.dao = new AddressDAO(db);
  }

  getAddress = async () => {
    try {
      return await this.dao.getAddress();
    } catch (error) {
      throw error(error.message);
    }
  };

  getAddressId = async (id) => {
    try {
      await this._searchID(id);
      return await this.dao.getAddressId(id);
    } catch (error) {
      throw error;
    }
  };

  getAddressCode = async (code) => {
    try {
      await this._searchCODE(code);
      return await this.dao.getAddressCode(code);
    } catch (error) {
      throw error;
    }
  };

  newAddress = async (address) => {
    try {
      const newAddressSchema = new AddressSchema(
        address.sender_address,
        address.sender_zip_code,
        address.sender_city,
        address.sender_state,
        address.sender_country,
        address.addressee_address,
        address.addressee_zip_code,
        address.addressee_city,
        address.addressee_state,
        address.addressee_country,
        address.client_id,
        address.status
      );
      return await this.dao.newAddress(newAddressSchema);
    } catch (error) {
      throw error;
    }
  };

  updateAddress = async (id, address) => {
    try {
      await this._searchID(id);
      const updateAddressSchema = new AddressSchema(
        address.sender_address,
        address.sender_zip_code,
        address.sender_city,
        address.sender_state,
        address.sender_country,
        address.addressee_address,
        address.addressee_zip_code,
        address.addressee_city,
        address.addressee_state,
        address.addressee_country
      );

      return await this.dao.updateAddress(id, updateAddressSchema);
    } catch (error) {
      throw error;
    }
  };

  deleteAddressID = async (id) => {
    try {
      await this._searchID(id);

      return await this.dao.deleteAddress(id);
    } catch (error) {
      throw error;
    }
  };

  _searchID = async (id) => {
    const resposta = await this.dao.getAddressId(id);
    console.log(resposta.length);
    if (resposta.length != 0) {
      return resposta;
    } else {
      throw new Error('O endere??o n??o exite');
    }
  };

  _searchCODE = async (code) => {
    const resposta = await this.dao.getAddressCode(code);
    console.log(resposta.length);
    if (resposta.length != 0) {
      return resposta;
    } else {
      throw new Error('O c??digo n??o foi encontrado');
    }
  };
}

export default Address;
