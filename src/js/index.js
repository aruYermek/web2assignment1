const { Pool } = require('pg');

// соединение к базе данных
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'assignment1_db',
    password: 'mnbv01',
    port: 5432,
});

// Пример запроса к базе данных
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Ошибка выполнения запроса:', err);
    } else {
        console.log('Результат запроса:', res.rows);
    }
    pool.end(); // Закрыть соединение после выполнения запроса
});

console.log(pool.query)

