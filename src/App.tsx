import { ComponentProps, useState } from 'react';
import { ModeToggle } from './components/mode-toggle';
import { useTheme } from './components/theme-provider';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card';
import { cn } from './lib/utils';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../src/pages/home';
import About from '../src/pages/about';
import Login from '../src/pages/login';
import Layout from '../src/pages/layout'
import Playground from '../src/pages/playground';
const CodeText = (props: ComponentProps<'span'>) => {
  return <span {...props} className={cn(props.className, 'bg-muted text-muted-foreground rounded font-mono text-sm p-1')} />
}

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            
          </ul>
        </nav>

        <Routes>
          {/* 更新了這部分，使用 element 而不是 component，並移除了 exact 屬性 */}

          <Route path="/" element={<Home />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/layout" element={<Layout />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
