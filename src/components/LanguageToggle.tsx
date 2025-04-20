import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type LanguageToggleProps = {
  language: "ru" | "en";
  onChange: (language: string) => void;
};

export const LanguageToggle = ({ language, onChange }: LanguageToggleProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-1 text-lg font-medium text-right">
          {language === "en" ? "English" : "Русский"}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => onChange("en")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onChange("ru")}>
          Русский
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
