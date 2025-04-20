
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type RecyclingPointProps = {
  name: string;
  address: string;
  image: string;
  materials: string[];
};

export const RecyclingPoint = ({ 
  name, 
  address, 
  image,
  materials 
}: RecyclingPointProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer hover:shadow-md transition-all">
          <CardHeader>
            <CardTitle className="text-lg">{name}</CardTitle>
            <CardDescription className="line-clamp-2">{address}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-40 w-full bg-muted rounded-md overflow-hidden">
              <img 
                src={image || "/placeholder.svg"} 
                alt={name} 
                className="w-full h-full object-cover" 
              />
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <div className="mb-4">
            <img 
              src={image || "/placeholder.svg"} 
              alt={name} 
              className="w-full h-64 object-cover rounded-md" 
            />
          </div>
          
          <h3 className="font-bold mb-2">Адрес:</h3>
          <p className="mb-4">{address}</p>
          
          <h3 className="font-bold mb-2">Принимаемые материалы:</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {materials.map((material, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
              >
                {material === "plastic" && "Пластик"}
                {material === "paper" && "Бумага"}
                {material === "metal" && "Металл"}
                {material === "clothes" && "Одежда"}
              </span>
            ))}
          </div>
          
          <Button className="w-full">Построить маршрут</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
