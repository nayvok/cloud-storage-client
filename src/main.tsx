import ReactDOM from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";
import {store} from "./api/store.ts";
import {router} from "./routes.tsx";
import AuthGuard from "./features/user/AuthGuard.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <AuthGuard>
            <RouterProvider router={router}/>
        </AuthGuard>
    </Provider>,
)
