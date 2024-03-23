import {createBrowserRouter, Navigate} from "react-router-dom";


import {GenresPage, MoviesPage} from "./pages";
import {MainLayout} from "./layouts";


const router = createBrowserRouter([
    {
        path: '',element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'movies'}/>
            },
            {
                path: 'movies', element: <MoviesPage/>
            },
            {
                path: 'genres', element: <GenresPage/>
            }
        ]
    }
])

export {
    router
}