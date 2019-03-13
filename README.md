# node_crud
Simple CRUD app in node.js

run with `node server.js`

Get requests are done at `localhost:4000/api/getAllWithCustomerId/:customerId` and `http://localhost:4000/api/get/:id`

Remove an entry with `localhost:4000/api/remove/:id`

To create an entry, use `localhost:4000/api/create` and send as a form body
I tested this through Postman.

There is also an api link to handle updates with a PUT, requests also sent as form bodies.

repo at `https://github.com/yifanl1/node_crud`