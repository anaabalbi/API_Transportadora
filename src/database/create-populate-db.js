import sqlite3 from 'sqlite3';
sqlite3.verbose();
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const filePath = dirname(fileURLToPath(import.meta.url)) + '/database.db';
const db = new sqlite3.Database(filePath);

const ADDRESS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "ADDRESS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "SENDER_ADDRESS" VARCHAR(64),
    "SENDER_ZIP_CODE" VARCHAR(20),
    "SENDER_CITY" VARCHAR(20),
    "SENDER_STATE" VARCHAR(20),
    "SENDER_COUNTRY" VARCHAR(20),
    "ADDRESSEE_ADDRESS" VARCHAR(64),
    "ADDRESSEE_ZIP_CODE" VARCHAR(20),
    "ADDRESSEE_CITY" VARCHAR(20),
    "ADDRESSEE_STATE" VARCHAR(20),
    "ADDRESSEE_COUNTRY" VARCHAR(20),
    "CLIENT_ID" INTEGER,
    "STATUS" VARCHAR(20),
    "CODE_TRACKING" INTEGER,
    "DATE_ORDERED" VARCHAR(32)
);`;

const ADD_ADDRESS_DATA = `
INSERT INTO ADDRESS (ID, SENDER_ADDRESS, SENDER_ZIP_CODE, SENDER_CITY, SENDER_STATE, SENDER_COUNTRY, ADDRESSEE_ADDRESS,
ADDRESSEE_ZIP_CODE, ADDRESSEE_CITY, ADDRESSEE_STATE, ADDRESSEE_COUNTRY, CLIENT_ID, STATUS, CODE_TRACKING, DATE_ORDERED )
VALUES 
    ('1', 'East Avenue d 222 ', '76522', 'Copperas Cove', 'Texas', 'USA', 'Catawba Ave. 20832', '28031', 'Cornelius', 'North Carolina', 'USA', 1, 'shipping', '2134567', '10-03-2017'),
    ('2', 'Rua São Geraldo 40', '39573-972', 'Padre Carvalho', 'Minas Gerais', 'BR', 'Rua Gildo Sevalli 315', '08940-970', 'Biritiba-Mirim', 'São Paulo', 'BR', 2, 'shipping', '3256787', '06-07-2016'),
    ('3', 'Avenidade Dioguinho 2525', '60182-125', 'Fortaleza', 'Céara', 'BR', 'Avenida Cidade Jardim 2', '01453-000', 'São Paulo', 'São Paulo', 'BR', 2, 'delivered', '2345678', '21-01-2022')
`;

function createSchema() {
  db.run(ADDRESS_SCHEMA, (error) => {
    if (error) console.log('Erro ao criar tabela de endereços');
  });
}

function populateSchema() {
  db.run(ADD_ADDRESS_DATA, (error) => {
    if (error) console.log('Erro ao popular tabela de endereços');
  });
}

db.serialize(() => {
  createSchema();
  populateSchema();
});
