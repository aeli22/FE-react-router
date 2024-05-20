import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Menu from './pages/Menu';
import Header from './containers/Header';
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/Main" element={<Main />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/product/:brand" element={<Product />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
