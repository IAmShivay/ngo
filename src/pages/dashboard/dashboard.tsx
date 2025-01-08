import React, { useState } from "react";
import {
  LayoutDashboard,
  Navigation,
  Video,
  Image,
  ChevronRight,
  User,
  Bell,
  Search,
} from "lucide-react";
import UpdateGallery from "./updateGallery";

// Enhanced Components for each section with better visual structure
const UpdateHeader = () => (
  <div className="bg-white rounded-lg shadow-sm p-8">
    <h2 className="text-xl font-semibold mb-6">Header Configuration</h2>
    <div className="space-y-4">
      <div className="p-4 border rounded-md bg-gray-50">
        Content coming soon...
      </div>
    </div>
  </div>
);

const UpdateNavbar = () => (
  <div className="bg-white rounded-lg shadow-sm p-8">
    <h2 className="text-xl font-semibold mb-6">Navigation Settings</h2>
    <div className="space-y-4">
      <div className="p-4 border rounded-md bg-gray-50">
        Content coming soon...
      </div>
    </div>
  </div>
);

const UpdateFooter = () => (
  <div className="bg-white rounded-lg shadow-sm p-8">
    <h2 className="text-xl font-semibold mb-6">Footer Configuration</h2>
    <div className="space-y-4">
      <div className="p-4 border rounded-md bg-gray-50">
        Content coming soon...
      </div>
    </div>
  </div>
);

const UpdateVideo = () => (
  <div className="bg-white rounded-lg shadow-sm p-8">
    <h2 className="text-xl font-semibold mb-6">Video Management</h2>
    <div className="space-y-4">
      <div className="p-4 border rounded-md bg-gray-50">
        Content coming soon...
      </div>
    </div>
  </div>
);


const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("header");

  const options = [
    { id: "header", label: "Update Header", icon: LayoutDashboard },
    { id: "navbar", label: "Update Navbar", icon: Navigation },
    // { id: "footer", label: "Update Footer", icon: Footer },
    { id: "video", label: "Update Video", icon: Video },
    { id: "gallery", label: "Update Gallery", icon: Image },
  ];

  const renderComponent = () => {
    switch (activeComponent) {
      case "header":
        return <UpdateHeader />;
      case "navbar":
        return <UpdateNavbar />;
      case "footer":
        return <UpdateFooter />;
      case "video":
        return <UpdateVideo />;
      case "gallery":
        return <UpdateGallery />;
      default:
        return (
          <div className="p-8 text-center text-gray-500">
            Select an option from the sidebar
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Sidebar */}
      <aside className="w-full md:w-72 bg-gradient-to-b from-blue-900 to-blue-950 text-white flex flex-col">
        <div className="p-6 bg-blue-800">
          <h1 className="text-2xl font-bold tracking-tight">CMS Dashboard</h1>
          <p className="text-blue-200 text-sm mt-1">
            Content Management System
          </p>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="space-y-2">
            {options.map((option) => {
              const Icon = option.icon;
              return (
                <li key={option.id}>
                  <button
                    onClick={() => setActiveComponent(option.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm
                      ${
                        activeComponent === option.id
                          ? "bg-blue-800/50 text-white font-medium shadow-lg"
                          : "text-blue-100 hover:bg-blue-800/30"
                      }`}
                  >
                    <Icon size={18} />
                    <span>{option.label}</span>
                    {activeComponent === option.id && (
                      <ChevronRight size={16} className="ml-auto" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 text-center text-sm bg-blue-950/50 border-t border-blue-800/50">
          <p className="text-blue-200">&copy; 2024 CMS System</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-auto">
        {/* Top Navigation */}
        <header className="bg-white border-b px-8 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative flex-1 max-w-xl">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="search"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Bell size={20} className="text-gray-600" />
            </button>
            <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg">
              <User size={20} className="text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Admin</span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-800">
              {options.find((option) => option.id === activeComponent)?.label}
            </h1>
            <p className="text-gray-500 mt-1">
              Manage your website's {activeComponent} content and settings
            </p>
          </div>

          {renderComponent()}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
