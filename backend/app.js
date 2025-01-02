// app.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Permitir solicitudes desde cualquier origen
app.use(cors());

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('¡Algo salió mal!');
});

app.get('/quiz', (req, res) => {
    const data = [
        { "texto": "¿Cuál es el lugar más frío de la Tierra?", "opciones": ["La Antártida", "El Polo Norte", "La Patagonia"] },
        { "texto": "¿Quién escribió La Odisea?", "opciones": ["Gabriel García Márquez", "Miguel de Cervantes", "Homero"] },
        { "texto": "¿Cuál es el río más largo del mundo?", "opciones": ["El Amazonas", "El Nilo", "El misisipi"] },
        { "texto": "¿Cómo es la carga de un protón?", "opciones": ["Positiva", "No tiene carga", "Negativa"] },
        { "texto": "¿Cuál es el país mas grande, y el mas chico del mundo?", "opciones": ["Canadá y Mónaco", "Estados Unidos y Malta", "Rusia y El Vaticano"] }
    ]
    res.status(201).json(data);
});

app.post('/quiz/eval', (req, res) => {
    const respuesta = req.body;
    const data = ["La Antártida", "Miguel de Cervantes", "El Nilo", "Positiva", "Rusia y El Vaticano"]
    const diferencia = data.filter(elemento => !respuesta.includes(elemento))
    const puntos = (data.length - diferencia.length) * 10
    res.status(201).json(puntos);
});

let productos = [
    { nombre: 'Laptop', descripcion: 'Laptop gaming', precio: 1500, link: "https://media.gq.com.mx/photos/61e70ca25def32c5619cef06/16:9/w_1280,c_limit/Lenovo%20Yoga%20Slim%207%20Pro.jpg", id: 1 },
    { nombre: 'Mouse', descripcion: 'Mouse inalámbrico', precio: 25, link: "https://tiendadepromocionales.com/cdn/shop/products/MOUSE_PAD_INALAMBRICO2_337e9ed9-0221-4fdb-94ac-14ac2e37ba5e_800x.PNG?v=1567005967", id: 2 },
    { nombre: 'Teclado', descripcion: 'Teclado inalámbrico', precio: 55, link: "https://www.tutecladomecanico.com/wp-content/uploads/2021/09/tecladoCustom-1024x570-1.webp", id: 3 }
];

app.get('/productos', (req, res) => {
    res.status(200).json(productos);
});

app.post('/productos', (req, res) => {
    const idExistentes = productos.map(e => e.id)
    let idMayor = Math.max(...idExistentes)
    let nuevoProducto = req.body
    nuevoProducto.id = idMayor += 1
    productos.push(nuevoProducto)
    res.status(201).json(nuevoProducto);
});

app.delete('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const indice = productos.findIndex(producto => producto.id === id)
    productos.splice(indice, 1)
    res.status(201).json();
});

app.patch('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const actualizaciones = req.body;
    const producto = productos.find(p => p.id === id);
    Object.assign(producto, actualizaciones);
    res.status(201).json(producto);
});

const { sequelize, models } = require('./db');  // Importar la configuración y el modelo
const { Op } = require('sequelize'); // Desestructurando los operadores de Sequelize
  
/*async function testConnection() {
    try {
        const articulo = await models.Articulo.findAll({
            order: [['idarticulo', 'DESC']], // Ordenar por idarticulo en orden descendente
            raw: true // Para obtener solo los datos crudos (opcional)
        });

        const clienteConOrdenes = await models.Cliente.findAll({
            include: {
                model: models.Orden, 
                attributes: ['ordenID', 'montoTotal'],
                as: 'ordenes',
                where: { clienteID: { [Op.gt]: 2 } }
            }
        })
       
        clienteConOrdenes.forEach(e => {
            console.log(`Nombre: ${e.dataValues.nombre} Ciudad: ${e.dataValues.ciudad} E-mail: ${e.dataValues.email}`)
            e.ordenes.forEach(e => {
                console.log(`Orden ID: ${e.dataValues.ordenID} Monto Total: ${e.dataValues.montoTotal}`)
            })
        })
        

    } catch (error) {
        console.error('Error al obtener la informacion:', error);
    }
};

testConnection();
async function testConnection() {
    try {
        
        const ordenes = await models.Articulo.findOne({ where: { idarticulo: 2 } });;

        if (ordenes) {
            console.log(ordenes.toJSON());
        } else {
            console.log('Articulo no encontrado');
        }

    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
    } finally {
        // Cerrar la conexión al final
        await sequelize.close();
        console.log('Conexión cerrada.');
    }
}

testConnection();*/