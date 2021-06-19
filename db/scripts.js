const connect = require('./connect.js');

const bulkInsert = (query, arrayOfArrays) => {
  const conn = connect.conn;
  conn.query(query, [arrayOfArrays], function (error, results, fields) {
    if (error) throw error;
  });
  conn.end();
};

const update = (query, ...params) => {
  const conn = connect.conn;
  conn.query(query, [...params], function (error, results, fields) {
    if (error) throw error;
  });
  conn.end();
};

const select = (query, ...params) => {
  const conn = connect.conn;
  conn.query(query, [...params], function (error, results, fields) {
    if (error) throw error;
    return results;
  });
  conn.end();
};

module.exports = { bulkInsert, update, select };
