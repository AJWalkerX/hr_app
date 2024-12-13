// src/components/DashboardCard.tsx
import React from 'react';

interface DashboardCardProps {
    title: string;
    value: string | number;
    color?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, color }) => {
    return (
        <div style={{
            backgroundColor: color || '#4CAF50',
            color: '#fff',
            padding: '20px',
            borderRadius: '8px',
            margin: '10px',
            textAlign: 'center',
            width: '200px',
        }}>
            <h3>{title}</h3>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{value}</p>
        </div>
    );
};

export default DashboardCard;
