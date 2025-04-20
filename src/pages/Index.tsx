import { useState } from "react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { RecyclingCategory } from "@/components/RecyclingCategory";
import { LocationAccordion } from "@/components/LocationAccordion";
import { getRecyclingPointsByMaterial } from "@/data/recyclingPoints";
import { FileText, Shirt, ShoppingBag, Wine, Trash2, Recycle } from "lucide-react";

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
      clothes: "Одежда",
      waste: "Отходы"
    },
    en: {
      title: "Recycling is One of the Ways to Help Ecology",
      whatCanBeRecycled: "What Can Be Recycled",
      recyclingLocations: "Recycling Drop-off Locations",
      plastic: "Plastic",
      paper: "Paper",
      metal: "Metal",
      glass: "Glass",
      clothes: "Clothes",
      waste: "Waste"
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-background rounded-3xl p-4 m-4 md:p-8 md:m-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-start mb-12">
          <h1 className="text-4xl md:text-5xl text-primary font-bold max-w-2xl">
            {t.title}
          </h1>
          <LanguageToggle 
            language={language} 
            onChange={(lang) => setLanguage(lang as "ru" | "en")} 
          />
        </header>

        {/* Navigation */}
        <nav className="bg-secondary mb-16">
          <div className="flex overflow-x-auto">
            <button className="px-6 py-4 text-primary font-medium hover:bg-secondary/80">
              {t.whatCanBeRecycled}
            </button>
            <button className="px-6 py-4 text-primary font-medium hover:bg-secondary/80">
              {t.recyclingLocations}
            </button>
          </div>
        </nav>

        {/* What Can Be Recycled Section */}
        <section className="mb-20">
          <h2 className="text-3xl text-primary font-bold flex items-center gap-2 mb-12">
            {t.whatCanBeRecycled} <span className="text-xl">→</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-12 mb-16">
            <RecyclingCategory 
              icon={<Recycle className="h-12 w-12 text-primary" />} 
              title={t.plastic}
              language={language}
              type="plastic"
            />
            <RecyclingCategory 
              icon={<FileText className="h-12 w-12 text-primary" />} 
              title={t.paper}
              language={language}
              type="paper"
            />
            <RecyclingCategory 
              icon={<Wine className="h-12 w-12 text-primary" />} 
              title={t.glass}
              language={language}
              type="glass"
            />
            <RecyclingCategory 
              icon={<ShoppingBag className="h-12 w-12 text-primary" />} 
              title={t.metal}
              language={language}
              type="metal"
            />
          </div>

          {/* Map Preview */}
          <div className="bg-secondary/30 p-5 rounded-lg flex items-center justify-center">
            <div className="w-full h-[200px] md:h-[300px] rounded-lg bg-muted overflow-hidden">
              <div className="h-full w-full flex flex-col items-center justify-center text-muted-foreground">
                <div className="mb-4 relative">
                  <span className="text-6xl">🗺️</span>
                  <div className="absolute right-4 bottom-8 text-4xl">📍</div>
                  <div className="absolute right-16 top-2 text-4xl">👕</div>
                  <div className="absolute left-2 bottom-4 text-4xl">🧴</div>
                </div>
                <p className="text-center text-primary font-medium">
                  {language === "ru" ? "Казань" : "Kazan"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recycling Locations Section */}
        <section className="mb-16 flex gap-8 flex-col md:flex-row">
          <div className="md:w-1/2">
            <h2 className="text-3xl text-primary font-bold mb-8">
              {t.recyclingLocations}
            </h2>
            
            <div className="bg-green-100 p-8 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-40 h-40 mx-auto mb-4">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-primary">
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
              title={t.clothes}
              icon={<Shirt className="h-6 w-6 text-primary" />}
              locations={getRecyclingPointsByMaterial("clothes")}
              language={language}
            />
            <LocationAccordion 
              title={t.waste}
              icon={<Trash2 className="h-6 w-6 text-primary" />}
              locations={getRecyclingPointsByMaterial("plastic").concat(getRecyclingPointsByMaterial("paper"))}
              language={language}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;