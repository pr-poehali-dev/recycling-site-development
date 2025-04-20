import { recyclingPoints } from "@/data/recyclingPoints";

type RecyclingMapProps = {
  language: "ru" | "en";
};

export const RecyclingMap = ({ language }: RecyclingMapProps) => {
  return (
    <div className="h-[400px] bg-mid-green/30 p-5 rounded-lg overflow-hidden">
      <div className="relative w-full h-full bg-light-green rounded-lg overflow-hidden">
        {/* Карта (заглушка) */}
        <div className="absolute inset-0 bg-mid-green/20 flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Базовая карта с Казанью */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl">
                {language === "ru" ? "Казань" : "Kazan"}
              </span>
            </div>
            
            {/* Маркеры с точками */}
            {recyclingPoints.map((point, index) => (
              <div 
                key={index}
                className="absolute"
                style={{
                  left: `${30 + Math.random() * 40}%`,
                  top: `${20 + Math.random() * 60}%`
                }}
              >
                <div className="relative">
                  <div className="w-6 h-6 bg-dark-green rounded-full flex items-center justify-center text-white">
                    {point.materials.includes("plastic") && "♳"}
                    {point.materials.includes("paper") && "📄"}
                    {point.materials.includes("metal") && "🔧"}
                    {point.materials.includes("clothes") && "👕"}
                  </div>
                  {point.minutes && (
                    <div className="absolute -right-4 -top-4 bg-white px-1 rounded-md text-xs font-medium">
                      {point.minutes} min
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
