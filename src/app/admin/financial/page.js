"use client";

import Head from 'next/head';
import { Typography, Container, Paper, Box } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'; // Icon for Financial Overview
import AssessmentIcon from '@mui/icons-material/Assessment'; // Icon for Financial Summary

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const chartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
        {
            label: 'Income',
            data: [3000, 2500, 4000, 3500],
            backgroundColor: 'rgba(76, 175, 80, 0.6)',
        },
        {
            label: 'Expenses',
            data: [1000, 700, 800, 500],
            backgroundColor: 'rgba(244, 67, 54, 0.6)',
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

export default function FinancialReport() {
    return (
        <>
            <Head>
                <title>Financial Report</title>
            </Head>
            <Container sx={{ mt: 4, mb: 4 }}>
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                        Financial Report
                    </Typography>
                </Box>

                <Paper sx={{ p: 4, mb: 4, boxShadow: 3, borderRadius: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        <MonetizationOnIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                        Overview
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        This report summarizes income, expenses, and overall financial performance for the month.
                    </Typography>
                </Paper>

                <Paper sx={{ p: 4, mb: 4, boxShadow: 2, borderRadius: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        <AssessmentIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                        Financial Summary
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        Total Income: <strong>$10,000</strong>
                    </Typography>
                    <Typography variant="body1">
                        Total Expenses: <strong>$3,000</strong>
                    </Typography>
                    <Typography variant="body1">
                        Net Profit: <strong>$7,000</strong>
                    </Typography>
                </Paper>

                {/* Chart Section */}
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Monthly Income and Expenses
                    </Typography>
                    <Paper sx={{ p: 4, boxShadow: 2, borderRadius: 2 }}>
                        <Bar data={chartData} options={options} />
                    </Paper>
                </Box>
            </Container>
        </>
    );
}
