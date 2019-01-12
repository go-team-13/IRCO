# IRCODEX

## Description
We created a map view with Angular, allowing users to access schools and programs by clicking pins in the map. It enables community users who may have language barriers to interact with the website. 

To support this user interface, we created the back end with Django. The database stores all SUN school and program information such as school names, address, contact. It supports administrators to manage school and program information in a structured and dynamic environment

## Running the app locally

### Back end

Create a python virtualenv, activate it and install django inside it:

```
virtualenv irco
source irco/bin/activate
pip install django
```

Clone this repo, navigate to `irco-server` and initialize the django database:

`python manage.py migrate`

Load mock data from a fixture:

`django-admin loaddata data.json`

Run the django dev server:

`python manage.py runserver`

At this point, 2 endpoints serving `site` and `program` data become available at:

`http://127.0.0.1:8000/ircoapp/sites` and `http://127.0.0.1:8000/ircoapp/programs`


### Front end
Make sure that you have `npm` and `Node.js` version 8.x or 10.x installed.

Install the Angular CLI by running the following command:

`npm install -g @angular/cli`

Navigate to `irco-app`.

Install necessary dependencies by running the following command:

`npm install`

Finally, start up a local instance of the app by running the following command:

`ng serve --open`

## To-do
* Connect front end with back end, so that the web app is dynamic
* Add translation functionality that allows users to switch to another language
* Add search functionality that allows users to search by activity/location/availability etc.
* Add pictures of school sites and activities

## Target audience
* Community members who participate IRCO
* IRCO administrators

## Contributions
Ana Krivokapic
* Built back end and database with Django

Elspeth Tanguay-Koo
* Collected data and entered them into the spread sheet

Karen Painter
* Created right data format to support back end and database

Lauren Namdar
* Designed front-end map view with Angular and Google map API

McKella Laurence
* Created front-end infrastrsture with Angular and Material Design

Yunqi Yan
* Summerized project with description and contribution

All of us
* Designed the project, completed invidual task, collaborated via team work, chatted, made friends and had fun
