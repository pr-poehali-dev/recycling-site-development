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
    <Accordion type="single" collapsible className="w-full bg-secondary/60 rounded-lg overflow-hidden">
      <AccordionItem value="item-1" className="border-0">
        <AccordionTrigger className="py-4 px-5 hover:no-underline">
          <div className="flex items-center gap-3">
            {icon}
            <span className="text-xl font-medium">{title}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-5 pb-4">
          <div className="space-y-3">
            {locations.length > 0 ? (
              locations.map((location, index) => (
                <div key={index} className="bg-background p-3 rounded-lg">
                  <h3 className="font-medium">
                    {language === "ru" ? location.nameRu : location.nameEn}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === "ru" ? location.addressRu : location.addressEn}
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    {language === "ru" ? "Показать на карте" : "Show on map"}
                  </Button>
                </div>
              ))
            ) : (
              <p className="text-muted-foreground">
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
