"use client";

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function TalentDashboard() {
    return (
        <>
        <Head>
            <title>TALENTO - Talent Dashboard</title>
        </Head>
        <div className="flex h-screen bg-gray-100">
            <aside className="w-64 bg-gray-800 text-white">
                <div className="p-4">
                    <div className="flex items-center mb-6">
                        {/* logo */}
                        <Image 
                            src="/logotalentos.png" 
                            alt="TALENTO Logo"
                            width={40} 
                            height={40} 
                            className="mr-2"
                        />
                        <div className="text-2xl font-bold">TALENTO</div>
                    </div>
                    <nav className="space-y-4">
                        <Link href="/dashboard/talentdashboard" className="flex items-center space-x-2 p-2 rounded bg-gray-700 hover:bg-gray-600">
                            <span>Dashboard</span>
                        </Link>
                        <Link href="/dashboard/talentprofile" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
                            <span>Portfolio</span>
                        </Link>
                        <Link href="/dashboard/messages" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
                            <span>Messages</span>
                        </Link>
                        <Link href="/dashboard/booking" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
                            <span>Booking</span>
                        </Link>
                        <Link href="/dashboard/logout" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
                            <span>Log Out</span>
                        </Link>
                    </nav>
                </div>
            </aside>
            <main className="flex-1 p-6">
                <header className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    <div>
                        <button className="relative focus:outline-none">
                            <span className="material-icons text-gray-500 text-3xl">HIRING_REQUEST</span>
                            <span className="absolute top-0 right-0 block h-2 w-2 bg-red-500 rounded-full"></span>
                        </button>
                    </div>
                </header>

                <section>
                    <div className="space-y-6">
                        {/* 1 */}
                        <div className="bg-white shadow rounded-lg p-4 flex">
                            <div className="w-16 h-16 flex-shrink-0">
                                <div className="h-full w-full bg-gray-300 rounded-full flex items-center justify-center text-2xl font-bold">K</div>
                            </div>
                            <div className="flex-1 ml-4">
                                <h2 className="text-xl font-bold">Karl M.</h2>
                                <p className="text-sm text-gray-500">June 27, 2024</p>
                                <p className="mt-2 text-gray-700">
                                    Looking for multi-talented performer that can sing and dance for my son’s birthday.
                                </p>
                                <div className="mt-4 space-y-2">
                                    <p><strong>Event:</strong> Birthday</p>
                                    <p><strong>Location:</strong> Umapad, Mandaue City</p>
                                    <p><strong>Date and Time:</strong> August 5, 2024, Tuesday (5:00pm-6:00pm)</p>
                                    <div className="flex space-x-2 mt-2">
                                        <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Singer</span>
                                        <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Dancer</span>
                                        <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Solo Singer</span>
                                        <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Hip hop Dancer</span>
                                        <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Male or Female</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 ml-auto">
                                <span className="text-gray-500 text-sm">2 Applied</span>
                                <button aria-label="Apply for this Event" className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600">Apply</button>
                            </div>
                        </div>

                        {/* 2 */}
                        <div className="bg-white shadow rounded-lg p-4 flex">
                            <div className="w-16 h-16 flex-shrink-0">
                                <div className="h-full w-full bg-gray-300 rounded-full flex items-center justify-center text-2xl font-bold">N</div>
                            </div>
                            <div className="flex-1 ml-4">
                                <h2 className="text-xl font-bold">Ninz Garbo</h2>
                                <p className="text-sm text-gray-500">August 1, 2024</p>
                                <p className="mt-2 text-gray-700">
                                    I am looking for a Singer and Guitarist for my resto bar. Please apply as soon as possible.
                                </p>
                                <div className="mt-4 space-y-2">
                                    <p><strong>Event:</strong> Resto Bar</p>
                                    <p><strong>Location:</strong> Umapad, Mandaue City</p>
                                    <p><strong>Date and Time:</strong> August 3, 2024, Tuesday (5:00pm-6:00pm)</p>
                                    <div className="flex space-x-2 mt-2">
                                        <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Singer</span>
                                        <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Musician</span>
                                        <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Solo Singer</span>
                                        <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Guitarist</span>
                                        <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Male or Female</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 ml-auto">
                                <span className="text-gray-500 text-sm">2 Applied</span>
                                <button aria-label="Apply for this Event" className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600">Apply</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
        </>
    );
}
