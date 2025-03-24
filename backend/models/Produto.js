const db = require('../config/db');

class Produto {
    static getAll(callback) {
        db.query('SELECT * FROM produtos', callback);
    }

    static create(nome, codigo, descricao, preco, callback) {
        db.query('INSERT INTO produtos (nome, codigo, descricao, preco) VALUES (?, ?, ?, ?)', [nome, codigo, descricao, preco], callback);
    }

    static update(id, nome, codigo, descricao, preco, callback) {
        db.query('UPDATE produtos SET nome = ?, codigo = ?, descricao = ?, preco = ? WHERE id = ?', [nome, codigo, descricao, preco, id], callback);
    }

    static delete(id, callback) {
        db.query('DELETE FROM produtos WHERE id = ?', [id], callback);
    }
}

module.exports = Produto;