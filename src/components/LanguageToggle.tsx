
import { Button } from "@/components/ui/button";

type LanguageToggleProps = {
  language: string;
  onChange: (language: string) => void;
};

export const LanguageToggle = ({ language, onChange }: LanguageToggleProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Button 
        variant={language === "ru" ? "default" : "outline"}
        size="sm"
        onClick={() => onChange("ru")}
      >
        🇷🇺 RU
      </Button>
      <Button 
        variant={language === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => onChange("en")}
      >
        🇬🇧 EN
      </Button>
    </div>
  );
};
