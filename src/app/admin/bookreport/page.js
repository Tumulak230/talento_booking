"use client";

import Head from 'next/head';
import { Typography, Container, Paper, Grid, Card, CardContent, Divider, Button, Box } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import EventNoteIcon from '@mui/icons-material/EventNote'; // Icon for Overview
import BookIcon from '@mui/icons-material/Book'; // Icon for Total Bookings Summary
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Icon for Completed Events
import CancelIcon from '@mui/icons-material/Cancel'; // Icon for Cancellations
import DownloadIcon from '@mui/icons-material/Download'; // Icon for Export Report

// Register the required components
Chart.register(...registerables);

export default function BookingsReport() {
    // Sample data for chart
    const data = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Total Bookings',
                data: [20, 15, 25, 30],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Number of Bookings',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Weeks',
                },
            },
        },
        plugins: {
            legend: {
                position: 'top',
            },
        },
    };

    return (
        <>
            <Head>
                <title>Bookings Report</title>
            </Head>
            <Container sx={{ mt: 4, mb: 4 }}>
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                        Bookings Report
                    </Typography>
                </Box>

                <Paper sx={{ p: 4, mb: 4, boxShadow: 3, borderRadius: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        <EventNoteIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                        Overview
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        This report provides data on bookings, cancellations, and completed events over the past month.
                    </Typography>
                </Paper>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
                        <Card sx={{ boxShadow: 3 }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                                    Total Bookings Chart
                                </Typography>
                                <Bar data={data} options={options} />
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Paper sx={{ p: 4, boxShadow: 2, borderRadius: 2 }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                <BookIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                                Total Bookings Summary
                            </Typography>
                            <Divider sx={{ my: 2 }} />
                            <Typography variant="body1">
                                <CheckCircleIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                                Total Bookings: <strong>75</strong>
                            </Typography>
                            <Typography variant="body1">
                                <CheckCircleIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                                Completed Events: <strong>60</strong>
                            </Typography>
                            <Typography variant="body1">
                                <CancelIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                                Cancellations: <strong>15</strong>
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<DownloadIcon />} // Add icon to button
                                sx={{ mt: 3 }}
                            >
                                Export Report
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
