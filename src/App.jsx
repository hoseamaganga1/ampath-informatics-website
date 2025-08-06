
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import InformaticsSection from './components/InformaticsSection';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar />
      <main className="flex-grow">
        <MainSection />
        <InformaticsSection />
      </main>
     
      <Footer />
      
    </div>
  );
}

export default App;
