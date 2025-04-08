import { ComponentProps } from 'react';
import { ThemeProvider } from './components/theme-provider';
import { cn } from './lib/utils';
import { ThemeToggle } from './components/ui/theme-toggle';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../src/pages/home';
import About from '../src/pages/about';
import Login from '../src/pages/login';
import Layout from '../src/pages/layout'
import Signup from '../src/pages/signup';
import Playground from '../src/pages/playground';
import { useEffect } from "react";

const App = () => {
 
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="min-h-screen bg-background text-foreground">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/layout" element={<Layout />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <ThemeToggle />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
