"use client";

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Typography, Avatar, Grid, MenuItem, FormControl, Select, InputLabel } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import BookingIcon from '@mui/icons-material/Event';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AssessmentIcon from '@mui/icons-material/Assessment';
import GroupIcon from '@mui/icons-material/Group';

export default function AdminManageBooking() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [statusFilter, setStatusFilter] = useState('All');

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const handleStatusChange = (event) => {
        setStatusFilter(event.target.value);
    };

    const handleEditBooking = (id) => {
        console.log(`Editing booking ID: ${id}`);
    };

    const handleDeleteBooking = (id) => {
        console.log(`Deleting booking ID: ${id}`);
    };

    const bookings = [
        { id: 1, client: 'Karl M.', event: 'Birthday', date: 'August 5, 2024', status: 'Confirmed' },
        { id: 2, client: 'Ninz Garbo', event: 'Resto Bar', date: 'August 3, 2024', status: 'Pending' },
        { id: 3, client: 'Zoro R.', event: 'Wedding', date: 'August 10, 2024', status: 'Confirmed' }
    ];

    const filteredBookings = statusFilter === 'All'
        ? bookings
        : bookings.filter(booking => booking.status === statusFilter);

    return (
        <>
            <Head>
                <title>TALENTO - Admin Manage Bookings</title>
            </Head>
            <div className="flex h-screen bg-gray-100">
                {/* Drawer */}
                <Drawer
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                    PaperProps={{
                        sx: {
                            backgroundColor: '#4338ca',
                            color: 'white',
                        },
                    }}
                >
                    <div role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
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
                                <ListItemText primary="Manage Bookings" />
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
                            Manage Bookings
                        </Typography>
                    </header>

                    {/* Filter by Status */}
                    <div className="mb-6">
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel>Filter by Status</InputLabel>
                            <Select
                                value={statusFilter}
                                onChange={handleStatusChange}
                                label="Filter by Status"
                            >
                                <MenuItem value="All">All</MenuItem>
                                <MenuItem value="Confirmed">Confirmed</MenuItem>
                                <MenuItem value="Pending">Pending</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    {/* Booking List */}
                    <section className="bg-white shadow-md rounded-lg p-6">
                        <Typography variant="h6" className="font-semibold mb-4">
                            Booking List
                        </Typography>
                        <table className="min-w-full bg-white border">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b">Booking ID</th>
                                    <th className="py-2 px-4 border-b">Client</th>
                                    <th className="py-2 px-4 border-b">Event</th>
                                    <th className="py-2 px-4 border-b">Date</th>
                                    <th className="py-2 px-4 border-b">Status</th>
                                    <th className="py-2 px-4 border-b">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredBookings.map((booking) => (
                                    <tr key={booking.id}>
                                        <td className="py-2 px-4 border-b">{booking.id}</td>
                                        <td className="py-2 px-4 border-b">{booking.client}</td>
                                        <td className="py-2 px-4 border-b">{booking.event}</td>
                                        <td className="py-2 px-4 border-b">{booking.date}</td>
                                        <td className="py-2 px-4 border-b">{booking.status}</td>
                                        <td className="py-2 px-4 border-b">
                                            <IconButton onClick={() => handleEditBooking(booking.id)}>
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton onClick={() => handleDeleteBooking(booking.id)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                </main>
            </div>
        </>
    );
}
