DROP DATABASE IF EXISTS ng_games_db;
CREATE DATABASE ng_games_db;

USE ng_games_db;

CREATE TABLE games(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description TEXT,
    image TEXT,
    created_at TIMESTAMP DEFAULT NOT NULL NOW()
    updated_at TIMESTAMP DEFAULT NOT NULL NOW() ON UPDATE NOW()
)Engine=InnoDB;