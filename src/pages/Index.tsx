
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RecyclingInfo } from "@/components/RecyclingInfo";
import { RecyclingPoint } from "@/components/RecyclingPoint";
import { RecyclingMap } from "@/components/RecyclingMap";
import { LanguageToggle } from "@/components/LanguageToggle";
import { recyclingPoints } from "@/data/recyclingPoints";

const Index = () => {
  const [language, setLanguage] = useState<"ru" | "en">("ru");

  const translations = {
    ru: {
      title: "Eco Guide",
      subtitle: "Руководство по переработке отходов",
      whatCanBeRecycled: "Что можно переработать",
      plastic: "Пластик",
      paper: "Бумага",
      metal: "Металл",
      clothes: "Одежда",
      recyclingPoints: "Пункты переработки",
      map: "Карта пунктов переработки",
      findNearby: "Найти ближайшие пункты",
      aboutUs: "О нас",
      aboutUsText: "Мы помогаем людям найти ближайшие пункты переработки и предоставляем информацию о том, какие материалы подлежат переработке."
    },
    en: {
      title: "Eco Guide",
      subtitle: "Waste Recycling Guide",
      whatCanBeRecycled: "What can be recycled",
      plastic: "Plastic",
      paper: "Paper",
      metal: "Metal",
      clothes: "Clothes",
      recyclingPoints: "Recycling points",
      map: "Recycling points map",
      findNearby: "Find nearby points",
      aboutUs: "About us",
      aboutUsText: "We help people find the nearest recycling points and provide information about which materials can be recycled."
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary p-4 text-primary-foreground">
        <div className="container flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">{t.title}</h1>
            <p className="text-sm">{t.subtitle}</p>
          </div>
          <LanguageToggle 
            language={language} 
            onChange={(lang) => setLanguage(lang as "ru" | "en")} 
          />
        </div>
      </header>

      <main className="container py-8 px-4 md:px-8">
        {/* What can be recycled section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{t.whatCanBeRecycled}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <RecyclingInfo 
              title={t.plastic} 
              language={language}
              type="plastic"
              icon="♻️" 
            />
            <RecyclingInfo 
              title={t.paper} 
              language={language}
              type="paper"
              icon="📄" 
            />
            <RecyclingInfo 
              title={t.metal} 
              language={language}
              type="metal"
              icon="🔧" 
            />
            <RecyclingInfo 
              title={t.clothes} 
              language={language}
              type="clothes"
              icon="👕" 
            />
          </div>
        </section>

        {/* Map section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{t.map}</h2>
          <div className="bg-accent p-4 rounded-lg">
            <RecyclingMap language={language} />
            <div className="mt-4 text-center">
              <Button>{t.findNearby}</Button>
            </div>
          </div>
        </section>

        {/* Recycling points section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{t.recyclingPoints}</h2>
          <Tabs defaultValue="plastic">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="plastic">{t.plastic}</TabsTrigger>
              <TabsTrigger value="paper">{t.paper}</TabsTrigger>
              <TabsTrigger value="metal">{t.metal}</TabsTrigger>
              <TabsTrigger value="clothes">{t.clothes}</TabsTrigger>
            </TabsList>
            <TabsContent value="plastic" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recyclingPoints
                .filter(point => point.materials.includes("plastic"))
                .map((point, index) => (
                  <RecyclingPoint 
                    key={index}
                    name={language === "ru" ? point.nameRu : point.nameEn}
                    address={language === "ru" ? point.addressRu : point.addressEn}
                    image={point.image}
                    materials={point.materials}
                  />
                ))
              }
            </TabsContent>
            <TabsContent value="paper" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recyclingPoints
                .filter(point => point.materials.includes("paper"))
                .map((point, index) => (
                  <RecyclingPoint 
                    key={index}
                    name={language === "ru" ? point.nameRu : point.nameEn}
                    address={language === "ru" ? point.addressRu : point.addressEn}
                    image={point.image}
                    materials={point.materials}
                  />
                ))
              }
            </TabsContent>
            <TabsContent value="metal" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recyclingPoints
                .filter(point => point.materials.includes("metal"))
                .map((point, index) => (
                  <RecyclingPoint 
                    key={index}
                    name={language === "ru" ? point.nameRu : point.nameEn}
                    address={language === "ru" ? point.addressRu : point.addressEn}
                    image={point.image}
                    materials={point.materials}
                  />
                ))
              }
            </TabsContent>
            <TabsContent value="clothes" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recyclingPoints
                .filter(point => point.materials.includes("clothes"))
                .map((point, index) => (
                  <RecyclingPoint 
                    key={index}
                    name={language === "ru" ? point.nameRu : point.nameEn}
                    address={language === "ru" ? point.addressRu : point.addressEn}
                    image={point.image}
                    materials={point.materials}
                  />
                ))
              }
            </TabsContent>
          </Tabs>
        </section>

        {/* About section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t.aboutUs}</h2>
          <p className="text-muted-foreground">{t.aboutUsText}</p>
        </section>
      </main>

      <footer className="bg-secondary p-4 text-secondary-foreground">
        <div className="container text-center">
          <p>© 2023 Eco Guide. {language === "ru" ? "Все права защищены." : "All rights reserved."}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
