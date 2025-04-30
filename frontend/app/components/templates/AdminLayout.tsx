import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Heading, Icon } from '../atoms';
import Link from 'next/link';

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
  activeItem?: string;
}

const AdminLayout = ({ 
  children, 
  title,
  activeItem = 'dashboard'
}: AdminLayoutProps) => {
  const navItems = [
    { key: 'dashboard', label: 'Dashboard', icon: 'speedometer2', href: '/admin' },
    { key: 'messages', label: 'Messages', icon: 'envelope', href: '/admin/messages' },
    { key: 'projects', label: 'Projects', icon: 'collection', href: '/admin/projects' },
    { key: 'settings', label: 'Settings', icon: 'gear', href: '/admin/settings' },
  ];
  
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* Top Navigation */}
      <header className="bg-primary py-3">
        <Container fluid>
          <div className="d-flex justify-content-between align-items-center">
            <Heading level={4} color="white" className="mb-0">
              Admin Dashboard
            </Heading>
            <div className="d-flex align-items-center">
              <Link href="/frontend/public" className="btn btn-sm btn-outline-light">
                <Icon name="house" className="me-1" />
                View Site
              </Link>
            </div>
          </div>
        </Container>
      </header>
      
      <div className="flex-grow-1 d-flex">
        {/* Sidebar */}
        <aside className="bg-dark text-white" style={{ width: '240px', minHeight: 'calc(100vh - 60px)' }}>
          <div className="p-3">
            <Nav className="flex-column">
              {navItems.map((item) => (
                <Link 
                  key={item.key} 
                  href={item.href}
                  className={`nav-link py-2 px-3 rounded mb-2 ${activeItem === item.key ? 'bg-primary' : 'text-white'}`}
                >
                  <Icon name={item.icon} className="me-2" />
                  {item.label}
                </Link>
              ))}
              
              <hr className="my-3 border-secondary" />
              
              <Link href="/api/auth/signout" className="nav-link py-2 px-3 text-danger">
                <Icon name="box-arrow-right" className="me-2" />
                Logout
              </Link>
            </Nav>
          </div>
        </aside>
        
        {/* Main Content */}
        <main className="flex-grow-1 py-4">
          <Container fluid>
            <Heading level={2} className="mb-4">{title}</Heading>
            {children}
          </Container>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;