# Clientpanel

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# clientpanel

# My Note
1. ng new ProjectName
2. npm install bootstrap@4.0.0-alpha.6 tether jquery --save
3. After installation finished change remove ^ from bootstrap package.json
4. After that run npm install again 
5. Go to angular-cli.json file and find styles Insert this "../node_modules/bootstrap/dist/css/bootstrap.css"
6. After that find scripts and add these three ""../node_modules/jquery/dist/jquery.js",
        "../node_modules/tether/dist/js/tether.js",
        "../node_modules/bootstrap/dist/js/bootstrap.js"
7. Add Route to app.modules.ts import { RouterModule, Routes} from ‘@angular/router’;
8. After that declare these const appRoutes: Routes =[
  {path:'', component: DashboardComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component: LoginComponent} ]; above @NgModule
9. Inside the imports:[] add new this RouterModule.forRoot(appRoutes)
10. For nabber go to bootstrap site and find navbar and copy and paste to our project navbar.component.html file
11. inside of nav class => Remove fixed-top, change bg-inverse to bg-faded and change navbar-inverse to navbar-light
12. under the nav class tag insert div container div.container
13. at the app.component.html remove all the tag and insert these
    <div class="container">
    <router-outlet></router-outlet>
    </div>
14. for navbar => insert <app-navbar></app-navbar> this above container div class
15. At the navbar.component.html change Home tag to Dashboard and insert => routerLink="/" to a tag
16. npm install font-awesome --save
17. add "../node_modules/font-awesome/css/font-awesome.css", above bootstarp to the Scripts:[] of  .angular-cli.json file 




