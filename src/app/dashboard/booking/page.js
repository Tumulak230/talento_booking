import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Booking() {
    return (
        <>
            <Head>
                <title>TALENTO - Booking</title>
            </Head>
            <div className="flex h-screen bg-gray-100">
                {/* sidebar */}
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
                            <Link href="/dashboard/booking" className="flex items-center space-x-2 p-2 rounded bg-gray-700">
                                <span>Booking</span>
                            </Link>
                            <Link href="/dashboard/logout" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
                                <span>Log Out</span>
                            </Link>
                        </nav>
                    </div>
                </aside>

                {/* Main */}
                <main className="flex-1 p-6">
                    <header className="mb-6">
                        <h1 className="text-3xl font-bold">Booking</h1>
                    </header>

                    {/* sa pending */}
                    <section className="mb-8">
                        <h2 className="text-xl font-bold mb-4">Pending</h2>
                        <div className="bg-white shadow rounded-lg p-4 flex justify-between items-center">
                            <div className="flex items-center">
                                <Image
                                    src="/pikachu.png"
                                    alt="Client Avatar"
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                                <div className="ml-4">
                                    <p className="font-semibold">Pikachu</p>
                                    <p className="text-gray-500 text-sm">Paknaan, Mandaue City</p>
                                    <p className="text-gray-500 text-sm">Wedding Event</p>
                                    <p className="text-gray-500 text-sm">July 20, 2024 @5:00pm-9:00pm</p>
                                </div>
                            </div>
                            <div className="space-x-2">
                                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Accept</button>
                                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Decline</button>
                            </div>
                        </div>
                    </section>

                    {/* mga calendar og bookings */}
                    <section className="flex">
                        {/* calendar */}
                        <div className="bg-white shadow rounded-lg p-6 w-1/2 mr-6">
                            <h2 className="text-xl font-bold mb-4">Upcoming Bookings</h2>
                            <div className="mb-4">
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-green-500 mr-2 rounded"></div>
                                    <span className="text-sm text-gray-500">Selected Date</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-red-500 mr-2 rounded"></div>
                                    <span className="text-sm text-gray-500">Booked Schedule</span>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-7 gap-2">
                                
                                {Array.from({ length: 31 }, (_, i) => (
                                    <div key={i} className={`w-8 h-8 flex items-center justify-center rounded ${i === 7 ? 'bg-green-500 text-white' : i >= 13 && i <= 15 ? 'bg-red-500 text-white' : 'bg-gray-200'}`}>
                                        {i + 1}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* mga schedule */}
                        <div className="bg-white shadow rounded-lg p-6 w-1/2">
                            <h2 className="text-xl font-bold mb-4">Schedule July 9, 2024</h2>
                            <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow">
                                <div>
                                    <p className="font-semibold">Kon</p>
                                    <p className="text-gray-500 text-sm">Tayud, Liloan</p>
                                    <p className="text-gray-500 text-sm">Wedding Event</p>
                                    <p className="text-gray-500 text-sm">July 9, 2024 @3:00pm-7:00pm</p>
                                </div>
                                <button className="bg-gray-300 text-gray-500 px-4 py-2 rounded-lg" disabled>Mark as Done</button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
