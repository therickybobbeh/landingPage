"use client";
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AdminLayout from '../components/templates/AdminLayout';
import { Card, CardBody, CardHeader, Heading, Text, Icon } from '../components/atoms';
import { AnimatedCard, IconWithText } from '../components/molecules';

export default function AdminDashboard() {
  // Sample dashboard stats
  const stats: { label: string; count: number; icon: string; color: 'primary' | 'secondary' | 'tertiary' | 'white' | 'dark' | 'muted' }[] = [
    { label: 'Messages', count: 24, icon: 'envelope-fill', color: 'primary' },
    { label: 'Projects', count: 15, icon: 'folder-fill', color: 'secondary' },
    { label: 'Visitors', count: 1254, icon: 'people-fill', color: 'primary' },
    { label: 'Tasks', count: 7, icon: 'check2-square', color: 'muted' },
  ];
  
  // Sample recent messages
  const messages = [
    { 
      name: 'John Smith', 
      email: 'john@example.com', 
      subject: 'Project Inquiry', 
      date: '2 hours ago',
      read: false
    },
    { 
      name: 'Sarah Johnson', 
      email: 'sarah@company.com', 
      subject: 'Collaboration Opportunity', 
      date: '6 hours ago',
      read: true
    },
    { 
      name: 'Mike Davidson', 
      email: 'mike@tech.com', 
      subject: 'Website Feedback', 
      date: '1 day ago',
      read: true
    },
  ];

  return (
    <AdminLayout title="Dashboard Overview" activeItem="dashboard">
      {/* Stats Row */}
      <Row className="g-4 mb-4">
        {stats.map((stat, index) => (
          <Col key={index} md={3} sm={6}>
            <AnimatedCard 
              animationType="hover-lift"
              className="h-100 border-0 shadow-sm"
            >
              <CardBody className="d-flex align-items-center">
                <div className={`bg-${stat.color} bg-opacity-10 p-3 rounded me-3`}>
                  <Icon name={stat.icon} color={stat.color} size="lg" />
                </div>
                
                <div>
                  <Text variant="small" color="muted" className="mb-0">
                    {stat.label}
                  </Text>
                  <Heading level={3} className="mb-0">
                    {stat.count}
                  </Heading>
                </div>
              </CardBody>
            </AnimatedCard>
          </Col>
        ))}
      </Row>

      <Row className="mb-4">
        <Col lg={8}>
          {/* Recent Messages */}
          <Card className="shadow-sm border-0 h-100">
            <CardHeader className="bg-white border-0">
              <div className="d-flex justify-content-between align-items-center">
                <Heading level={5} className="mb-0">
                  Recent Messages
                </Heading>
                <a href="/admin/messages" className="btn btn-sm btn-primary">
                  View All
                </a>
              </div>
            </CardHeader>
            <CardBody className="p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="table-light">
                    <tr>
                      <th scope="col">Sender</th>
                      <th scope="col">Subject</th>
                      <th scope="col">Time</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {messages.map((message, index) => (
                      <tr key={index}>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="me-3">
                              <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                                <Text className="mb-0 fw-bold">{message.name.charAt(0)}</Text>
                              </div>
                            </div>
                            <div>
                              <Text className="mb-0 fw-medium">{message.name}</Text>
                              <Text variant="small" color="muted">{message.email}</Text>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle">
                          <Text className={`mb-0 ${!message.read ? 'fw-bold' : ''}`}>
                            {message.subject}
                          </Text>
                        </td>
                        <td className="align-middle">
                          <Text variant="small" color="muted">
                            {message.date}
                          </Text>
                        </td>
                        <td className="align-middle">
                          <span className={`badge bg-${message.read ? 'success' : 'primary'} rounded-pill`}>
                            {message.read ? 'Read' : 'New'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col lg={4}>
          {/* Quick Actions */}
          <Card className="shadow-sm border-0 h-100">
            <CardHeader className="bg-white border-0">
              <Heading level={5} className="mb-0">
                Quick Actions
              </Heading>
            </CardHeader>
            <CardBody>
              <div className="d-grid gap-2">
                <a href="/admin/messages/new" className="btn btn-outline-primary">
                  <Icon name="pencil-square" className="me-2" />
                  Create New Message
                </a>
                <a href="/admin/projects/new" className="btn btn-outline-secondary">
                  <Icon name="folder-plus" className="me-2" />
                  Add New Project
                </a>
                <a href="/admin/profile" className="btn btn-outline-dark">
                  <Icon name="person-gear" className="me-2" />
                  Update Profile
                </a>
                <a href="/admin/settings" className="btn btn-outline-info">
                  <Icon name="gear" className="me-2" />
                  Site Settings
                </a>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="shadow-sm border-0">
            <CardHeader className="bg-white border-0">
              <Heading level={5} className="mb-0">
                System Information
              </Heading>
            </CardHeader>
            <CardBody>
              <Row className="g-4">
                <Col md={4}>
                  <IconWithText
                    iconName="hdd-stack"
                    title="Next.js + FastAPI"
                    subtitle="Technology Stack"
                    iconClassName="bg-primary bg-opacity-10 p-3 rounded"
                  />
                </Col>
                <Col md={4}>
                  <IconWithText
                    iconName="arrow-clockwise"
                    title="Last Updated"
                    subtitle={new Date().toLocaleDateString()}
                    iconClassName="bg-info bg-opacity-10 p-3 rounded"
                  />
                </Col>
                <Col md={4}>
                  <IconWithText
                    iconName="shield-check"
                    title="System Status"
                    subtitle="All systems operational"
                    iconClassName="bg-success bg-opacity-10 p-3 rounded"
                  />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </AdminLayout>
  );
}