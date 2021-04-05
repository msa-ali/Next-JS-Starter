# Next-JS-Starter

---

## What is Next.js ?

- A React framework for production
- A fullstack framework for ReactJS
- NextJS solves common problems and makes building React apps easier
- You still write React code, build React components and use React features like props, state, context etc.
- NextJS just enhaces your React apps and add more features
- NextJS provides a lot of built-in features like routing that help you to solve common problems and clear guidance on how to use those features.

## Key Features and Benefits

- **Built-in Server-side Rendering support**

  - Server side rendering is all about preparing the content of a page on the server instead of client.
  - It allows us to pre-render React components on a server.
  - Great for SEO (Search Engine Optimization) and initial load.
  - Blending client-side and server side : Fetch data on the server and render the finished pages.

- **File-based Routing**

  - NextJS gets rid of in-code route definition concept.
  - Instead, you define pages and routes with files and folders.
  - You have a special pages folder in NextJS Apps which has to be named as 'pages' and then you are structuring that folder that defines the routes and paths your page supports.
  - Less code, less work, highly understandable

- **Fullstack Capabilities**
  - Easily add backend(server-side) code to your Next/React apps
  - Storing data, getting data, autentication etc. can be added to your React Projects.

## Create New NEXT.js App

npx create-next-app
or
yarn create next-app

## File-based Routing Instead of Code-based Routing

- Traditional React Routing config looks like this:

    <Switch>
      <Route path="/products">
        <ProductsPage />
      </Route>
      <Route path="/products/:id">
        <ProductDetailPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>

- Instead in Next.js , Create React component files and let Next.JS infer the routes from the folder structure.

- The Special _"/pages"_ folder

## How File-based Routing Works

Consider this file structure

- /pages
  - index.js --------------------------> my-domain.com/ ( Main Starting Page )
  - about.js --------------------------> my-domain.com/about
  - /products
    - index.js ------------------------> my-domain.com/products
    - [id].js -------------------------> my-domain.com/products/2 (adding dynamic path)

Next.js will look up these pages folder and now infer routes.
Based on index.js, it will infer it is Main Starting Point.
