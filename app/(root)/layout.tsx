import Navbar from "@/components/Navbar";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="font-work-sans text-black bg-gray-100 min-h-screen">
            <Navbar />

            {children}
        </main>
    )
}