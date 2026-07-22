const query = 'SELECT * FROM users WHERE name = ?';
connection.execute(query, [name]);
