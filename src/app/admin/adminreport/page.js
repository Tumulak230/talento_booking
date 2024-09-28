"use client";

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider, Typography, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BookingIcon from '@mui/icons-material/Event';
import GroupIcon from '@mui/icons-material/Group';
import BarChartIcon from '@mui/icons-material/BarChart';
import ReportIcon from '@mui/icons-material/Report';

export default function Reports() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    return (
        <>
            <Head>
                <title>TALENTO - Reports</title>
            </Head>
            <div className="flex h-screen bg-gray-100">
                {/* MUI Drawer with Indigo-700 background */}
                <Drawer
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                    PaperProps={{
                        sx: {
                            backgroundColor: '#4338ca', // Indigo-700 color
                            color: 'white', // Set text color to white for visibility
                        }
                    }}
                >
                    <div
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                        style={{ width: 250 }}
                    >
                        <div className="p-4">
                            <div className="flex items-center mb-6">
                                {/* Logo */}
                                <Avatar
                                    alt="TALENTO"
                                    src="/logotalentos.png" // Path to logo
                                    sx={{ width: 40, height: 40 }}
                                    className="mr-2"
                                />
                                <Typography variant="h6" className="font-bold">
                                    TALENTO
                                </Typography>
                            </div>
                        </div>
                        <Divider sx={{ backgroundColor: 'white' }} />
                        <List>
                            <ListItem button component={Link} href="/admin/adminboard">
                                <ListItemIcon>
                                    <DashboardIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItem>
                            <ListItem button component={Link} href="/admin/adminreport">
                                <ListItemIcon>
                                    <AssessmentIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="Reports" />
                            </ListItem>
                            <ListItem button component={Link} href="/admin/adminbook">
                                <ListItemIcon>
                                    <BookingIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="Admin Bookings" />
                            </ListItem>
                            <ListItem button component={Link} href="/admin/manageuser">
                                <ListItemIcon>
                                    <GroupIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="Users" />
                            </ListItem>
                            <ListItem button component={Link} href="/admin/logout">
                                <ListItemIcon>
                                    <LogoutIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="Log Out" />
                            </ListItem>
                        </List>
                    </div>
                </Drawer>

                {/* Button to open Drawer */}
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                    className="absolute top-4 left-4"
                >
                    <MenuIcon />
                </IconButton>

                {/* Main content */}
                <main className="flex-1 p-6 ml-16">
                    <header className="flex justify-between items-center mb-6">
                        <Typography variant="h4" className="font-bold">
                            Reports Dashboard
                        </Typography>
                    </header>

                    <section>
                        <div className="space-y-6">
                            {/* Report Section 1: User Activity */}
                            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
                                <div className="flex items-center">
                                    <BarChartIcon sx={{ fontSize: 40 }} className="text-blue-500 mr-4" />
                                    <Typography variant="h6" className="font-semibold">
                                        User Activity Report
                                    </Typography>
                                </div>
                                <Typography variant="body2" className="mt-2">
                                    See insights on user registrations, logins, and engagement metrics.
                                </Typography>
                                <Link href="/admin/userreport">
                                    <Typography variant="body2" className="mt-4 text-blue-500 cursor-pointer">
                                        View Report
                                    </Typography>
                                </Link>
                            </div>

                            {/* Report Section 2: Bookings Report */}
                            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
                                <div className="flex items-center">
                                    <BookingIcon sx={{ fontSize: 40 }} className="text-green-500 mr-4" />
                                    <Typography variant="h6" className="font-semibold">
                                        Bookings Report
                                    </Typography>
                                </div>
                                <Typography variant="body2" className="mt-2">
                                    Analyze data on bookings, cancellations, and completed events.
                                </Typography>
                                <Link href="/admin/bookreport">
                                    <Typography variant="body2" className="mt-4 text-green-500 cursor-pointer">
                                        View Report
                                    </Typography>
                                </Link>
                            </div>

                            {/* Report Section 3: Financial Report */}
                            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
                                <div className="flex items-center">
                                    <ReportIcon sx={{ fontSize: 40 }} className="text-red-500 mr-4" />
                                    <Typography variant="h6" className="font-semibold">
                                        Financial Report
                                    </Typography>
                                </div>
                                <Typography variant="body2" className="mt-2">
                                    Review income, expenses, and overall financial performance.
                                </Typography>
                                <Link href="/admin/financial">
                                    <Typography variant="body2" className="mt-4 text-red-500 cursor-pointer">
                                        View Report
                                    </Typography>
                                </Link>
                            </div>

                            {/* Additional Report Sections */}
                            {/* Add more sections as needed in the same format */}
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
