// models/clientes.js
module.exports = (sequelize, DataTypes) => {
    const Comentarios = sequelize.define('Comentarios', {
        idcomentario: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        comentario: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'comentarios',  // Especifica el nombre de la tabla manualmente
        timestamps: false
    })

    return Comentarios;
};