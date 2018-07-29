CREATE TABLE users (
  id     INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name  VARCHAR(100) NOT NULL,
  email      VARCHAR(100) NOT NULL,
  password   VARCHAR(100) NOT NULL,
  uuid       VARCHAR(100) NOT NULL,
  wallet_id  VARCHAR(100) NOT NULL,
  payment_pin VARCHAR(100) NOT NULL,
  access_token VARCHAR(1200) NOT NULL
);

CREATE TABLE files (
  id    INT PRIMARY KEY AUTO_INCREMENT,
  file_name VARCHAR(100) NOT NULL,
  file  MEDIUMBLOB NOT NULL
);