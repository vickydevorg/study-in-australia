import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Melbourne from './pages/Melbourne';
import Sydney from './pages/Sydney';
import Brisbane from './pages/Brisbane';
import Adelaide from './pages/Adelaide';
import Perth from './pages/Perth';
import Dawin from './pages/Dawin';
import Tasmania from './pages/Tasmania';
import Canberra from './pages/Canberra';
import StudentGuideAustralia from './pages/StudentGuideAustralia';

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/melbourne" element={<Melbourne />} />
                    <Route path="/sydney" element={<Sydney />} />
                    <Route path="/brisbane" element={<Brisbane />} />
                    <Route path="/adelaide" element={<Adelaide />} />
                    <Route path="/perth" element={<Perth />} />
                    <Route path="/dawin" element={<Dawin />} />
                    <Route path="/tasmania" element={<Tasmania />} />
                    <Route path="/canberra" element={<Canberra />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/student-guid-australia" element={<StudentGuideAustralia />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;