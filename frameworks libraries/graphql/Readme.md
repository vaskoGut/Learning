# GRAPHQL
| Nm | #Question   |
| :---:   | :---: |
| 1   | [1. Graphql and rest difference? 2. ](#grqphql-rest-difference)                               |


1. ### grqphql-rest-difference
***Rest*** - you get everthing from server, whatever you want to hear or not.
***Graphql*** is much more reserved (стриманий )

Both Rest and Graphql are used to build API. Application Programming Interfaces. Both allow different application to communicate
with each other over the internet. Api gets request from client, and retrieves data from Server.

GRAPHQL
    ***Schema*** - it's 'plan' that define all the possible data the clients can query through a service
    ***Query*** - is a request for data that follows the structure defined in the schema.
    ***Resolver*** - is called to retrieve the data requested in the query.
    ***Mutations*** - used to modify data on the server. 
    For example if we think in terms of the Create, Read,Update, Delete ( crud ) model query - read and all other create, update, delete are handled by mutations.

***Rest***
    [resources] - earch resource has a unique called URI ( Uniform Resource Identifier ). 
    Client can request a response using an HTTP method. 
    Get, Put, post, delete - methods to get these resources.
    Then server responds with a representation of the resource in a format like JSON and XML.
    Rest also allows to sort, filter data using query params.

Short difference:
<img width="648" height="132" alt="image" src="https://github.com/user-attachments/assets/89424385-0bb1-49d5-abdd-9cfcfd785243" />
