# Endpoints

## Movies endpoints

* /api/movies

|  Endpoint  |  Mehtod  |  Auth  | CRUD | Description |
|---|---|---|---|---|
| /movies | GET | no | read | Read movies. |
| /movies | POST | yes | create | Create a movie. |
| /movies/:id | GET | no | read | Read a movie. |
| /movies/:id | PUT | no | update | Update a movie. |
| /movies/:id | DELETE | no | delete | Delete a movie. |

### Movies columns

|  Column  |  Type  |  Description  |
|---|---|---|
| id | int | Identifier of movies.|
| title | string | Title of movies. |
| year | int | Year of movies. |
| director | string | Director of movies. |
| length | int | Length of movies, in seconds. |
