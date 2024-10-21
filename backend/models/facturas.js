// models/facturas.js
module.exports = (sequelize, DataTypes) => {
const Factura = sequelize.define('Factura', {
    numero: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true // Si 'numero' es único para cada factura
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    cliente: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })}