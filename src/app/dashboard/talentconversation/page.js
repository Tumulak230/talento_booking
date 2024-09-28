import React from 'react';
import { Modal, Button } from '@mui/material';
import Image from 'next/image';

const Conversation = ({ open, handleClose, messages, clientName }) => {
    return (
        <Modal open={open} onClose={handleClose} className="flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl mb-4">{clientName}'s Conversation</h2>
                <div className="space-y-4">
                    {messages.map((msg, index) => (
                        <div key={index} className="flex items-start">
                            <Image src="/wobbuffet2.png" alt="Client Avatar" width={40} height={40} className="rounded-full mr-3" />
                            <div>
                                <p className="font-semibold">{msg.sender}</p>
                                <p className="text-gray-600">{msg.text}</p>
                                <p className="text-gray-400 text-xs">{msg.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex justify-end">
                    <Button variant="contained" onClick={handleClose}>Close</Button>
                </div>
            </div>
        </Modal>
    );
};

export default Conversation;
