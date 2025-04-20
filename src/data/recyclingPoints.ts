export type RecyclingPointType = {
  nameRu: string;
  nameEn: string;
  addressRu: string;
  addressEn: string;
  image: string;
  materials: ("plastic" | "paper" | "metal" | "glass" | "clothes")[];
  coordinates?: {
    lat: number;
    lng: number;
  };
  minutes?: number;
};

// Данные пунктов переработки
export const recyclingPoints: RecyclingPointType[] = [
  {
    nameRu: "Быстроф",
    nameEn: "Bystrof",
    addressRu: "ул. Алебастровая, 1, Казань",
    addressEn: "1 Alebastrovaya St., Kazan",
    image: "https://cdn.poehali.dev/files/dd5889ba-5b05-4d8b-bf51-defb2151be12.jpeg",
    materials: ["plastic"],
    coordinates: {
      lat: 55.786398,
      lng: 49.122103
    },
    minutes: 9
  },
  {
    nameRu: "Экотек",
    nameEn: "Ekotek",
    addressRu: "ул. Короленко, 63, Казань",
    addressEn: "63 Korolenko St., Kazan",
    image: "/placeholder.svg",
    materials: ["paper"],
    coordinates: {
      lat: 55.791377,
      lng: 49.114419
    },
    minutes: 15
  },
  {
    nameRu: "Втормет",
    nameEn: "Vtormet",
    addressRu: "ул. Гудованцева, д. 1б, Казань",
    addressEn: "1b Gudovantseva St., Kazan",
    image: "/placeholder.svg",
    materials: ["metal"],
    coordinates: {
      lat: 55.826369,
      lng: 49.132429
    }
  },
  {
    nameRu: "Контейнеры в ТЦ Kazan MALL",
    nameEn: "Containers in Kazan MALL",
    addressRu: "г. Казань, ул. Павлюхина д. 91, вход со стороны улицы Спартаковской, где магазин Лента, при входе справа",
    addressEn: "91 Pavlyukhina St., Kazan, entrance from Spartakovskaya street, near Lenta store, on the right side at the entrance",
    image: "/placeholder.svg",
    materials: ["clothes"],
    coordinates: {
      lat: 55.782450,
      lng: 49.127890
    }
  }
];

// Функция для получения пунктов переработки по типу материала
export const getRecyclingPointsByMaterial = (material: string) => {
  return recyclingPoints.filter(point => point.materials.includes(material as any));
};
