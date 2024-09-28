"use client";

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider, TextField, Button, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import MessageIcon from '@mui/icons-material/Message';
import PortfolioIcon from '@mui/icons-material/Work';
import BookingIcon from '@mui/icons-material/Event';
import SendIcon from '@mui/icons-material/Send';

export default function Messages() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [activeConversation, setActiveConversation] = useState(null);
    const [messageInput, setMessageInput] = useState("");

    const conversations = {
        Wobbuffet: [
            { sender: "Wobbuffet", text: "Looking forward to the event!", date: "July 5, 2024 @ 3:15pm" },
            { sender: "You", text: "Me too! Let’s finalize the details.", date: "July 6, 2024 @ 10:00am" },
        ],
        Pikachu: [
            { sender: "Pikachu", text: "Can we discuss the song choices?", date: "July 2, 2024 @ 5:45pm" },
            { sender: "You", text: "Sure! What do you have in mind?", date: "July 3, 2024 @ 9:30am" },
        ],
        Kon: [
            { sender: "Kon", text: "Excited for the performance!", date: "June 28, 2024 @ 12:30pm" },
            { sender: "You", text: "Me too! Can't wait.", date: "June 29, 2024 @ 11:00am" },
        ],
    };

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const handleViewConversation = (client) => {
        setActiveConversation(client);
        setMessageInput(""); // Clear input when changing conversation
    };

    const handleSendMessage = () => {
        if (messageInput.trim()) {
            conversations[activeConversation].push({
                sender: "You",
                text: messageInput,
                date: new Date().toLocaleString(),
            });
            setMessageInput(""); // Clear input after sending
        }
    };

    return (
        <>
            <Head>
                <title>TALENTO - Messages</title>
            </Head>
            <div className="flex h-screen bg-gray-100">
                {/* Drawer for Navigation */}
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
                    <div role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                        <div className="p-4 flex items-center mb-4">
                            <Image src="/logotalentos.png" alt="TALENTO Logo" width={40} height={40} className="mr-2" />
                            <Typography variant="h6">TALENTO</Typography>
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

                {/* Hamburger Menu Button */}
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                    className="absolute top-4 left-4"
                >
                    <MenuIcon />
                </IconButton>

                {/* Main Content */}
                <main className="flex-1 flex">
                    <section className="w-1/3 p-6 bg-white shadow rounded-lg overflow-y-auto">
                        <header className="mb-6">
                            <Typography variant="h4" className="font-bold">Messages</Typography>
                        </header>

                        <div className="space-y-4">
                            {Object.keys(conversations).map((client) => (
                                <div
                                    key={client}
                                    className={`border p-4 rounded-lg flex items-center justify-between hover:bg-indigo-100 transition cursor-pointer ${activeConversation === client ? 'bg-indigo-50' : ''}`}
                                    onClick={() => handleViewConversation(client)}
                                >
                                    <div className="flex items-center">
                                        <Image
                                            src={`/${client.toLowerCase()}.png`} // Adjust the image source as needed
                                            alt="Client Avatar"
                                            width={40}
                                            height={40}
                                            className="rounded-full"
                                        />
                                        <div className="ml-4">
                                            <Typography variant="subtitle1" className="font-semibold">{client}</Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                Last message: "{conversations[client].slice(-1)[0].text}"
                                            </Typography>
                                            <Typography variant="caption" color="textSecondary">
                                                {conversations[client].slice(-1)[0].date}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="flex-1 bg-white shadow rounded-lg p-6 m-6">
                        {activeConversation ? (
                            <>
                                <Typography variant="h5" className="font-bold mb-4">
                                    {activeConversation}'s Conversation
                                </Typography>
                                <div className="space-y-4 max-h-80 overflow-y-auto p-4 bg-gray-50 rounded-lg">
                                    {conversations[activeConversation].map((msg, index) => (
                                        <div key={index} className={`flex items-start ${msg.sender === "You" ? "justify-end" : ""}`}>
                                            <div className={`flex items-start ${msg.sender === "You" ? "flex-row-reverse" : ""}`}>
                                                {msg.sender !== "You" && (
                                                    <Image
                                                        src={`/${msg.sender.toLowerCase()}.png`} // Client profile pic
                                                        alt={`${msg.sender} Avatar`}
                                                        width={30}
                                                        height={30}
                                                        className="rounded-full mr-2"
                                                    />
                                                )}
                                                <div className={`p-3 rounded-lg ${msg.sender === "You" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-800"}`}>
                                                    {msg.sender === "You" && (
                                                        <Image
                                                            src="/chop2.png" // Your profile pic
                                                            alt="Your Avatar"
                                                            width={30}
                                                            height={30}
                                                            className="rounded-full mr-2"
                                                        />
                                                    )}
                                                    <Typography variant="body2" className="font-semibold">{msg.sender}</Typography>
                                                    <Typography variant="body2">{msg.text}</Typography>
                                                    <Typography variant="caption" className="text-gray-400">{msg.date}</Typography>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Reply Input */}
                                <div className="mt-4 flex">
                                    <TextField
                                        variant="outlined"
                                        placeholder="Type your message..."
                                        value={messageInput}
                                        onChange={(e) => setMessageInput(e.target.value)}
                                        fullWidth
                                        sx={{ mr: 2 }}
                                    />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        endIcon={<SendIcon />}
                                        onClick={handleSendMessage}
                                    >
                                        Send
                                    </Button>
                                </div>
                            </>
                        ) : (
                            <Typography variant="body1" color="textSecondary">
                                Select a conversation to start chatting.
                            </Typography>
                        )}
                    </section>
                </main>
            </div>
        </>
    );
}
