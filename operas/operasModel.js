const db = require('../data/dbConfig')

module.exports = {
    insert,
    get,
    findById,
    remove,
    update,
}

async function insert(opera) {
    return db('operas')
    .insert(opera, 'id')
    .then(([id]) => {
        return findById(id)
    })
}

async function update(id, changes) {
    return null;
}

function get() {
    return db('operas')
}

function findById(id) {
    return db('operas').where({ id }).first()
}

function remove(id) {
    return null;
}