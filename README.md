# Shop Management System

This is a backend system for managing inventory and sales for a small shop. The system allows users to add items to the inventory, create bills for sales transactions, and update inventory accordingly.

## Features

- Add new items to the inventory.
- Retrieve a list of all items in the inventory.
- Create a bill for a sale transaction, specifying the items sold and quantities.
- Retrieve a list of all bills.
- Get details of a specific bill.
- Automatically update the inventory when a bill is created (subtract sold items from the inventory).

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- MongoDB instance running.

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/aryan2701/Flight_Status.git
    cd shop-management
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:

    ```plaintext
    PORT=3000
    MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.nbfq9ft.mongodb.net/<yourDatabaseName>
    ```

4. Start the server:

    ```sh
    node server.js
    ```

    The server will be running on [http://localhost:3000](http://localhost:3000).

## API Endpoints

### 1. Add New Item to Inventory

- **Endpoint:** `POST /api/items`

- **Request Body:**

    ```json
    {
      "name": "Item A",
      "price": 50,
      "quantity": 100
    }
    ```

- **Response:**

    ```json
    {
      "_id": "item_id_generated_by_mongo",
      "name": "Item A",
      "price": 50,
      "quantity": 100,
      "__v": 0
    }
    ```

### 2. Retrieve All Items

- **Endpoint:** `GET /api/items`

- **Response:**

    ```json
    [
      {
        "_id": "item_id_1",
        "name": "Item A",
        "price": 50,
        "quantity": 100,
        "__v": 0
      },
      {
        "_id": "item_id_2",
        "name": "Item B",
        "price": 30,
        "quantity": 50,
        "__v": 0
      }
    ]
    ```

### 3. Create a New Bill

- **Endpoint:** `POST /api/bills`

- **Request Body:**

    ```json
    {
      "items": [
        { "item_id": "item_id_1", "quantity": 2 },
        { "item_id": "item_id_2", "quantity": 1 }
      ]
    }
    ```

- **Response:**

    ```json
    {
      "_id": "bill_id_generated_by_mongo",
      "date": "2024-08-10T10:00:00.000Z",
      "total": 130,
      "__v": 0
    }
    ```

### 4. Retrieve All Bills

- **Endpoint:** `GET /api/bills`

- **Response:**

    ```json
    [
      {
        "_id": "bill_id_1",
        "date": "2024-08-10T10:00:00.000Z",
        "total": 130,
        "__v": 0
      },
      {
        "_id": "bill_id_2",
        "date": "2024-08-11T10:00:00.000Z",
        "total": 200,
        "__v": 0
      }
    ]
    ```

### 5. Get Details of a Specific Bill

- **Endpoint:** `GET /api/bills/:id`

- **Path Parameter:** `id` - The ID of the bill you want to retrieve.

- **Response:**

    ```json
    {
      "bill": {
        "_id": "bill_id_1",
        "date": "2024-08-10T10:00:00.000Z",
        "total": 130,
        "__v": 0
      },
      "items": [
        {
          "_id": "bill_item_id_1",
          "bill_id": "bill_id_1",
          "item_id": {
            "_id": "item_id_1",
            "name": "Item A",
            "price": 50,
            "quantity": 98, // Updated quantity after sale
            "__v": 0
          },
          "quantity": 2
        },
        {
          "_id": "bill_item_id_2",
          "bill_id": "bill_id_1",
          "item_id": {
            "_id": "item_id_2",
            "name": "Item B",
            "price": 30,
            "quantity": 49, // Updated quantity after sale
            "__v": 0
          },
          "quantity": 1
        }
      ]
    }
    ```

## Testing the Application

You can use Postman or any other API testing tool to test the endpoints. Here are the steps:

1. **Add New Items:**

    - **Endpoint:** `POST http://localhost:3000/api/items`
    - **Request body example:**

        ```json
        {
          "name": "Item A",
          "price": 50,
          "quantity": 100
        }
        ```

2. **Retrieve All Items:**

    - **Endpoint:** `GET http://localhost:3000/api/items`

3. **Create a New Bill:**

    - **Endpoint:** `POST http://localhost:3000/api/bills`
    - **Request body example:**

        ```json
        {
          "items": [
            { "item_id": "item_id_1", "quantity": 2 },
            { "item_id": "item_id_2", "quantity": 1 }
          ]
        }
        ```

4. **Retrieve All Bills:**

    - **Endpoint:** `GET http://localhost:3000/api/bills`

5. **Get Details of a Specific Bill:**

    - **Endpoint:** `GET http://localhost:3000/api/bills/:id`

      
## Conclusion

This README file provides all the necessary information to set up, run, and test the Shop Management System backend application. It includes comprehensive details about setting up and running the application, along with information about the API endpoints and how to test them.




