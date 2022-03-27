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
    addressee_country
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
  }
}

export default AddressSchema;
