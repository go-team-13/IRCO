# go-team-13

## Running the app locally

### Back end

Create a python virtualenv, activate it and install django inside it:

`virtualenv irco`
`source irco/bin/activate`
`pip install django`

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
