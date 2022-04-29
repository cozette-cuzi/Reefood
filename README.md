# Refood Project

Service Science Project to practice Microservices using `Nodejs`.

##### To start the project run
```npm install``` 

```npm run start```

### description
For the web serving part we used:  [Express](https://expressjs.com/)

The **register**  endpoint ( `POST /register` ) 
The POST request's body contains :
```
    { 
        username: string,
        password: string,
        password_confirmation: string,
        type: string 
    }
```

The  **login** endpoint ( `POST /login` ).
The POST request's body contains 
```
    { 
        username: string,
        password: string
    }
```
The following interface describes the user.

`{ id: string; username: string; password: string; }`

The users (with the given interface) is stored inside a **MondoDB** database.
