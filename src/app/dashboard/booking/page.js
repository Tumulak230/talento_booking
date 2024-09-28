"use client";

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider, Typography, Button, Avatar, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import BookingIcon from '@mui/icons-material/Event';
import AssessmentIcon from '@mui/icons-material/Assessment';
import GroupIcon from '@mui/icons-material/Group';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Calendar CSS

export default function Booking() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [date, setDate] = useState(new Date());

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <>
            <Head>
                <title>TALENTO - Booking</title>
            </Head>
            <div className="flex h-screen bg-gray-100">
                {/* MUI Drawer */}
                <Drawer
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                    PaperProps={{
                        sx: {
                            backgroundColor: '#4338ca',
                            color: 'white',
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
                            <ListItem button component={Link} href="/dashboard/talentdashboard">
                                <ListItemIcon>
                                    <DashboardIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItem>
                            <ListItem button component={Link} href="/dashboard/talentprofile">
                                <ListItemIcon>
                                    <AssessmentIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="Profile" />
                            </ListItem>
                            <ListItem button component={Link} href="/dashboard/messages">
                                <ListItemIcon>
                                    <BookingIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="Messages" />
                            </ListItem>
                            <ListItem button component={Link} href="/dashboard/booking">
                                <ListItemIcon>
                                    <GroupIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="Booking" />
                            </ListItem>
                            <ListItem button component={Link} href="/dashboard/logout">
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
                        Booking
                        </Typography>
                       
                    </header>

                    <section>
                        <Grid container spacing={4}>
                            {/* Left Column - Calendar */}
                            <Grid item xs={12} md={4}>
                                <div className="bg-white shadow-md rounded-lg p-6">
                                    <Typography variant="h6" className="font-semibold mb-4">
                                        Calendar
                                    </Typography>
                                    <Calendar
                                        onChange={handleDateChange}
                                        value={date}
                                        className="w-full"
                                    />
                                </div>
                            </Grid>

                            {/* Right Column - Booking Requests */}
                            <Grid item xs={12} md={8}>
                                <div className="space-y-6">
                                    {/* Booking Request 1 */}
                                    <div className="bg-white shadow-md rounded-lg p-6 flex items-start hover:shadow-lg transition-shadow">
                                        <Avatar
                                            alt="Nico Robin"
                                            src="/robin.png"
                                            sx={{ width: 56, height: 56 }}
                                            className="flex-shrink-0"
                                        />
                                        <div className="flex-1 ml-6">
                                            <Typography variant="h6" className="font-semibold">
                                                Karl M.
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" className="mt-1">
                                                June 27, 2024
                                            </Typography>
                                            <Typography variant="body1" className="mt-2">
                                                Looking for a multi-talented performer that can sing and dance for my son’s birthday.
                                            </Typography>
                                            <div className="mt-4">
                                                <Typography variant="body2">
                                                    <strong>Event:</strong> Birthday
                                                </Typography>
                                                <Typography variant="body2">
                                                    <strong>Location:</strong> Umapad, Mandaue City
                                                </Typography>
                                                <Typography variant="body2">
                                                    <strong>Date and Time:</strong> August 5, 2024, Tuesday (5:00pm-6:00pm)
                                                </Typography>
                                                <div className="flex flex-wrap space-x-2 mt-4">
                                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Singer</span>
                                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Dancer</span>
                                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Solo Singer</span>
                                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Hip hop Dancer</span>
                                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Male or Female</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-4 ml-auto">
                                            <Typography variant="body2" color="textSecondary">
                                                2 Applied
                                            </Typography>
                                            <Button variant="contained" color="primary">
                                                Apply
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Booking Request 2 */}
                                    <div className="bg-white shadow-md rounded-lg p-6 flex items-start hover:shadow-lg transition-shadow">
                                        <Avatar
                                            alt="Nami"
                                            src="/nami.png"
                                            sx={{ width: 56, height: 56 }}
                                            className="flex-shrink-0"
                                        />
                                        <div className="flex-1 ml-6">
                                            <Typography variant="h6" className="font-semibold">
                                                Ninz Garbo
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" className="mt-1">
                                                August 1, 2024
                                            </Typography>
                                            <Typography variant="body1" className="mt-2">
                                                I am looking for a Singer and Guitarist for my resto bar. Please apply as soon as possible.
                                            </Typography>
                                            <div className="mt-4">
                                                <Typography variant="body2">
                                                    <strong>Event:</strong> Resto Bar
                                                </Typography>
                                                <Typography variant="body2">
                                                    <strong>Location:</strong> Umapad, Mandaue City
                                                </Typography>
                                                <Typography variant="body2">
                                                    <strong>Date and Time:</strong> August 3, 2024, Tuesday (5:00pm-6:00pm)
                                                </Typography>
                                                <div className="flex flex-wrap space-x-2 mt-4">
                                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Singer</span>
                                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Musician</span>
                                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Solo Singer</span>
                                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Guitarist</span>
                                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Male or Female</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-4 ml-auto">
                                            <Typography variant="body2" color="textSecondary">
                                                2 Applied
                                            </Typography>
                                            <Button variant="contained" color="primary">
                                                Apply
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </section>
                </main>
            </div>
        </>
    );
}