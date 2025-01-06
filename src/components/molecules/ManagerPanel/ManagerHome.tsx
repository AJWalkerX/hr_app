import React from 'react';
import { Card, CardContent, CardHeader, Typography, LinearProgress, Box } from '@mui/material';
import { BarChart, LineChart, PieChart, AreaChart, XAxis, YAxis, Tooltip, Legend, Bar, Line, Pie, Cell, ResponsiveContainer, Area, TooltipProps } from 'recharts';
import { FaUsers, FaBriefcase, FaFileAlt, FaCalendar } from 'react-icons/fa';

interface Payload {
  name: string;
  value: number;
  percent?: number;
} 
type Stat = {
  title: string;
  value: string;
  icon: React.ElementType;
  change: string;
  color: string;
};

type DepartmentData = {
  name: string;
  çalışan: number;
};

type MonthlyHiringData = {
  ay: string;
  işeAlım: number;
  iştenAyrılma: number;
};

type PerformanceData = {
  name: string;
  value: number;
};

const stats: Stat[] = [
  { title: "Toplam Çalışan", value: "248", icon: FaUsers, change: "+12%", color: "primary" },
  { title: "Açık Pozisyonlar", value: "15", icon: FaBriefcase, change: "+3", color: "success" },
  { title: "Onay Bekleyen İzinler", value: "8", icon: FaFileAlt, change: "-2", color: "warning" },
  { title: "Bu Ay Doğum Günü", value: "6", icon: FaCalendar, change: "", color: "secondary" }
];

const departmentData: DepartmentData[] = [
  { name: 'Yazılım', çalışan: 45 },
  { name: 'Enerji', çalışan: 30 },
  { name: 'Otomotiv', çalışan: 35 },
  { name: 'Eğitim', çalışan: 15 },
  { name: 'Sağlık', çalışan: 20 },
];

const monthlyHiringData: MonthlyHiringData[] = [
  { ay: 'Oca', işeAlım: 8, iştenAyrılma: 3 },
  { ay: 'Şub', işeAlım: 12, iştenAyrılma: 4 },
  { ay: 'Mar', işeAlım: 15, iştenAyrılma: 6 },
  { ay: 'Nis', işeAlım: 10, iştenAyrılma: 5 },
  { ay: 'May', işeAlım: 14, iştenAyrılma: 4 },
  { ay: 'Haz', işeAlım: 18, iştenAyrılma: 7 },
];

const performanceData: PerformanceData[] = [
  { name: 'Üstün', value: 15 },
  { name: 'İyi', value: 45 },
  { name: 'Orta', value: 30 },
  { name: 'Gelişmeli', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function ManagerHome() {
  return (
    <div style={{ padding: '0px', backgroundColor: '#f0f4f8', minHeight: '100vh', minWidth:'100%', marginBottom:'70px' }}>
      {/* Üst Başlık */}
      <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
        <Typography variant="body2" color="textSecondary" style={{ marginTop: '0' }}>
          Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
        </Typography>
      </div>

      {/* Ana İstatistikler */}
      <Box display="flex" flexWrap="wrap" gap="24px" marginTop="24px" >
        {stats.map((stat, index) => (
          <Card variant="outlined" key={index} style={{ flex: '1 1 calc(25% - 24px)', maxWidth: 'calc(25% - 24px)' }}>
            <CardContent style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <Typography variant="body2" color="textSecondary">{stat.title}</Typography>
                  <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                    <Typography variant="h6">{stat.value}</Typography>
                    {stat.change && (
                      <Typography variant="body2" color={stat.change.startsWith('+') ? 'green' : 'red'} style={{ marginLeft: '8px' }}>
                        {stat.change}
                      </Typography>
                    )}
                  </div>
                </div>
                <div style={{ backgroundColor: stat.color, borderRadius: '50%', padding: '12px' }}>
                  <stat.icon style={{ color: 'white', fontSize: '24px' }} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Grafikler */}
      <Box display="flex" flexWrap="wrap" gap="24px" marginTop="24px">
        {/* Departman Dağılımı */}
        <Card variant="outlined" style={{ flex: '1 1 calc(50% - 24px)', maxWidth: 'calc(50% - 24px)' }}>
          <CardHeader title="Departman Dağılımı" />
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={departmentData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="çalışan" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* İşe Alım Trendi */}
        <Card variant="outlined" style={{ flex: '1 1 calc(50% - 24px)', maxWidth: 'calc(50% - 24px)' }}>
          <CardHeader title="İşe Alım ve Ayrılma Trendi" />
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyHiringData}>
                <XAxis dataKey="ay" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="işeAlım" stroke="#4F46E5" />
                <Line type="monotone" dataKey="iştenAyrılma" stroke="#EF4444" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Performans Dağılımı */}
        <Card variant="outlined" style={{ flex: '1 1 calc(50% - 24px)', maxWidth: 'calc(50% - 24px)' }}>
          <CardHeader title="Performans Dağılımı" />
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={performanceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {performanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  content={({ payload }: TooltipProps<any, any>) => {
                    if (!payload || payload.length === 0) return null;

                    const firstPayload = payload[0] as Payload;  // Explicitly cast payload to Payload type

                    const { name, value, percent } = firstPayload;

                    return (
                      <div>
                        <p>{name}: {value}</p>
                        {percent !== undefined && <p>Percent: {percent}%</p>}
                      </div>
                    );
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Personel Dağılımı Trendi */}
        <Card variant="outlined" style={{ flex: '1 1 calc(50% - 24px)', maxWidth: 'calc(50% - 24px)' }}>
          <CardHeader title="Personel Dağılımı Trendi" />
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyHiringData}>
                <XAxis dataKey="ay" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="işeAlım" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Box>

      {/* Alt Kartlar */}
      <Box display="flex" flexWrap="wrap" gap="24px" marginTop="24px">
        {/* Performans Takibi */}
        <Card variant="outlined" style={{ flex: '1 1 calc(33% - 24px)', maxWidth: 'calc(33% - 24px)' }}>
          <CardHeader title="Performans Takibi" />
          <CardContent>
            <div>
              <Typography variant="body2" color="textSecondary">Değerlendirme Tamamlanma</Typography>
              <LinearProgress variant="determinate" value={82} color="primary" />
            </div>
          </CardContent>
        </Card>

        {/* İzin Durumu */}
        <Card variant="outlined" style={{ flex: '1 1 calc(33% - 24px)', maxWidth: 'calc(33% - 24px)' }}>
          <CardHeader title="İzin Durumu" />
          <CardContent>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <Typography variant="body2" color="textSecondary">Bekleyen İzinler</Typography>
                <Typography variant="h6">3</Typography>
              </div>
              <LinearProgress variant="determinate" value={30} color="warning" />
            </div>
          </CardContent>
        </Card>

        {/* Gerçekleştirilen Toplantılar */}
        <Card variant="outlined" style={{ flex: '1 1 calc(33% - 24px)', maxWidth: 'calc(33% - 24px)' }}>
          <CardHeader title="Gerçekleştirilen Toplantılar" />
          <CardContent>
            <div>
              <Typography variant="body2" color="textSecondary">Bu Ay Gerçekleştirilen Toplantılar</Typography>
              <Typography variant="h6">12</Typography>
            </div>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default ManagerHome;
