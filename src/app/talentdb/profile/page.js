"use client";

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function profile() {
    return (
        <>
        <Head>
            <title>TALENTO - Profile</title>
        </Head>
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 text-white">
                <div className="p-4">
                    <div className="text-2xl font-bold mb-6">TALENTO</div>
                    <nav className="space-y-4">
                        <Link href="/talentdashboard" className="flex items-center space-x-2 p-2 rounded bg-gray-700">
                            <span>Dashboard</span>
                        </Link>
                        <Link href="/portfolio" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
                            <span>Portfolio</span>
                        </Link>
                        <Link href="/messages" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
                            <span>Messages</span>
                        </Link>
                        <Link href="/booking" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
                            <span>Booking</span>
                        </Link>
                        <Link href="/logout" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
                            <span>Log Out</span>
                        </Link>
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                <header className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Profile</h1>
                    <div>
                        <button className="relative focus:outline-none">
                            <span className="material-icons text-gray-500 text-3xl">HIRING REQUEST</span>
                            <span className="absolute top-0 right-0 block h-2 w-2 bg-red-500 rounded-full"></span>
                        </button>
                    </div>
                </header>

                {/* Profile Section */}
                <section>
                    <div className="bg-white shadow rounded-lg overflow-hidden">
                        {/* Cover Photo */}
                        <div className="relative">
                            <Image
                                src="/path-to-cover-photo.jpg" // Update with the correct path
                                alt="Cover Photo"
                                width={1280}
                                height={300}
                                className="w-full h-48 object-cover"
                            />
                            {/* Profile Photo */}
                            <div className="absolute bottom-0 left-6 transform translate-y-1/2">
                                <Image
                                    src="/path-to-profile-photo.jpg" // Update with the correct path
                                    alt="Profile Photo"
                                    width={100}
                                    height={100}
                                    className="rounded-full border-4 border-white"
                                />
                            </div>
                        </div>

                        {/* Talent Info */}
                        <div className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-2xl font-bold">Kris Justin Oporto</h2>
                                    <p className="text-sm text-gray-500">Classical Singer</p>
                                    <p className="text-sm text-gray-500 flex items-center">
                                        <span className="material-icons text-sm mr-1">location_on</span>
                                        Guizo, Mandaue
                                    </p>
                                    <p className="flex items-center text-sm text-yellow-500 mt-2">
                                        ★★★★☆ <span className="ml-2 text-gray-600">(4.9/5, 2 reviews)</span>
                                    </p>
                                </div>
                                <div className="flex space-x-2">
                                    <button aria-label="Edit Profile" className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600">
                                        Edit
                                    </button>
                                    <button aria-label="Post Photo/Video" className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600">
                                        Post Photo/Video
                                    </button>
                                </div>
                            </div>

                            {/* Navigation Tabs */}
                            <div className="mt-6 border-t border-b border-gray-200">
                                <nav className="flex space-x-4 text-center">
                                    <Link href="#" className="py-4 text-gray-700 font-semibold border-b-2 border-indigo-600">Overview</Link>
                                    <Link href="#" className="py-4 text-gray-700 font-semibold hover:border-b-2 hover:border-indigo-600">Reviews</Link>
                                    <Link href="#" className="py-4 text-gray-700 font-semibold hover:border-b-2 hover:border-indigo-600">Photos & Videos</Link>
                                </nav>
                            </div>

                            {/* Content Area */}
                            <div className="mt-6">
                                <h3 className="font-semibold text-lg">2 photos 1 Video</h3>
                                <div className="grid grid-cols-1 gap-4 mt-4">
                                    <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                                        <Image
                                            src="/path-to-video-thumbnail.jpg" // Update with the correct path
                                            alt="Video Thumbnail"
                                            width={400}
                                            height={300}
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
        </>
    );
}
