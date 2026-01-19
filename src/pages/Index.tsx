import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CommitteesSection from '@/components/CommitteesSection';
import SecGenMessage from '@/components/SecGenMessage';
import FAQSection from '@/components/FAQSection';
import BackgroundGuideSection from '@/components/BackgroundGuideSection';
import Footer from '@/components/Footer';

interface IndexProps {
  section?: string;
}

const Index = ({ section }: IndexProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading && section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [isLoading, section]);

  useEffect(() => {
    const titles: Record<string, string> = {
      'about': 'About | Aeternum MUN 2026',
      'committees': 'Committees | Aeternum MUN 2026',
      'message': 'Secretary General Message | Aeternum MUN 2026',
      'faq': 'FAQ | Aeternum MUN 2026',
      'background-guide': 'Committee Background Guide | Aeternum MUN 2026',
    };
    document.title = titles[section || ''] || 'Aeternum MUN 2026';
  }, [section]);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <CommitteesSection />
          <SecGenMessage />
          <BackgroundGuideSection />
          <FAQSection />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Index;
