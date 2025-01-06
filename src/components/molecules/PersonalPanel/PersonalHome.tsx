import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  Container,
  Grid,
} from '@mui/material';
import {
  BarChart,
  PieChart,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Pie,
  Cell,
  ResponsiveContainer,
  Area,
} from 'recharts';
import { FaTasks, FaMedal, FaChartLine, FaClock } from 'react-icons/fa';

// Types
interface Stat {
    title: string;
    value: string;
    icon: React.ElementType;
    change: string;
    color: string;
  }
  
  interface TaskData {
    name: string;
    tamamlanan: number;
    tamamlanmayan: number;
  }
  
  interface PerformanceData {
    name: string;
    value: number;
  }
  
  // Mock Data
  const stats: Stat[] = [
    { title: 'Tamamlanan Görevler', value: '120', icon: FaTasks, change: '+15%', color: '#4F46E5' },
    { title: 'Aylık Performans', value: '85%', icon: FaMedal, change: '+5%', color: '#10B981' },
    { title: 'Toplam Çalışma Saatleri', value: '160', icon: FaClock, change: '-10h', color: '#F59E0B' },
    { title: 'Eğitim Katılımı', value: '95%', icon: FaChartLine, change: '+10%', color: '#6B7280' },
  ];
  
  const taskData: TaskData[] = [
    { name: 'Hafta 1', tamamlanan: 20, tamamlanmayan: 5 },
    { name: 'Hafta 2', tamamlanan: 25, tamamlanmayan: 3 },
    { name: 'Hafta 3', tamamlanan: 30, tamamlanmayan: 2 },
    { name: 'Hafta 4', tamamlanan: 28, tamamlanmayan: 4 },
  ];
  
  const performanceData: PerformanceData[] = [
    { name: 'Üstün', value: 10 },
    { name: 'İyi', value: 40 },
    { name: 'Orta', value: 30 },
    { name: 'Gelişmeli', value: 20 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  function PersonnelDashboard() {
    return (
      <Box
        sx={{
          backgroundColor: '#f0f4f8',
          minHeight: '100vh',
          padding: '24px',
        }}
      >
        {/* Üst Başlık */}
        <Container>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginBottom: '24px',
            }}
          >
            <Typography variant="body2" color="textSecondary">
              Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
            </Typography>
          </Box>
  
          {/* İstatistik Kartları */}
          <Grid container spacing={3}>
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card variant="outlined">
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <div>
                        <Typography variant="body2" color="textSecondary">
                          {stat.title}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                          <Typography variant="h6">{stat.value}</Typography>
                          {stat.change && (
                            <Typography
                              variant="body2"
                              sx={{
                                color: stat.change.startsWith('+') ? 'green' : 'red',
                                marginLeft: '8px',
                              }}
                            >
                              {stat.change}
                            </Typography>
                          )}
                        </Box>
                      </div>
                      <Box
                        sx={{
                          backgroundColor: stat.color,
                          borderRadius: '50%',
                          padding: '12px',
                        }}
                      >
                        <stat.icon style={{ color: 'white', fontSize: '24px' }} />
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
  
          {/* Grafikler */}
          <Grid container spacing={3} sx={{ marginTop: '24px' }}>
            {/* Görev Dağılımı */}
            <Grid item xs={12} md={6}>
              <Card variant="outlined">
                <CardHeader title="Görev Dağılımı" />
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={taskData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="tamamlanan" fill="#4F46E5" />
                      <Bar dataKey="tamamlanmayan" fill="#EF4444" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </Grid>
  
            {/* Performans Dağılımı */}
            <Grid item xs={12} md={6}>
              <Card variant="outlined">
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
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </Grid>
  
            {/* Çalışma Saatleri */}
            <Grid item xs={12} md={6}>
              <Card variant="outlined">
                <CardHeader title="Çalışma Saatleri" />
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={taskData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="tamamlanan" stroke="#4F46E5" fill="#4F46E5" />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }
  
  export default PersonnelDashboard;