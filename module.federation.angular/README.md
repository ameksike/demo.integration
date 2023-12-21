# Demo Microfronted Angular

- Install angular CLI 
    - npm i @angular/cli

- Create a monorepo: 
    - ng new monorepo --create-application=false
    - cd monorepo/

- Create the projects:
    - ng generate application mf-shell --style=scss --routing=true
    - ng generate application mf-payment --style=scss
    - ng generate application mf-shopping --style=scss --routing=true
    - ng generate library commons-lib

- Activate the Module Federation: 
    - npm i -D @angular-architects/module-federation
    - ng add @angular-architects/module-federation --project mf-shell --port 4200 --type host
    - ng add @angular-architects/module-federation --project mf-shopping --port 4201 --type remote
    - ng add @angular-architects/module-federation --project mf-payment --port 4202 --type remote

- Parallel project excecution 
    - npm i -D npm-run-all
    - npm run all 

[Microfrontend ref](https://www.youtube.com/watch?v=Ke3YO2cGk7k)