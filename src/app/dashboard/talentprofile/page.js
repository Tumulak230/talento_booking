"use client";

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider, Rating, Modal, TextField, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import MessageIcon from '@mui/icons-material/Message';
import PortfolioIcon from '@mui/icons-material/Work';
import BookingIcon from '@mui/icons-material/Event';

export default function Profile() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');
    const [editOpen, setEditOpen] = useState(false);
    const [profileData, setProfileData] = useState({
        name: "Tony Tony Chopper",
        category: "Classical Singer",
        location: "Guizo, Mandaue",
        description: "Tony Tony Chopper is a highly talented classical singer known for his melodious voice and captivating performances."
    });

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
    };

    const handleSave = () => {
        // Save the edited profile data
        setEditOpen(false);
    };

    return (
        <>
            <Head>
                <title>TALENTO - Profile</title>
            </Head>
            <div className="flex h-screen bg-gray-100">
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
                                <Image
                                    src="/logotalentos.png"
                                    alt="TALENTO Logo"
                                    width={40}
                                    height={40}
                                    className="mr-2"
                                />
                                <div className="text-2xl font-bold">TALENTO</div>
                            </div>
                        </div>
                        <Divider />
                        <List>
                            <ListItem button component={Link} href="/dashboard/talentdashboard">
                                <ListItemIcon>
                                    <DashboardIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItem>
                            <ListItem button component={Link} href="/dashboard/talentprofile">
                                <ListItemIcon>
                                    <PortfolioIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="Portfolio" />
                            </ListItem>
                            <ListItem button component={Link} href="/dashboard/messages">
                                <ListItemIcon>
                                    <MessageIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="Messages" />
                            </ListItem>
                            <ListItem button component={Link} href="/dashboard/booking">
                                <ListItemIcon>
                                    <BookingIcon sx={{ color: 'white' }} />
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

                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                    className="absolute top-4 left-4"
                >
                    <MenuIcon />
                </IconButton>

                <main className="flex-1 p-6 ml-14">
                    <header className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold">Profile</h1>
                    </header>

                    <section>
                        <div className="bg-white shadow rounded-lg overflow-hidden">
                            <div className="relative">
                                <Image
                                    src="/chop2.png"
                                    alt="Cover Photo"
                                    width={1280}
                                    height={300}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute bottom-0 left-6 transform translate-y-1/2">
                                    <Image
                                        src="/chop.png"
                                        alt="Profile Photo"
                                        width={100}
                                        height={100}
                                        className="rounded-full border-4 border-white"
                                    />
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h2 className="text-2xl font-bold">{profileData.name}</h2>
                                        <p className="text-sm text-gray-500">{profileData.category}</p>
                                        <p className="text-sm text-gray-500 flex items-center">
                                            <span className="material-icons text-sm mr-1">location_on</span>
                                            {profileData.location}
                                        </p>
                                        <p className="flex items-center mt-2">
                                            <Rating value={4.9} readOnly precision={0.1} className="text-yellow-500" />
                                            <span className="ml-2 text-gray-600">(4.9/5, 2 reviews)</span>
                                        </p>
                                    </div>
                                    <div className="flex space-x-2">
                                        <button 
                                            onClick={() => setEditOpen(true)} 
                                            className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
                                        >
                                            Edit
                                        </button>
                                        <button className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600">
                                            Post Photo/Video
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-6 border-t border-b border-gray-200">
                                    <nav className="flex space-x-4 text-center">
                                        <button 
                                            onClick={() => setActiveTab('overview')} 
                                            className={`py-4 text-gray-700 font-semibold ${activeTab === 'overview' ? 'border-b-2 border-indigo-600' : 'hover:border-b-2 hover:border-indigo-600'}`}
                                        >
                                            Overview
                                        </button>
                                        <button 
                                            onClick={() => setActiveTab('reviews')} 
                                            className={`py-4 text-gray-700 font-semibold ${activeTab === 'reviews' ? 'border-b-2 border-indigo-600' : 'hover:border-b-2 hover:border-indigo-600'}`}
                                        >
                                            Reviews
                                        </button>
                                        <button 
                                            onClick={() => setActiveTab('media')} 
                                            className={`py-4 text-gray-700 font-semibold ${activeTab === 'media' ? 'border-b-2 border-indigo-600' : 'hover:border-b-2 hover:border-indigo-600'}`}
                                        >
                                            Photos & Videos
                                        </button>
                                    </nav>
                                </div>

                                <div className="mt-6">
                                    {activeTab === 'overview' && (
    <div>
        <h3 className="font-semibold text-lg">About {profileData.name}</h3>
        <p className="text-gray-600">{profileData.description}</p>

        <h4 className="font-semibold mt-4">Experience</h4>
        <ul className="list-disc list-inside text-gray-600">
            <li>5 years of experience performing at weddings and corporate events.</li>
            <li>Regular performer at the annual Classical Music Festival.</li>
            <li>Guest artist with the City Symphony Orchestra.</li>
        </ul>

        <h4 className="font-semibold mt-4">Skills</h4>
        <ul className="list-disc list-inside text-gray-600">
            <li>Classical Vocal Techniques</li>
            <li>Music Theory and Composition</li>
            <li>Piano Accompaniment</li>
            <li>Stage Presence and Performance Art</li>
        </ul>

        <h4 className="font-semibold mt-4">Notable Performances</h4>
        <ul className="list-disc list-inside text-gray-600">
            <li>Soloist at the Gala Concert in 2023</li>
            <li>Featured artist at the Grand Opera House</li>
            <li>Performed for local charities, raising funds through music</li>
        </ul>

        <h4 className="font-semibold mt-4">Testimonials</h4>
        <p className="text-gray-600">"Tony's performances are enchanting, and his voice captivates the audience. A true artist!" - Event Organizer</p>
    </div>
)}

                                    {activeTab === 'reviews' && (
                                        <div>
                                            <h3 className="font-semibold text-lg">Reviews</h3>
                                            <div className="mt-4">
                                                <div className="border-b pb-4 mb-4 flex">
                                                    <Image
                                                        src="/robin.png"
                                                        alt="Nico Robin"
                                                        width={40}
                                                        height={40}
                                                        className="rounded-full mr-3 object-cover"
                                                    />
                                                    <div>
                                                        <p className="font-semibold">Nico Robin</p>
                                                        <Rating value={5} readOnly precision={0.5} className="text-yellow-500" />
                                                        <p className="text-gray-600">"Tony's voice is absolutely mesmerizing! He performed at my wedding, and everyone was blown away by his talent."</p>
                                                        <button className="text-indigo-600 mt-2">Reply</button>
                                                    </div>
                                                </div>
                                                <div className="border-b pb-4 mb-4 flex">
                                                    <Image
                                                        src="/carrot3.png"
                                                        alt="Usopp"
                                                        width={40}
                                                        height={40}
                                                        className="rounded-full mr-3 object-cover"
                                                    />
                                                    <div>
                                                        <p className="font-semibold">Carrot</p>
                                                        <Rating value={4.5} readOnly precision={0.5} className="text-yellow-500" />
                                                        <p className="text-gray-600">"An incredible performer! His rendition of classical pieces brought tears to my eyes. Highly recommend!"</p>
                                                        <button className="text-indigo-600 mt-2">Reply</button>
                                                    </div>
                                                </div>
                                                <div className="border-b pb-4 mb-4 flex">
                                                    <Image
                                                        src="/nami.png"
                                                        alt="Nami"
                                                        width={40}
                                                        height={40}
                                                        className="rounded-full mr-3 object-cover"
                                                    />
                                                    <div>
                                                        <p className="font-semibold">Nami</p>
                                                        <Rating value={5} readOnly precision={0.5} className="text-yellow-500" />
                                                        <p className="text-gray-600">"A true artist! Chopper's performances are always a highlight. I’ve seen him multiple times, and he never disappoints."</p>
                                                        <button className="text-indigo-600 mt-2">Reply</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <textarea
                                                    placeholder="Write a reply..."
                                                    className="border rounded-md p-2 w-full"
                                                    rows="3"
                                                />
                                                <button className="mt-2 bg-indigo-600 text-white py-2 px-4 rounded">Send Reply</button>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'media' && (
                                        <div>
                                            <h3 className="font-semibold text-lg">Photos & Videos</h3>
                                            <div className="grid grid-cols-2 gap-4 mt-4">
                                                <div className="relative">
                                                    <Image
                                                        src="/chop.png"
                                                        alt="Media 1"
                                                        width={300}
                                                        height={200}
                                                        className="rounded-lg object-cover"
                                                    />
                                                </div>
                                                <div className="relative">
                                                    <Image
                                                        src="/chop2.png"
                                                        alt="Media 2"
                                                        width={300}
                                                        height={200}
                                                        className="rounded-lg object-cover"
                                                    />
                                                </div>
                                                <div className="relative">
                                                    <Image
                                                        src="/chop3.png"
                                                        alt="Media 3"
                                                        width={300}
                                                        height={200}
                                                        className="rounded-lg object-cover"
                                                    />
                                                </div>
                                                <div className="relative">
                                                    <video
                                                        controls
                                                        className="rounded-lg w-full"
                                                        width={300}
                                                        height={200}
                                                    >
                                                        <source src="/chop.mp4" type="video/mp4" />
                                                    </video>
                                                </div>
                                                <div className="relative">
                                                    <video
                                                        controls
                                                        className="rounded-lg w-full"
                                                        width={300}
                                                        height={200}
                                                    >
                                                        <source src="/choppy.mp4" type="video/mp4" />
                                                    </video>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Edit Profile Modal */}
                <Modal
                    open={editOpen}
                    onClose={() => setEditOpen(false)}
                    className="flex items-center justify-center"
                >
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-2xl mb-4">Edit Profile</h2>
                        <TextField
                            label="Name"
                            name="name"
                            value={profileData.name}
                            onChange={handleEditChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Category"
                            name="category"
                            value={profileData.category}
                            onChange={handleEditChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Location"
                            name="location"
                            value={profileData.location}
                            onChange={handleEditChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Description"
                            name="description"
                            value={profileData.description}
                            onChange={handleEditChange}
                            fullWidth
                            margin="normal"
                            multiline
                            rows={4}
                        />
                        <div className="flex justify-end mt-4">
                            <Button variant="outlined" onClick={() => setEditOpen(false)} className="mr-2">
                                Cancel
                            </Button>
                            <Button variant="contained" onClick={handleSave}>
                                Save
                            </Button>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    );
}
