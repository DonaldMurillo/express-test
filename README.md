# Resources:
- [Medium: Getting started with Typescript, nodejs and express](https://medium.com/@pankaj.itdeveloper/getting-started-using-typescript-with-node-js-and-express-6aff573667d5)

- [LogRocket: Typescript with nodejs and express](https://blog.logrocket.com/typescript-with-node-js-and-express/)

- [Markdown: Guide to markdown](https://www.markdownguide.org/basic-syntax/)

# Packages:
- typescript 
- ts-node 
- nodemon 
- express @types/express

# Guide:
- start a project

        yarn init
- install packages

        yarn add typescript ts-node nodemon express @types/express
- add to `package.json` scripts:

        "scripts": {
            ........,
            "tsc": "tsc",
            "start": "nodemon server.ts"
        }
    It will allow `nodemon` to monitor and update when we change the `server.ts` file.

    It will also allow the use of `tsc` command to create `tsconfig.json` file
- run           
        
        yarn tsc --init
    This will create a new `tsconfig.json` file
- Create `server.ts`



<code>npm init</code>

<code>npm install typescript</code>

<code>"scripts": {
........,
 "tsc": "tsc"
}</code>

<code>npx tsc --init</code>

<code>npm install express @types/express</code>

<code>npm run tsc</code>

yarn add -D nodemon

yarn add -D typescript ts-node

TODO: GITIGNORE