import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './routes/LoginPage';  // Import LoginPage
import SignupPage from './routes/Signup';
import CardList from './cardList';
import Header from './Header';
import Bottom from './bottom';
import Lovleen from './Lovleen';
import CardList2 from './CardList1';


function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path='/signup' element={<SignupPage />} />

                    <Route path="/" element={
                        <>
                            <img src={require('./deakin.jpg')} alt="deakin" style={{ width: '100%', height: '50%' }} />
                            <CardList />
                            <CardList2 />
                            {/* Note: This seems like a typo or an undefined component. Please fix or remove <staffList2/> */}
                            <Bottom />
                            <Lovleen />
                        </>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
