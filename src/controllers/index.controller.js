const {Pool} = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'admin123',
    database: 'tienda',
    port: '5432'
})



const getUsers = async(req,res) => {
  const response = await pool.query('SELECT * FROM cliente');
 
 res.status(200).json(response.rows)
}

const createUser = async(req,res) => {
    const{cedula,nombre,apellido} = req.body

    const response = await pool.query('INSERT INTO cliente(cedula,nombre,apellido) VALUES($1,$2,$3)', [cedula,nombre,apellido]);
    console.log(response)
    res.send('User created')


};

module.exports = {
    getUsers,
    createUser
}