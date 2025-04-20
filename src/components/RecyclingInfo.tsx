
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type RecyclingInfoProps = {
  title: string;
  type: "plastic" | "paper" | "metal" | "clothes";
  icon: string;
  language: "ru" | "en";
};

export const RecyclingInfo = ({ title, type, icon, language }: RecyclingInfoProps) => {
  const recyclingData = {
    plastic: {
      ru: {
        title: "Пластик",
        description: "Информация о переработке пластика",
        canRecycle: [
          "PET/ПЭТ (маркировка 1) - прозрачные бутылки от напитков",
          "HDPE/ПНД (маркировка 2) - флаконы от бытовой химии, канистры, крышки",
          "LDPE/ПВД (маркировка 4) - пакеты, плёнка"
        ],
        cannotRecycle: [
          "PVC/ПВХ (маркировка 3) - плёнка для натяжных потолков, трубы",
          "PS/ПС (маркировка 6) - одноразовая посуда, контейнеры для яиц",
          "Пластик без маркировки",
          "Загрязненный пластик с остатками пищи и жира"
        ]
      },
      en: {
        title: "Plastic",
        description: "Information about plastic recycling",
        canRecycle: [
          "PET (code 1) - clear beverage bottles",
          "HDPE (code 2) - household chemical bottles, canisters, caps",
          "LDPE (code 4) - bags, film"
        ],
        cannotRecycle: [
          "PVC (code 3) - stretch ceiling film, pipes",
          "PS (code 6) - disposable tableware, egg containers",
          "Plastic without marking",
          "Contaminated plastic with food and grease residues"
        ]
      }
    },
    paper: {
      ru: {
        title: "Бумага",
        description: "Информация о переработке бумаги",
        canRecycle: [
          "Офисная бумага",
          "Газеты и журналы",
          "Картонные коробки (сложенные)",
          "Бумажная упаковка"
        ],
        cannotRecycle: [
          "Бумага с пищевыми загрязнениями",
          "Чеки (термобумага)",
          "Ламинированная бумага",
          "Одноразовые стаканчики с покрытием"
        ]
      },
      en: {
        title: "Paper",
        description: "Information about paper recycling",
        canRecycle: [
          "Office paper",
          "Newspapers and magazines",
          "Cardboard boxes (folded)",
          "Paper packaging"
        ],
        cannotRecycle: [
          "Paper with food contamination",
          "Receipts (thermal paper)",
          "Laminated paper",
          "Disposable cups with coating"
        ]
      }
    },
    metal: {
      ru: {
        title: "Металл",
        description: "Информация о переработке металла",
        canRecycle: [
          "Алюминиевые банки",
          "Консервные банки",
          "Металлические крышки",
          "Фольга (чистая)"
        ],
        cannotRecycle: [
          "Аэрозольные баллончики",
          "Краска в металлических банках",
          "Батарейки (требуют специальной утилизации)",
          "Металл с остатками пищи"
        ]
      },
      en: {
        title: "Metal",
        description: "Information about metal recycling",
        canRecycle: [
          "Aluminum cans",
          "Tin cans",
          "Metal lids",
          "Foil (clean)"
        ],
        cannotRecycle: [
          "Aerosol cans",
          "Paint in metal cans",
          "Batteries (require special disposal)",
          "Metal with food residue"
        ]
      }
    },
    clothes: {
      ru: {
        title: "Одежда",
        description: "Информация о переработке одежды",
        canRecycle: [
          "Чистая одежда в хорошем состоянии",
          "Постельное белье и полотенца",
          "Сумки и обувь в хорошем состоянии",
          "Ремни и аксессуары"
        ],
        cannotRecycle: [
          "Грязная или влажная одежда",
          "Порванная и непригодная для носки одежда",
          "Нижнее белье и купальники",
          "Одежда с пятнами от краски или химикатов"
        ]
      },
      en: {
        title: "Clothes",
        description: "Information about clothes recycling",
        canRecycle: [
          "Clean clothes in good condition",
          "Bed linens and towels",
          "Bags and shoes in good condition",
          "Belts and accessories"
        ],
        cannotRecycle: [
          "Dirty or wet clothes",
          "Torn and unwearable clothes",
          "Underwear and swimwear",
          "Clothes with paint stains or chemicals"
        ]
      }
    }
  };

  const data = recyclingData[type][language];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="transition-all hover:shadow-md cursor-pointer hover:-translate-y-1">
          <CardHeader className="text-center">
            <div className="text-4xl mb-2">{icon}</div>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <CardDescription>
              {language === "ru" ? "Нажмите для подробностей" : "Click for details"}
            </CardDescription>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{data.title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <h3 className="font-bold text-green-600 mb-2">
            {language === "ru" ? "Можно переработать:" : "Can be recycled:"}
          </h3>
          <ul className="list-disc pl-5 mb-4">
            {data.canRecycle.map((item, index) => (
              <li key={`can-${index}`} className="mb-1">{item}</li>
            ))}
          </ul>
          
          <h3 className="font-bold text-red-600 mb-2">
            {language === "ru" ? "Нельзя переработать:" : "Cannot be recycled:"}
          </h3>
          <ul className="list-disc pl-5">
            {data.cannotRecycle.map((item, index) => (
              <li key={`cannot-${index}`} className="mb-1">{item}</li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
};
