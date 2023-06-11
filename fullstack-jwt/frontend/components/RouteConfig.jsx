import { createBrowserRouter } from "react-router-dom"

import { Root } from "./Root"
//import StartPage from "./Start"
import Login from "./Login"
import Koda from "./koda"
import Group1 from "./Group1"

const router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,

      children: [
        {
          path: '/login',
          element: <Login/>
        },
        {
            path: '/koda',
            element: <Koda/>
        },
        {
            path: '/group1',
            element: <Group1/>
        }
      ]
    }

])

export default router