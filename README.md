# Nosso Brasil

## Description:

“Nosso Brasil” (“Our Brazil”) is a web application that can allow any Brazilian to get to know their congressman. It connects to Brazilian Congress API and fetches data about all parties (Brazil has [32 active parties now](https://en.wikipedia.org/wiki/List_of_political_parties_in_Brazil) - march 2022) and about all Brazilian Deputies.

You can search what deputies are in which party, who is the leader of the party in the congress, and personal and contact info of all congressmen.

The application is developed in Brazilian Portuguese since the requirements do not say that it needs to be in English. If it’s a requirement, I can implement a translation.

## Distinctiveness and Complexity

My application is very different from all the projects proposed throughout the course. Any project utilizes an API to get politicians' data. It’s more complex as well. I’m utilizing React with the tool “Create React App” in the frontend and Django in the backend. I connect the frontend and backend through a RESTful API, utilizing “Django Rest Framework” to that.

Considering that in this project I had to develop ALL backend, from models to the API endpoints using mainly Django and Django REST Framework and ALL the frontend, from design to implementation, using React, React Router DOM, and Bootstrap, I consider that my project is more complex than all the other projects.

## What I did

I've implemented a RESTful API using Django and Django REST Framework in the backend. I developed admin commands that allow the admin user to fetch all the data from the Brazilian Congress API and populate the application DB, which boosts the performance of the application, considering that the Congress API has a big delay when fetching a lot of data.


In the front, I’ve used Create React App to set up the app. I’m using bootstrap (more specifically the [Reactstrap](https://reactstrap.github.io/) library) with some custom CSS to give the feel of the application and created the Logo and Favicon in Figma. 

## Why I did this app

I have a bachelor's degree in law and a lot of interest in politics. It’s not easy or intuitive to get the data from our representatives in Brazil, so I want to fill that gap with this app and allow the population to get any data they want from their deputies. In the future, I want to make this a side project, when I get my first development job. :)


## What’s contained in each file I created

'README.md': This file. It contains the project description.

All files in './frontend/src/components': All files in that directory are all React Components that make the application. 

'./backend/functions.py': This file contains the functions to manipulate the models data.

'./backend/serializers.py': This file contains the serializers for Django REST Framework manipulate the data in the DB.

'./backend/views.py': The endpoints of the API.

'./backend/models.py': All django models are defined in this file.

'./backend/management/commands': The files in this directory contain the commands utilized in manage.py to fetch the data from the Congress API to the Local DB.

## How to run the Application

1. Make sure that all python packages listed in "requirements.txt" and NPM are installed.
2. With the Python Virtual Environment active or with the packages installed in your local machine run ‘python manage.py migrate’ to apply the migrations. 
3. After migration, run ‘python manage.py getpartidosdata’ to fetch all data of the Brazillian parties to the local DB.
   
    **IMPORTANT: You need to get the ‘partidos’ (parties) data first because each deputy entry has a Foreign Key to a party entry.**

4. After fetching the parties' data, run 'python manage.py getdeputadosdata' to fetch all data from Brazilian deputies. It can take time because there are literally hundreds of deputies in Brazil.
5. Now, you can run 'python manage.py runserver' to run the backend server.
6. Finally, run 'npm start' in the frontend directory to activate the frontend server. It has a proxy to "http://localhost:8000", so it should just work.