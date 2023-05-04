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
import PrivateRoute from './routs/PrivateRoute.jsx';
import NotFound from './components/NotFound/NotFound.jsx';

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
        element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://chefs-corner-server-chowdhuryshahriar12-gmailcom.vercel.app/chef/${params.chefId}`)
      },
      {
        path: "/recipe/:id",
        element: <PrivateRoute><RecipeDetails></RecipeDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://chefs-corner-server-chowdhuryshahriar12-gmailcom.vercel.app/recipe/${params.id}`)
      }
    ]
  },
  {
    path: '*',
    element: <NotFound></NotFound>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
