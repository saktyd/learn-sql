# Using SQLite

## INSTALLATION

```sh
brew install mysql
sudo apt isntall mysql-server
```

## SETUP

```sh
mysql_secure_installation
```

## RUN

```sh
mysql -u root -p
```

## CREATE DATABASE

```sql
CREATE DATABASE mytasks;
```

Output:

```txt
Query OK, 1 row affected (0.01 sec)
```

```sql
USE mytasks;
```

Output:

```txt
Database changed
```

## Table

Table:

| id  | name      | email               |
| --- | --------- | ------------------- |
| 1   | Sakti     | sakti@gmail.com     |
| 2   | Dewantoro | dewantoro@gmail.com |
| 3   | Impact    | impact@gmail.com    |

SQL Create Table:

```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50),
  email VARCHAR(50)
);
```

## Insert Data

```sql
INSERT INTO users (name, email)
VALUES
('Sakti', 'sakti@gmail.com'),
('Dewantoro', 'dewantoro@gmail.com'),
('Impact', 'impactbyte@gmail.com');
```

## Select Data

```sql
SELECT * FROM users;
```

## Dump Data

```
.output dumpfilename.sql
.dump
```
