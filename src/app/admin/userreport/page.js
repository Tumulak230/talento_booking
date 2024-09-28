"use client";

import Head from 'next/head';
import { Typography, Container, Paper, Box, Grid } from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import GroupAddIcon from '@mui/icons-material/GroupAdd'; // Icon for User Registrations
import StarIcon from '@mui/icons-material/Star'; // Icon for Talent Registrations
import InsightsIcon from '@mui/icons-material/Insights'; // Icon for Growth Insights
import RecommendIcon from '@mui/icons-material/Recommend'; // Icon for Recommendations

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Title, Tooltip, Legend);

const chartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
        {
            label: 'User Registrations',
            data: [30, 40, 20, 60],
            fill: true,
            backgroundColor: 'rgba(33, 150, 243, 0.5)',
            borderColor: 'rgba(33, 150, 243, 1)',
            tension: 0.4,
        },
        {
            label: 'Talent Registrations',
            data: [20, 25, 15, 30],
            fill: true,
            backgroundColor: 'rgba(255, 193, 7, 0.5)',
            borderColor: 'rgba(255, 193, 7, 1)',
            tension: 0.4,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: '#fff',
            bodyColor: '#fff',
        },
    },
};

export default function UserTalentReport() {
    return (
        <>
            <Head>
                <title>User and Talent Registration Report</title>
            </Head>
            <Container sx={{ mt: 4, mb: 4 }}>
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                        User and Talent Registration Report
                    </Typography>
                </Box>

                <Paper sx={{ p: 4, mb: 4, boxShadow: 3, borderRadius: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        <InsightsIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                        Overview
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        This report provides insights into user and talent registrations over the past month, helping you identify trends and growth opportunities.
                    </Typography>
                </Paper>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Paper sx={{ p: 4, boxShadow: 2, borderRadius: 2 }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                <GroupAddIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                                Registration Summary
                            </Typography>
                            <Typography variant="body1" sx={{ mt: 1 }}>
                                Total User Registrations: <strong>150</strong>
                            </Typography>
                            <Typography variant="body1">
                                Total Talent Registrations: <strong>80</strong>
                            </Typography>
                            <Typography variant="body1">
                                New Users Last Week: <strong>30</strong>
                            </Typography>
                            <Typography variant="body1">
                                New Talents Last Week: <strong>10</strong>
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Paper sx={{ p: 4, boxShadow: 2, borderRadius: 2 }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                <StarIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                                Growth Insights
                            </Typography>
                            <Typography variant="body1" sx={{ mt: 1 }}>
                                The user registration has shown a significant spike in Week 4, indicating effective marketing strategies.
                            </Typography>
                            <Typography variant="body1">
                                Talent registrations are gradually increasing; consider promotional efforts to boost these numbers.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>

                {/* Chart Section */}
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Weekly User and Talent Registrations
                    </Typography>
                    <Paper sx={{ p: 4, boxShadow: 2, borderRadius: 2 }}>
                        <Line data={chartData} options={options} />
                    </Paper>
                </Box>

                <Paper sx={{ p: 4, mt: 4, boxShadow: 2, borderRadius: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        <RecommendIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                        Recommendations
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        - Implement targeted advertising campaigns focusing on attracting more talents.
                    </Typography>
                    <Typography variant="body1">
                        - Enhance user experience on the platform to retain new users.
                    </Typography>
                    <Typography variant="body1">
                        - Conduct surveys to understand user preferences and improve service offerings.
                    </Typography>
                </Paper>
            </Container>
        </>
    );
}
