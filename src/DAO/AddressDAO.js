class AddressDAO {
  constructor(db) {
    this.db = db;
  }
  getAddress = () => {
    return new Promise((resolve, reject) => {
      this.db.all('SELECT * FROM ADDRESS', (error, rows) => {
        if (error) {
          reject({
            mensagem: error.message,
            erro: true,
          });
        } else {
          resolve({
            address: rows,
            erro: false,
          });
        }
      });
    });
  };
  getAddressId = (id) => {
    return new Promise((resolve, reject) => {
      this.db.all('SELECT * FROM ADDRESS WHERE ID = ?', id, (error, rows) => {
        if (error) {
          reject({
            mensagem: error.message,
            erro: true,
          });
        } else {
          resolve({
            address: rows,
            erro: false,
          });
        }
      });
    });
  };

  getAddressCode = (code) => {
    return new Promise((resolve, reject) => {
      this.db.all(
        'SELECT * FROM ADDRESS WHERE CODE_TRACKING = ?',
        code,
        (error, rows) => {
          if (error) {
            reject({
              mensagem: error.message,
              erro: true,
            });
          } else {
            resolve({
              address: rows,
              erro: false,
            });
          }
        }
      );
    });
  };

  newAddress = (address) => {
    console.log(address);
    return new Promise((resolve, reject) => {
      this.db.run(
        'INSERT INTO ADDRESS(SENDER_ADDRESS, SENDER_ZIP_CODE, SENDER_CITY, SENDER_STATE, SENDER_COUNTRY, ADDRESSEE_ADDRESS,ADDRESSEE_ZIP_CODE, ADDRESSEE_CITY, ADDRESSEE_STATE, ADDRESSEE_COUNTRY, CLIENT_ID, STATUS, CODE_TRACKING, DATE_ORDERED) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
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
        address.status,
        address.code_tracking,
        address.date_ordered,

        (error) => {
          if (error) {
            reject(error);
          } else {
            resolve('Endereço inserido com sucesso');
          }
        }
      );
    });
  };

  updateAddress = (id, address) => {
    return new Promise((resolve, reject) => {
      this.db.run(
        'UPDATE ADDRESS SET SENDER_ADDRESS =?, SENDER_ZIP_CODE =?, SENDER_CITY=?, SENDER_STATE=?, SENDER_COUNTRY=?, ADDRESSEE_ADDRESS=?, ADDRESSEE_ZIP_CODE=?, ADDRESSEE_CITY=?, ADDRESSEE_STATE=?, ADDRESSEE_COUNTRY=? WHERE ID =?',
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
        address.status,
        address.code_tracking,
        address.date_ordered,
        id,
        (error) => {
          if (error) {
            reject(error);
          } else {
            resolve(`O endereço do id ${id} foi atualizado com sucesso`);
          }
        }
      );
    });
  };

  deleteAddress = (id) => {
    return new Promise((resolve, reject) => {
      this.db.run('DELETE FROM ADDRESS WHERE ID = ?', id, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve(`Endereço do id ${id} deletado com sucesso`);
        }
      });
    });
  };
}

export default AddressDAO;
