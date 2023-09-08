
# A RESTful API

A simple API built using used Node.js,Express.js,MongoDB(Database) and Postman (end points testing Tool).


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MongoDB_Database_Connection_String'

`PORT`


## API Reference

#### GET all Products

```http
  GET http://localhost:PORT/product/fetchall
```


#### GET a Product

```http
  GET http://localhost:PORT/product/fetch/:id
```

#### CREATE a Product

```http
  POST http://localhost:PORT/product/post
```

#### UPDATE a Product

```http
  PUT http://localhost:PORT/product/update/:id
```
#### DELETE a Product

```http
  DELETE http://localhost:PORT/product/delete/:id
```

