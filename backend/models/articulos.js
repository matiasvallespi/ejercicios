// models/articulos.js
module.exports = (sequelize, DataTypes) => {
    const Articulo = sequelize.define('Articulo', {
        idarticulo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true // Si 'idarticulo' es único para cada articulo
        },
        link: {
            type: DataTypes.STRING,
            allowNull: false
        },
        precio: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    })

    return Articulo;
}

