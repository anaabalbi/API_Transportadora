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
      throw error;
    }
  };
  getAddressId = async (id) => {
    try {
      return await this.dao.getAddressId(id);
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
        address.addressee_country
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
    if (resposta.length === 0) {
      throw new Error('O endereço não exite');
    }
  };
}

export default Address;
