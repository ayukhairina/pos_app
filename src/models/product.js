const connection = require('../config/mysql')

module.exports = {
  getAll: (searchName, sortBy) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM product WHERE product_name LIKE '%${searchName}%'`, (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  },

  sortData: (column) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM product ORDER BY ${column} ASC`, (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  },

  getDetail: (productId) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM product WHERE product_code = ?', productId, (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  },

  insertData: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO product SET ?', data, (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  },

  updateData: (data, productId) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE product SET ? WHERE product_code = ?', [data, productId], (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  },

  deleteData: (productId) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM product WHERE product_code = ?', productId, (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  }
}
