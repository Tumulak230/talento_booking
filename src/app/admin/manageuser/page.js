"use client";

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider, Typography, Button, Avatar } from '@mui/material'; // Removed the duplicate IconButton
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import MessageIcon from '@mui/icons-material/Message';
import PortfolioIcon from '@mui/icons-material/Work';
import BookingIcon from '@mui/icons-material/Event';
import AssessmentIcon from '@mui/icons-material/Assessment';
import GroupIcon from '@mui/icons-material/Group';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ManageUsers() {
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
                <title>TALENTO - Manage Users</title>
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
                            Manage Users
                        </Typography>
                    </header>

                    <section>
                        <div className="space-y-6">
                            {/* User 1 */}
                            <div className="bg-white shadow-md rounded-lg p-6 flex items-start hover:shadow-lg transition-shadow">
                                <Avatar
                                    alt="Nico Robin"
                                    src="/robin.png" // Replace with the path to the user's profile picture
                                    sx={{ width: 56, height: 56 }}
                                    className="flex-shrink-0"
                                />
                                <div className="flex-1 ml-6">
                                    <Typography variant="h6" className="font-semibold">
                                        Nico Robin
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" className="mt-1">
                                        Artist ID: 001
                                    </Typography>
                                    <Typography variant="body1" className="mt-2">
                                        Multi-talented artist skilled in singing and dancing.
                                    </Typography>
                                    <div className="mt-4">
                                        <Typography variant="body2">
                                            <strong>Email:</strong> robin@example.com
                                        </Typography>
                                        <Typography variant="body2">
                                            <strong>Status:</strong> Active
                                        </Typography>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 ml-auto">
                                    <IconButton color="primary">
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton color="secondary">
                                        <DeleteIcon />
                                    </IconButton>
                                </div>
                            </div>

                            {/* User 2 */}
                            <div className="bg-white shadow-md rounded-lg p-6 flex items-start hover:shadow-lg transition-shadow">
                                <Avatar
                                    alt="Nami"
                                    src="/nami.png" // Replace with the path to the user's profile picture
                                    sx={{ width: 56, height: 56 }}
                                    className="flex-shrink-0"
                                />
                                <div className="flex-1 ml-6">
                                    <Typography variant="h6" className="font-semibold">
                                        Nami
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" className="mt-1">
                                        Artist ID: 002
                                    </Typography>
                                    <Typography variant="body1" className="mt-2">
                                        Skilled guitarist and musician.
                                    </Typography>
                                    <div className="mt-4">
                                        <Typography variant="body2">
                                            <strong>Email:</strong> nami@example.com
                                        </Typography>
                                        <Typography variant="body2">
                                            <strong>Status:</strong> Inactive
                                        </Typography>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 ml-auto">
                                    <IconButton color="primary">
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton color="secondary">
                                        <DeleteIcon />
                                    </IconButton>
                                </div>
                            </div>

                            {/* Additional users can be added in a similar format */}
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
