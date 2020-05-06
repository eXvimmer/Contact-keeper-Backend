# Contact Keeper Backend

This is the backend part of contact keeper app. I created this app using [Brad Traversy's](https://github.com/bradtraversy/) REACT FRONT TO BACK 2019 course . This is a Node/Express/MongoDB REST API for contacts that uses JWT authentication. All contact endpoints are protected and each registered user has their own contacts.

1. Clone this repo
2. Open the `config/default.json` file and add your **mongoURI** and your **jwtSecret**
3. Run `npm install` or `yarn`
4. Run `npm run server`


> This api runs at port 5000, by default.


## API Usage & Endpoints


### Register a User [POST /api/users]

- Request: Add user and request JSON web token

  - Headers

        Content-type: application/json

  - Body

            {
              "name": "",
              "email": "",
              "password": ""
            }

- Response: 200 (application/json)

  - Body

          {
            "token": ""
          }

##$ Login with a User [POST /api/auth]

- Request: Login with credentials to recieve a JSON web token

  - Headers

        Content-type: application/json

  - Body

            {
              "email": "",
              "password": ""
            }

- Response: 200 (application/json)

  - Body

          {
            "token": ""
          }

### Get Contacts [GET /api/contacts]

- Request: Get all contacts of a specific user

  - Headers

        x-auth-token: YOURJWT

* Response: 200 (application/json)

  - Body

          {
            "contacts": []
          }

### Add New Contact [POST /api/contacts]

- Request: Add a new contact

  - Headers

        x-auth-token: YOURJWT
        Content-type: application/json

  - Body

            {
              "name": "",
              "email": "",
              "phone": "",
              "type": "" [personal or professional]
            }

- Response: 200 (application/json)

  - Body

          {
            "contact": {}
          }

### Update Contact [PUT /api/contacts/:id]

- Request: Update existing contact

  - Parameters

    - id: 1 (number) - An unique identifier of the contact.

  - Headers

        x-auth-token: YOURJWT
        Content-type: application/json

  - Body

            {
              "name": "",
              "email": "",
              "phone": "",
              "type": "" [personal or professional]
            }

- Response: 200 (application/json)

  - Body

          {
            "contact": {}
          }

### Delete Contact [DELETE /api/contacts/:id]

- Request: Delete existing contact

  - Parameters

    - id: 1 (number) - An unique identifier of the contact.

  - Headers

        x-auth-token: YOURJWT

* Response: 200 (application/json)

  - Body

          {
            "msg": "Contact removed"
          }
