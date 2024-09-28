"use client";

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider, Typography, Button, Card, CardContent } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BookingIcon from '@mui/icons-material/Event';
import GroupIcon from '@mui/icons-material/Group';
import EventAvailableIcon from '@mui/icons-material/EventAvailable'; 
import PeopleIcon from '@mui/icons-material/People'; 
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'; 
import PendingActionsIcon from '@mui/icons-material/PendingActions'; 

export default function AdminDashboard() {
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
                <title>TALENTO - Admin Dashboard</title>
            </Head>
            <div className="flex h-screen bg-gray-100">
                {/* MUI Drawer  */}
                <Drawer
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                    PaperProps={{
                        sx: {
                            backgroundColor: '#4338ca', 
                            color: 'white', 
                            width: 250,
                        }
                    }}
                >
                    <div
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                    >
                        <div className="p-4">
                            <div className="flex items-center mb-6">
                                {/* Logo */}
                                <Image
                                    src="/logotalentos.png"
                                    alt="TALENTO Logo"
                                    width={40}
                                    height={40}
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

                {/* Drawer */}
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                    className="absolute top-4 left-4 z-10"
                >
                    <MenuIcon />
                </IconButton>

                {/* Main content */}
                <main className="flex-1 p-6 ml-16">
                    <header className="flex justify-between items-center mb-6">
                        <Typography variant="h4" className="font-bold">
                            Admin Dashboard
                        </Typography>
                        <Button variant="outlined" color="primary" className="hover:bg-indigo-700 hover:text-white transition">
                            View All Requests
                        </Button>
                    </header>

                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Cards */}
                        <Card className="shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
                            <CardContent className="flex items-center">
                                <EventAvailableIcon sx={{ fontSize: 40, color: '#4338ca' }} />
                                <div className="ml-4">
                                    <Typography variant="h5" className="font-semibold">
                                        Total Bookings
                                    </Typography>
                                    <Typography variant="h4" className="font-bold text-indigo-600">
                                        120
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
                            <CardContent className="flex items-center">
                                <PeopleIcon sx={{ fontSize: 40, color: '#4338ca' }} />
                                <div className="ml-4">
                                    <Typography variant="h5" className="font-semibold">
                                        Active Users
                                    </Typography>
                                    <Typography variant="h4" className="font-bold text-indigo-600">
                                        85
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
                            <CardContent className="flex items-center">
                                <MonetizationOnIcon sx={{ fontSize: 40, color: '#4338ca' }} />
                                <div className="ml-4">
                                    <Typography variant="h5" className="font-semibold">
                                        Total Revenue
                                    </Typography>
                                    <Typography variant="h4" className="font-bold text-indigo-600">
                                        $2,300
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
                            <CardContent className="flex items-center">
                                <PendingActionsIcon sx={{ fontSize: 40, color: '#4338ca' }} />
                                <div className="ml-4">
                                    <Typography variant="h5" className="font-semibold">
                                        Pending Requests
                                    </Typography>
                                    <Typography variant="h4" className="font-bold text-indigo-600">
                                        5
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    <section className="mt-8">
                        <Typography variant="h5" className="font-bold mb-4">
                            Recent User Requests
                        </Typography>
                        <div className="space-y-4">
                            {/* User Request 1 */}
                            <div className="bg-white shadow-lg rounded-lg p-4 flex justify-between items-center hover:shadow-xl transition-shadow">
                                <div>
                                    <Typography variant="h6" className="font-semibold">
                                        Karl M.
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        June 27, 2024
                                    </Typography>
                                </div>
                                <Button variant="contained" color="primary" className="hover:bg-indigo-700">
                                    View Details
                                </Button>
                            </div>

                            {/* User Request 2 */}
                            <div className="bg-white shadow-lg rounded-lg p-4 flex justify-between items-center hover:shadow-xl transition-shadow">
                                <div>
                                    <Typography variant="h6" className="font-semibold">
                                        Ninz Garbo
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        August 1, 2024
                                    </Typography>
                                </div>
                                <Button variant="contained" color="primary" className="hover:bg-indigo-700">
                                    View Details
                                </Button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
