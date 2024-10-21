const { Sequelize, DataTypes } = require('sequelize');

// Conexión a la base de datos SQL Server
const sequelize = new Sequelize('matias', 'matias_sequel_user', '*******', {
  host: 'localhost\\SQLEXPRESS',
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: true,
      trustServerCertificate: true
    }
  },
  logging: console.log
});

// Importar los modelos
const Articulo = require('./models/articulos')(sequelize, DataTypes);
const Cliente = require('./models/clientes')(sequelize, DataTypes);
const Factura = require('./models/facturas')(sequelize, DataTypes);
const Orden = require('./models/ordenes')(sequelize, DataTypes);
const Comentario = require('./models/comentarios')(sequelize, DataTypes);

// Crear un objeto para almacenar los modelos
const models = { Cliente, Orden, Articulo, Comentario };

// Inicializar las relaciones
Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = { sequelize, models };