import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

type RecyclingCategoryProps = {
  icon: React.ReactNode;
  title: string;
  language: "ru" | "en";
  type: "plastic" | "paper" | "metal" | "clothes" | "glass";
};

export const RecyclingCategory = ({ icon, title, language, type }: RecyclingCategoryProps) => {
  const recyclingData = {
    plastic: {
      ru: {
        title: "Пластик",
        canRecycle: [
          "PET/ПЭТ (маркировка 1) - прозрачные бутылки от напитков",
          "HDPE/ПНД (маркировка 2) - флаконы от бытовой химии, канистры",
          "LDPE/ПВД (маркировка 4) - пакеты, плёнка"
        ],
        cannotRecycle: [
          "PVC/ПВХ (маркировка 3) - плёнка для натяжных потолков, трубы",
          "PS/ПС (маркировка 6) - одноразовая посуда, контейнеры для яиц",
          "Пластик без маркировки",
          "Загрязненный пластик с остатками пищи"
        ]
      },
      en: {
        title: "Plastic",
        canRecycle: [
          "PET (code 1) - clear beverage bottles",
          "HDPE (code 2) - household chemical bottles, canisters",
          "LDPE (code 4) - bags, film"
        ],
        cannotRecycle: [
          "PVC (code 3) - stretch ceiling film, pipes",
          "PS (code 6) - disposable tableware, egg containers",
          "Plastic without marking",
          "Contaminated plastic with food residues"
        ]
      }
    },
    paper: {
      ru: {
        title: "Бумага",
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
    },
    glass: {
      ru: {
        title: "Стекло",
        canRecycle: [
          "Стеклянные банки",
          "Стеклянные бутылки",
          "Стеклянные флаконы",
          "Оконное стекло"
        ],
        cannotRecycle: [
          "Керамика",
          "Хрусталь",
          "Лампочки и люминесцентные лампы",
          "Зеркала с амальгамой"
        ]
      },
      en: {
        title: "Glass",
        canRecycle: [
          "Glass jars",
          "Glass bottles",
          "Glass vials",
          "Window glass"
        ],
        cannotRecycle: [
          "Ceramics",
          "Crystal",
          "Light bulbs and fluorescent lamps",
          "Mirrors with amalgam"
        ]
      }
    }
  };

  const data = recyclingData[type][language];

  return (
    <Dialog>
      <DialogTrigger className="flex flex-col items-center gap-2 cursor-pointer transition-transform hover:scale-105">
        <div className="bg-secondary/50 rounded-full w-24 h-24 flex items-center justify-center">
          {icon}
        </div>
        <span className="font-medium">{title}</span>
      </DialogTrigger>
      <DialogContent className="bg-background max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary">{data.title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-6">
          <div>
            <h3 className="font-bold text-green-700 mb-2">
              {language === "ru" ? "Можно переработать:" : "Can be recycled:"}
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              {data.canRecycle.map((item, index) => (
                <li key={`can-${index}`}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-red-600 mb-2">
              {language === "ru" ? "Нельзя переработать:" : "Cannot be recycled:"}
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              {data.cannotRecycle.map((item, index) => (
                <li key={`cannot-${index}`}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
