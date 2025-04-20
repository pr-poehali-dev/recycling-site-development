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

// Заглушка для данных, которые будут добавлены позже
export const recyclingPoints: RecyclingPointType[] = [
  {
    nameRu: "ЭкоПункт на Баумана",
    nameEn: "EcoPoint on Bauman",
    addressRu: "ул. Баумана, 25, Казань",
    addressEn: "25 Bauman St., Kazan",
    image: "/placeholder.svg",
    materials: ["plastic", "paper", "metal"],
    coordinates: {
      lat: 55.786398,
      lng: 49.122103
    },
    minutes: 9
  },
  {
    nameRu: "Центр приема вторсырья",
    nameEn: "Recycling Center",
    addressRu: "ул. Пушкина, 17, Казань",
    addressEn: "17 Pushkin St., Kazan",
    image: "/placeholder.svg",
    materials: ["plastic", "paper", "clothes"],
    coordinates: {
      lat: 55.791377,
      lng: 49.114419
    },
    minutes: 15
  },
  {
    nameRu: "Зеленая точка",
    nameEn: "Green Point",
    addressRu: "пр. Ямашева, 45, Казань",
    addressEn: "45 Yamashev Ave., Kazan",
    image: "/placeholder.svg",
    materials: ["plastic", "metal", "glass"],
    coordinates: {
      lat: 55.826369,
      lng: 49.132429
    }
  }
];

// Функция для получения пунктов переработки по типу материала
export const getRecyclingPointsByMaterial = (material: string) => {
  return recyclingPoints.filter(point => point.materials.includes(material as any));
};
