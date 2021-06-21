const connect = require('./connect.js');

const bulkInsert = async (query, arrayOfArrays) => {
  const conn = connect.conn;
  conn.query(query, [arrayOfArrays]);
  conn.end();
};

const update = async (query, ...params) => {
  const conn = connect.conn;
  conn.query(query, [...params]);
  conn.end();
};

const select = async (query, callback, ...params) => {
  const conn = connect.conn;
  const rows = await conn.query(query, ...params);
  callback(rows[0]);
  conn.end();
};

module.exports = { bulkInsert, update, select };
