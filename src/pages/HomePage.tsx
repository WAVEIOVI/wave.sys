import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Container from '../components/layout/Container';
import HeroSection from '../components/home/HeroSection';
import NavigationCards from '../components/home/NavigationCards';

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
            <Header />

            <main className="flex-grow">
                <Container>
                    <HeroSection />
                    <NavigationCards />
                </Container>
            </main>

            <Footer />
        </div>
    );
}
