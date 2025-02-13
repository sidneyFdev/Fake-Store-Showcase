import ApiProvider from "@/contexts/useAPIContext";

export default function Layout({ children }) {
    return (
        <>
            <main className='center'>
                <ApiProvider>
                    {children}
                </ApiProvider>
            </main>
        </>
    )
}