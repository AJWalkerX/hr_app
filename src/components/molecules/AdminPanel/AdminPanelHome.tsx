// src/AdminPanelHome.tsx
import React from 'react';
import AdminNavbar from './AdminNavbar';
import DashboardCard from './DashboardCard';

const AdminPanelHome: React.FC = () => {
    // Örnek veriler
    const data = {
        totalEmployees: 120,
        newHires: 5,
        leaveRequests: 3,
        performanceScore: 90,
    };

    return (
        <div>
            <AdminNavbar />
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                padding: '20px',
            }}>
                <DashboardCard title="Toplam Çalışan" value={data.totalEmployees} color="#2196F3" />
                <DashboardCard title="Yeni İşe Alımlar" value={data.newHires} color="#FFC107" />
                <DashboardCard title="İzin Talepleri" value={data.leaveRequests} color="#FF5722" />
                <DashboardCard title="Performans Skoru" value={`${data.performanceScore}%`} color="#4CAF50" />
            </div>
        </div>
    );
};

export default AdminPanelHome;
