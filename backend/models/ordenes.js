// models/ordenes.js
module.exports = (sequelize, DataTypes) => {
    const Orden = sequelize.define('Orden', {
        clienteID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true
        },
        ordenID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        montoTotal: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        fechaOrden: {
            type: DataTypes.DATE,
            allowNull: false
        }}, {
            tableName: 'ordenes', // Especifica el nombre de la tabla manualmente
            timestamps: false  
        });

// Asociaciones
Orden.associate = (models) => {
    // Una orden pertenece a un cliente
    Orden.belongsTo(models.Cliente, {
        foreignKey: 'clienteID',  // Columna en la tabla de Clientes
        as: 'cliente'              // Alias para la relación
    });
};

return Orden;
};