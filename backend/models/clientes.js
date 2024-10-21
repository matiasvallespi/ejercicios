// models/clientes.js
module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('Cliente', {
        clienteID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        ciudad: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefono: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'clientes',  // Especifica el nombre de la tabla manualmente
        timestamps: false
    })

    // Asociaciones
    Cliente.associate = (models) => {
        // Un cliente puede tener muchas ordenes
        Cliente.hasMany(models.Orden, {
            foreignKey: 'clienteID', // Columna en la tabla de Ordenes
            as: 'ordenes'
        });
    };

    return Cliente;
};