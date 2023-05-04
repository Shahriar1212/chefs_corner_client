import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './components/Blog/Blog.jsx';
import ChefDetails from './components/ChefDetails/ChefDetails.jsx';
import RecipeDetails from './components/RecipeDetails/RecipeDetails.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/chef/:chefId",
        element: <ChefDetails></ChefDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/chef/${params.chefId}`)
      },
      {
        path: "/recipe/:id",
        element: <RecipeDetails></RecipeDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/recipe/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
