import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { Services } from './components/Services';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Login } from './components/Login';
import { Footer } from './components/Footer';
import { useNavigationStore } from './store/navigationStore';

const queryClient = new QueryClient();

function App() {
  const { currentPage } = useNavigationStore();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex flex-col">
        <Navigation />
        <main className="flex-grow">
          {currentPage === 'home' && <Home />}
          {currentPage === 'services' && <Services />}
          {currentPage === 'about' && <About />}
          {currentPage === 'gallery' && <Gallery />}
          {currentPage === 'contact' && <Contact />}
          {currentPage === 'login' && <Login />}
        </main>
        <Footer />
        <Toaster position="top-center" />
      </div>
    </QueryClientProvider>
  );
}

export default App;