vad som vi har för modellring 
{
    gruppkanal: [string],
    password: [number],
    username: [string],
    message: [string],[number]
}

# README

## Chappy fullstack project

 this repository as you see is a full-stack web application for school project and is built by using Node.js , Express and lowdb. the goal is to provide a simple way to retrieve the RESTful APIs. 

Modeling
this informations will give you better structur of this project

User
{
    id : [Number],
    name : [String],
    password : [String]
} 

ChatMessage
{
    id : [Number],
    message : [String],
    
}

### Getting Started

 you can follow structure to get started :

1.  Clone the repository to your local machine using the following command:    
    `git clone https://github.com/MustafaZeinali/chappy.git` 
       
    

### Endpoints and HTTP Methods

This projects use the following endpoints methods :

#### `/search` Endpoint

-   HTTP Method: `GET`
-   Usage: This endpoint is used to search for specific products based on certain criteria.

-------
#### `/group` Endpoint

-   HTTP Method: `GET` `POST` `PUT`

-   Usage: This endpoint is used to retrieve, change and get a message of group.
##### Get group 
```
 [GET] /group
```
-This uses for getting message in group
```
##### Add a group
```
-This uses for adding a new message to group

 [POST] /group 
 
 {
      "id": "12365",
      "message": " hello world"
     }
```
```
 [PUT] /group/:id 
 {
      "id": 1,
      "message": " hello world from change words!",
    }
```
____________________

#### `/users` Endpoint

-   HTTP Method: `GET` `POST`

-   Usage: To get a list of users
##### Get users
```
 [GET] /users 
```
-   `GET`: Used to fetch users.


##### Add a user
```
 [POST] /user 
 
	{
		"id": 2,
		"name": "mustafa",
		"password": "123"
	}
```
-   `POST`: Used to create a new  user.

____________________

### Development
This fullstack application (most it is backend) you can test it in insomnia to get all the features in a easy way. 


### Contributing

Contributions goes to 
	Ali Al-Nasir,
	Malin Jonsson, 
	Mustafa Zeinali, 
	Victor Bergström 
 
