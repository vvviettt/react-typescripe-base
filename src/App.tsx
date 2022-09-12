import { BrowserRouter, Route, Routes } from 'react-router-dom';
import publicRoutes from './configs/routes/public.routes';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let element: JSX.Element = <route.element />;
                        if (route.layout) {
                            element = (
                                <route.layout>
                                    <route.element />
                                </route.layout>
                            );
                        }
                        return <Route key={route.path} path={route.path} element={element} />;
                    })}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
