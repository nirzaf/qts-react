'use client';

import { useState } from 'react';

type AppData = {
  name: string;
  icon: string;
  description: string;
  plan: string;
  features: string[];
};

type AppsDataType = {
  [key: string]: AppData[];
};

type LicenseDetailsType = {
  installable: string;
  phones: string;
};

type CategoryType = {
  id: string;
  name: string;
};

const Microsoft365AppsTable = () => {
  const [activeTab, setActiveTab] = useState('business');

  const categories: CategoryType[] = [
    { id: 'business', name: 'Business Apps' },
    { id: 'office', name: 'Office Apps' },
    { id: 'collaboration', name: 'Collaboration & Communication' },
    { id: 'enterprise', name: 'Enterprise Management' }
  ];

  // Apps data organized by category
  const appsData: AppsDataType = {
    business: [
      { name: 'Power BI', icon: '📊', description: 'Analytics and data visualization tool', plan: 'Included', features: ['Analyze in Excel and Power BI', 'App workspaces', 'Connect to cloud and on-premise data', 'Enterprise distribution', 'Export to PowerPoint, Excel, CSV', 'Peer-to-peer sharing and collaboration', 'Publish to the Power BI service'] },
      { name: 'Flow', icon: '🔄', description: 'Workflow automation tool', plan: 'Flow for Office 365 Plan 2', features: [] },
      { name: 'PowerApps', icon: '⚡', description: 'Low-code application development platform', plan: 'Included', features: [] },
      { name: 'Microsoft Connections', icon: '🔗', description: 'Email marketing service', plan: 'Included', features: [] },
      { name: 'Microsoft Listings', icon: '📋', description: 'Business listing management', plan: 'Included', features: [] },
      { name: 'Microsoft Bookings', icon: '📅', description: 'Appointment scheduling system', plan: 'Included', features: [] },
      { name: 'Kaizala', icon: '📱', description: 'Mobile chat app for organizations', plan: 'Included', features: [] },
      { name: 'Forms', icon: '📝', description: 'Survey and quiz creation tool', plan: 'Included', features: [] },
      { name: 'To-Do', icon: '✓', description: 'Task management app', plan: 'Included', features: [] },
      { name: 'StaffHub', icon: '👥', description: 'Staff scheduling and management', plan: 'Included', features: [] },
    ],
    office: [
      { name: 'Outlook', icon: '📧', description: 'Email and calendar application', plan: 'Included', features: [] },
      { name: 'Word', icon: '📄', description: 'Word processing application', plan: 'Included', features: [] },
      { name: 'Excel', icon: '📊', description: 'Spreadsheet application', plan: 'Included', features: [] },
      { name: 'PowerPoint', icon: '📊', description: 'Presentation software', plan: 'Included', features: [] },
      { name: 'OneNote', icon: '📔', description: 'Note-taking application', plan: 'Included', features: [] },
      { name: 'Excel Power Query and Power Pivot', icon: '📊', description: 'Data analysis tools for Excel', plan: 'Included', features: [] },
    ],
    collaboration: [
      { name: 'Exchange', icon: '📨', description: 'Email server', plan: 'Plan 2', features: [] },
      { name: 'OneDrive', icon: '☁️', description: 'File hosting service', plan: 'Plan 2', features: [] },
      { name: 'SharePoint', icon: '🔄', description: 'Collaborative platform', plan: 'Included', features: [] },
      { name: 'Skype for Business', icon: '💬', description: 'Business communication tool', plan: 'Instant messaging only', features: [] },
      { name: 'Teams', icon: '👥', description: 'Team collaboration hub', plan: 'Included', features: [] },
      { name: 'Yammer', icon: '🗣️', description: 'Enterprise social networking service', plan: 'Included', features: [] },
    ],
    enterprise: [
      { name: 'InfoPath', icon: '📋', description: 'Form development application', plan: 'Included', features: [] },
      { name: 'Azure Active Directory', icon: '🔐', description: 'Identity and access management', plan: 'Premium P2', features: [] },
      { name: 'Microsoft Intune', icon: '📱', description: 'Cloud-based device management', plan: 'Included', features: [] },
      { name: 'Cloud app security', icon: '🛡️', description: 'Cloud access security broker', plan: 'Included', features: [] },
      { name: 'Azure Information Protection', icon: '🔒', description: 'Document protection service', plan: 'Plan 2', features: [] },
      { name: 'Azure Multi-Factor Authentication', icon: '🔑', description: 'Two-factor authentication service', plan: 'Included', features: [] },
      { name: 'Azure Rights Management', icon: '⚖️', description: 'Information protection technology', plan: 'Included', features: [] },
      { name: 'Azure Advanced Threat Protection', icon: '🛡️', description: 'Cloud security service', plan: 'Included', features: [] },
      { name: 'Threat Intelligence', icon: '🔍', description: 'Security intelligence service', plan: 'Included', features: [] },
      { name: 'Phone System', icon: '☎️', description: 'Cloud-based phone system', plan: 'Included', features: [] },
    ]
  };

  const licenseDetails: LicenseDetailsType = {
    installable: '5 per user',
    phones: '5 per user/device'
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">Microsoft 365 Enterprise Apps and Services</h1>
      
      <div className="mb-4 bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">License Coverage</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <span className="text-gray-700 mr-2">💻</span>
            <span>Installable on PCs or Macs:</span>
            <span className="ml-2 font-semibold">{licenseDetails.installable}</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-700 mr-2">📱</span>
            <span>Phones and tablets per user:</span>
            <span className="ml-2 font-semibold">{licenseDetails.phones}</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="flex border-b">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-4 py-3 text-sm font-medium ${
                activeTab === category.id 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="p-4">
          <div className="grid grid-cols-1 gap-4">
            {appsData[activeTab].map((app, index) => (
              <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
                <div className="flex items-center p-4 bg-gray-50">
                  <span className="text-2xl mr-3">{app.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800">{app.name}</h3>
                    <p className="text-sm text-gray-600">{app.description}</p>
                  </div>
                  <div className="flex items-center">
                    <div className={`px-3 py-1 rounded text-sm ${
                      app.plan.includes('Plan') && !app.plan.includes('Included') 
                        ? 'bg-blue-100 text-blue-800' 
                        : app.plan === 'Included' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                    }`}>
                      {app.plan}
                    </div>
                    {app.plan === 'Included' && (
                      <span className="ml-2 text-green-500 text-xl">✓</span>
                    )}
                  </div>
                </div>
                
                {app.features.length > 0 && (
                  <div className="p-4 border-t">
                    <p className="text-sm font-medium text-gray-700 mb-2">Features:</p>
                    <ul className="text-sm text-gray-600">
                      {app.features.map((feature, i) => (
                        <li key={i} className="flex items-start mb-1">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-blue-700 text-white p-4 rounded shadow-md">
        <h2 className="font-medium mb-2">About Microsoft 365 Enterprise</h2>
        <p className="text-sm">
          Boost employee productivity with apps that help your organization automate processes, 
          plan and track projects, create workflows, and more. Office 365 apps empower your employees to create, 
          collaborate, and share work wherever they are, on any device.
        </p>
      </div>
    </div>
  );
};

export default Microsoft365AppsTable;
