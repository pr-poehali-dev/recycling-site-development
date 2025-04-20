import { ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { RecyclingPointType } from "@/data/recyclingPoints";

type LocationAccordionProps = {
  title: string;
  icon: React.ReactNode;
  locations: RecyclingPointType[];
  language: "ru" | "en";
};

export const LocationAccordion = ({ title, icon, locations, language }: LocationAccordionProps) => {
  return (
    <Accordion type="single" collapsible className="w-full bg-mid-green rounded-lg overflow-hidden">
      <AccordionItem value="item-1" className="border-0">
        <AccordionTrigger className="py-4 px-5 hover:no-underline">
          <div className="flex items-center gap-3">
            {icon}
            <span className="text-xl font-medium text-dark-green">{title}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-5 pb-4">
          <div className="space-y-3">
            {locations.length > 0 ? (
              locations.map((location, index) => (
                <div key={index} className="bg-light-green p-3 rounded-lg">
                  <h3 className="font-medium text-dark-green">
                    {language === "ru" ? location.nameRu : location.nameEn}
                  </h3>
                  <p className="text-sm text-dark-green/70">
                    {language === "ru" ? location.addressRu : location.addressEn}
                  </p>
                  
                  {location.image && (
                    <div className="mt-3 rounded-lg overflow-hidden h-40">
                      <img 
                        src={location.image} 
                        alt={language === "ru" ? location.nameRu : location.nameEn} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  <Button variant="outline" size="sm" className="mt-3 bg-mid-green/50 text-dark-green border-dark-green/20">
                    {language === "ru" ? "Показать на карте" : "Show on map"}
                  </Button>
                </div>
              ))
            ) : (
              <p className="text-dark-green/70">
                {language === "ru" 
                  ? "Пункты приема будут добавлены позже" 
                  : "Recycling points will be added later"}
              </p>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
