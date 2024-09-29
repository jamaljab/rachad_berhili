import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Players from './pages/Players';
import NewPlayer from './pages/NewPlayer';
import Coaches from './pages/Coaches';
import Announcements from './pages/Announcements';
import Membership from './pages/Membership';
import Archive from './pages/Archive';
import AdminDefault from './components/Admin/AdminDefault';
import CoachDefault from './components/Coach/CoachDefault';
import PlayerDefault from './components/Player/PlayerDefault';
import ProtectedRoute from './components/ProtectedRoute';

import './App.css';

function App() {
  // Function to determine if Header and Footer should be displayed
  const Layout = ({ children }) => {
    const location = useLocation();
    const noHeaderFooterRoutes = ['/admin', '/coach', '/player'];
    const shouldShowHeaderFooter = !noHeaderFooterRoutes.includes(location.pathname);

    return (
      <>
        {shouldShowHeaderFooter && <Header />}
        {children}
        {shouldShowHeaderFooter && <Footer />}
      </>
    );
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<Players />} />
          <Route path="/new-player" element={<NewPlayer />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/archive" element={<Archive />} />

          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route path="/admin" element={<AdminDefault />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={['coach']} />}>
            <Route path="/coach" element={<CoachDefault />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={['player']} />}>
            <Route path="/player" element={<PlayerDefault />} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
