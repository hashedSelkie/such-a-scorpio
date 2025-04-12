# SuchAScorpio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Workflow setup

### Environments

Navigate to this repo's `Settings` - `Environments` and create the following environments:

- `test`
    - Don't set `Required reviewers` because we want to deploy to test automatically
- `prod`
    - Set `Required reviewers`
    - Untick `Allow administrators to bypass configured protection rules`

### Secrets and variables

Navigate to this repo's `Settings` - `Secrets and variables` - `Actions`. Create a `New Repository Secret` for all of the following:

- `DOCKERHUB_TOKEN` and `DOCKERHUB_USERNAME`
    - These are to allow workflows to push images to Dockerhub
    - Generate these from DockerHub - `Account Settings` - `Personal access tokens`
        - Generate a PAT with `Read & Write` permissions
        - Once created, set `DOCKERHUB_TOKEN` and `DOCKERHUB_USERNAME` from the values shown
- `SITE_ROOT_PAT`
    - This allows workflows in this repo to commit to the `site-root` repo
    - Generate this from Github - your profile image - `Settings` - `Developer settings` - `Personal access tokens` - `Fine-grained tokens`
        - For Repository access, choose `Only select repositories` and select `such-a-scorpio-site-root`
        - For `Permissions` - `Repository permissions`:
            - Select `Read and write` for `Contents`
