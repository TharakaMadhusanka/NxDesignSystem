1. Create Workspace

`npx create-nx-workspace@latest --name=dso-ui-workspace --preset=angular-monorepo --style=scss --prefix=dso-ui`

2. Create Angular App

`npx nx g @nx/angular:app apps/appName`

3. Create Angular Lib

`npx nx g @nx/angular:library --name=table --directory=packages/dso-ui-components/table --publishable --importPath=@dso/table --style=scss`

4. List Projects

`npx nx show projects`

5. Serve Project

`npx nx serve app-name`

6. Build App

`npx nx build app-name`

7. View DI Graph

`npx nx graph`
