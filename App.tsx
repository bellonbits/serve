import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Pricing } from './pages/Pricing';
import { Platform } from './pages/Platform';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard'; // New Dashboard Page
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://172.22.111.169:4000/graphql', // Updated endpoint path
  credentials: 'include', // Important for sending cookies
});

const client = new ApolloClient({
  link: httpLink, // No more authLink needed
  cache: new InMemoryCache(),
});

// Wrapper to handle scroll restoration on route change
const AppContent = () => {
  return (
    <div className="min-h-screen bg-dark-900 font-sans selection:bg-brand-500/30 text-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard Route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;