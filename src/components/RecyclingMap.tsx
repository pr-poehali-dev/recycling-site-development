
type RecyclingMapProps = {
  language: "ru" | "en";
};

export const RecyclingMap = ({ language }: RecyclingMapProps) => {
  return (
    <div className="h-[400px] bg-muted rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="text-5xl mb-4">🗺️</div>
        <p className="text-muted-foreground">
          {language === "ru" 
            ? "Здесь будет карта с пунктами переработки" 
            : "The map with recycling points will be here"}
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          {language === "ru" 
            ? "Пункты приема будут добавлены позже" 
            : "Recycling points will be added later"}
        </p>
      </div>
    </div>
  );
};
