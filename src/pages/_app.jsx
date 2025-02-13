import Layout from "@/components/layout";
import '../../styles/global.css'
import ThemeToggle from "@/contexts/theme";
import { ThemeProvider } from "next-themes";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ApiProvider from "@/contexts/useAPIContext";

export default function MyApp({Component , pageProps}) {
    return(
        <ThemeProvider>
            <ApiProvider>
                <Header />
                <Component {...pageProps} />
                <ThemeToggle />
                <Footer />
            </ApiProvider>
        </ThemeProvider>
    )
}