// import Address from '../models/Address-model.js';
// import database from './database/sqlite-db.js';

class AddressSchema {
  constructor(
    sender_address,
    sender_zip_code,
    sender_city,
    sender_state,
    sender_country,
    addressee_address,
    addressee_zip_code,
    addressee_city,
    addressee_state,
    addressee_country,
    client_id,
    status
  ) {
    this.sender_address = sender_address;
    this.sender_zip_code = sender_zip_code;
    this.sender_city = sender_city;
    this.sender_state = sender_state;
    this.sender_country = sender_country;
    this.addressee_address = addressee_address;
    this.addressee_zip_code = addressee_zip_code;
    this.addressee_city = addressee_city;
    this.addressee_state = addressee_state;
    this.addressee_country = addressee_country;
    this.client_id = client_id;
    this.status = this._checkStatus(status);
    this.code_tracking = Math.floor(Math.random() * 7999999);
    this.date_ordered = new Date().toLocaleString();
  }

  _checkStatus = (status) => {
    const validStatus = ['ordered', 'shipping', 'delivered'];
    if (validStatus.includes(status)) {
      return status;
    } else {
      throw new Error(
        'Status não permitido. O status deve ser: ordered, shipping, delivered'
      );
    }
  };

  // _implementCode = () => {
  //   const code =Math.floor(Math.random() * 7999999);
  //   const getCode = new Address(database);
  //   try {
  //     const resposta = await getCode.getAddressCode(code);
  //     res.status(200).json({
  //       address: resposta,
  //       erro: false,
  //     });
  //     while(resposta.length > 0){

  //     }
  //   } catch (error) {
  //     res.status(400).json({
  //       message: error.message,
  //       erro: true,
  //     });
  //   }

  // };
}

export default AddressSchema;
