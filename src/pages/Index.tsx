import { useState } from "react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { RecyclingCategory } from "@/components/RecyclingCategory";
import { LocationAccordion } from "@/components/LocationAccordion";
import { RecyclingMap } from "@/components/RecyclingMap";
import { getRecyclingPointsByMaterial } from "@/data/recyclingPoints";
import { FileText, Shirt, Coffee, Wine, Trash2, Recycle } from "lucide-react";

const Index = () => {
  const [language, setLanguage] = useState<"ru" | "en">("ru");

  const translations = {
    ru: {
      title: "Переработка и вторичное использование – один из способов помочь экологии",
      whatCanBeRecycled: "Что можно переработать",
      recyclingLocations: "Пункты приёма",
      plastic: "Пластик",
      paper: "Бумага",
      metal: "Металл",
      glass: "Стекло",
      clothes: "Одежда"
    },
    en: {
      title: "Recycling is One of the Ways to Help Ecology",
      whatCanBeRecycled: "What Can Be Recycled",
      recyclingLocations: "Recycling Drop-off Locations",
      plastic: "Plastic",
      paper: "Paper",
      metal: "Metal",
      glass: "Glass",
      clothes: "Clothes"
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-light-green rounded-3xl p-4 m-4 md:p-8 md:m-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-start mb-12">
          <h1 className="text-4xl md:text-5xl text-dark-green font-bold max-w-2xl">
            {t.title}
          </h1>
          <div className="justify-self-end">
            <LanguageToggle 
              language={language} 
              onChange={(lang) => setLanguage(lang as "ru" | "en")} 
            />
          </div>
        </header>

        {/* Navigation */}
        <nav className="bg-mid-green mb-16">
          <div className="flex overflow-x-auto">
            <button className="px-6 py-4 text-dark-green font-medium hover:bg-mid-green/80">
              {t.whatCanBeRecycled}
            </button>
            <button className="px-6 py-4 text-dark-green font-medium hover:bg-mid-green/80">
              {t.recyclingLocations}
            </button>
          </div>
        </nav>

        {/* What Can Be Recycled Section */}
        <section className="mb-20">
          <h2 className="text-3xl text-dark-green font-bold flex items-center gap-2 mb-12">
            {t.whatCanBeRecycled} <span className="text-xl">→</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-12 mb-16">
            <RecyclingCategory 
              icon={<Coffee className="h-12 w-12 text-dark-green" />} 
              title={t.plastic}
              language={language}
              type="plastic"
            />
            <RecyclingCategory 
              icon={<FileText className="h-12 w-12 text-dark-green" />} 
              title={t.paper}
              language={language}
              type="paper"
            />
            <RecyclingCategory 
              icon={<Wine className="h-12 w-12 text-dark-green" />} 
              title={t.glass}
              language={language}
              type="glass"
            />
            <RecyclingCategory 
              icon={<Recycle className="h-12 w-12 text-dark-green" />} 
              title={t.metal}
              language={language}
              type="metal"
            />
          </div>

          {/* Map with recycling points */}
          <RecyclingMap language={language} />
        </section>

        {/* Recycling Locations Section */}
        <section className="mb-16 flex gap-8 flex-col md:flex-row">
          <div className="md:w-1/2">
            <h2 className="text-3xl text-dark-green font-bold mb-8">
              {t.recyclingLocations}
            </h2>
            
            <div className="bg-light-green p-8 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-40 h-40 mx-auto mb-4">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-dark-green">
                    <path 
                      fill="currentColor" 
                      d="M9,3L7.17,5H4A2,2 0 0,0 2,7V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V7A2,2 0 0,0 20,5H16.83L15,3M12,18A5,5 0 0,1 7,13A5,5 0 0,1 12,8A5,5 0 0,1 17,13A5,5 0 0,1 12,18M12,17L13.25,14.25L16,13L13.25,11.75L12,9L10.75,11.75L8,13L10.75,14.25"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 space-y-4">
            <LocationAccordion 
              title={t.plastic}
              icon={<Coffee className="h-6 w-6 text-dark-green" />}
              locations={getRecyclingPointsByMaterial("plastic")}
              language={language}
            />
            <LocationAccordion 
              title={t.paper}
              icon={<FileText className="h-6 w-6 text-dark-green" />}
              locations={getRecyclingPointsByMaterial("paper")}
              language={language}
            />
            <LocationAccordion 
              title={t.metal}
              icon={<Recycle className="h-6 w-6 text-dark-green" />}
              locations={getRecyclingPointsByMaterial("metal")}
              language={language}
            />
            <LocationAccordion 
              title={t.clothes}
              icon={<Shirt className="h-6 w-6 text-dark-green" />}
              locations={getRecyclingPointsByMaterial("clothes")}
              language={language}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;