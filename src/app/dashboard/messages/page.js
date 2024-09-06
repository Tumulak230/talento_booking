import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Messages() {
    return (
        <>
            <Head>
                <title>TALENTO - Messages</title>
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
                            <Link href="/dashboard/messages" className="flex items-center space-x-2 p-2 rounded bg-gray-700">
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

                {/* Main */}
                <main className="flex-1 p-6">
                    <header className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold">Messages</h1>
                    </header>

                    {/*sa messages section */}
                    <section className="bg-white shadow rounded-lg p-6">
                        <h2 className="text-xl font-bold mb-4">Your Conversations</h2>
                        <div className="space-y-4">
                            {/*sa Message*/}
                            <div className="border p-4 rounded-lg flex items-center justify-between">
                                <div className="flex items-center">
                                    <Image
                                        src="/wobbuffet2.png"
                                        alt="Client Avatar"
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                    <div className="ml-4">
                                        <p className="font-semibold">Wobbuffet</p>
                                        <p className="text-gray-500 text-sm">Last message: "Looking forward to the event!"</p>
                                        <p className="text-gray-400 text-xs">July 5, 2024 @ 3:15pm</p>
                                    </div>
                                </div>
                                <button className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600">
                                    View Conversation
                                </button>
                            </div>

                            {/*sa Message*/}
                            <div className="border p-4 rounded-lg flex items-center justify-between">
                                <div className="flex items-center">
                                    <Image
                                        src="/Pikachu.png"
                                        alt="Client Avatar"
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                    <div className="ml-4">
                                        <p className="font-semibold">Pikachu</p>
                                        <p className="text-gray-500 text-sm">Last message: "Can we discuss the song choices?"</p>
                                        <p className="text-gray-400 text-xs">July 2, 2024 @ 5:45pm</p>
                                    </div>
                                </div>
                                <button className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600">
                                    View Conversation
                                </button>
                            </div>

                            {/*sa Message*/}
                            <div className="border p-4 rounded-lg flex items-center justify-between">
                                <div className="flex items-center">
                                    <Image
                                        src="/Kon.png"
                                        alt="Client Avatar"
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                    <div className="ml-4">
                                        <p className="font-semibold">Kon</p>
                                        <p className="text-gray-500 text-sm">Last message: "Excited for the performance!"</p>
                                        <p className="text-gray-400 text-xs">June 28, 2024 @ 12:30pm</p>
                                    </div>
                                </div>
                                <button className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600">
                                    View Conversation
                                </button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
