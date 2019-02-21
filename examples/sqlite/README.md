# Using SQLite

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
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(50),
  email VARCHAR(50)
);
```
