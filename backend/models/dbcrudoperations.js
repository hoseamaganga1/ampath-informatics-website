    // Hapi.js SQL2 DB model for CRUD operations using dbscripts.js
    
    const db = require('../db'); // adjust path as needed
    const dbscripts = require('./dbcrudoperations'); // assuming this file contains SQL queries
    
    const Model = {
        async create(data) {
            const result = await db.query(dbscripts.insertQuery, [data.field1, data.field2]);
            return result;
        },
        async read(id) {
            const result = await db.query(dbscripts.selectQuery, [id]);
            return result.rows[0];
        },
        async update(id, data) {
            const result = await db.query(dbscripts.updateQuery, [data.field1, data.field2, id]);
            return result;
        },
        async delete(id) {
            const result = await db.query(dbscripts.deleteQuery, [id]);
            return result;
        }
    };
    
    module.exports = Model;