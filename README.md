# node_crud
A Simple CRUD backend in node.js to test sending various types of requests.


## requirements
`mongodb` must be installed, instructions found [here](https://docs.mongodb.com/manual/administration/install-community/)

run mongo with `mongod`

## installation
clone into a local directory

## running
run with `node server.js`

`GET` requests are done at `localhost:4000/api/ads?customerId=:customerId` and `http://localhost:4000/api/ads/:id`

`DELETE` an entry with `localhost:4000/api/ads/:id`

To create an entry, `POST` to `localhost:4000/api/ads`

Testing this can be done with Postman, sending the request in a form body or as a JSON.
![Example POST request](https://i.imgur.com/N9XbNBK.png)

There is also an api method to send a `PUT` request to `localhost:4000/api/ads/:id`



repo at `https://github.com/yifanl1/node_crud`
