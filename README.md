# node_crud
A Simple CRUD backend in node.js to test sending various types of requests.


## requirements
`mongodb` must be installed, instructions found [here](https://docs.mongodb.com/manual/administration/install-community/)

run mongo with `mongod`

## installation
clone into a local directory

## running
run with `node server.js`

`GET` requests are done at `localhost:4000/api/getAllWithCustomerId/:customerId` and `http://localhost:4000/api/get/:id`

`DELETE` an entry with `localhost:4000/api/remove/:id`

To create an entry, `POST` to `localhost:4000/api/create`

Testing this can be done with Postman, sending the request in a form body.
![Example POST request](https://i.imgur.com/wDqo1jk.png)

There is also an api link at `localhost:4000/api/update/:id` to handle updates with a PUT, requests also sent as form bodies.



repo at `https://github.com/yifanl1/node_crud`
