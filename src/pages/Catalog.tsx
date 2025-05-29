import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Catalog = () => {
  const materials = [
    {
      name: "Гранит",
      description: "Прочный натуральный камень с уникальным рисунком",
      image:
        "https://images.unsplash.com/photo-1615971677499-5467cbab01d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Износостойкий", "Термостойкий", "Натуральный", "Долговечный"],
      price: "от 3 500 ₽/м²",
    },
    {
      name: "Мрамор",
      description: "Элегантный камень для роскошных интерьеров",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Престижный", "Уникальный", "Полируемый", "Натуральный"],
      price: "от 4 500 ₽/м²",
    },
    {
      name: "Кварц",
      description: "Искусственный камень высокого качества",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Непористый", "Прочный", "Гигиеничный", "Цветостойкий"],
      price: "от 5 000 ₽/м²",
    },
    {
      name: "Акриловый камень",
      description: "Современный композитный материал",
      image:
        "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Пластичный",
        "Бесшовный",
        "Ремонтопригодный",
        "Разнообразный",
      ],
      price: "от 2 800 ₽/м²",
    },
  ];

  const products = [
    {
      name: "Столешницы",
      description: "Кухонные и ванные столешницы любой сложности",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Индивидуальные размеры",
        "Обработка кромки",
        "Вырезы под технику",
        "Монтаж",
      ],
    },
    {
      name: "Подоконники",
      description: "Элегантные подоконники из натурального камня",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Любая ширина",
        "Полированная поверхность",
        "Обработка торцов",
        "Установка",
      ],
    },
    {
      name: "Лестницы",
      description: "Ступени и площадки из камня",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Противоскользящая обработка",
        "Ступени и подступенки",
        "Перила",
        "Площадки",
      ],
    },
    {
      name: "Раковины",
      description: "Интегрированные и накладные раковины",
      image:
        "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Врезные модели",
        "Накладные чаши",
        "Интегрированные",
        "Дизайнерские формы",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-montserrat text-4xl md:text-6xl font-bold text-white mb-6">
            Каталог материалов
          </h1>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Широкий выбор натурального и искусственного камня для ваших проектов
          </p>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Материалы
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {materials.map((material, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={material.image}
                    alt={material.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {material.price}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-montserrat text-2xl text-gray-900">
                    {material.name}
                  </CardTitle>
                  <p className="text-gray-600">{material.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {material.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="text-sm bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-center"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    <Icon name="Info" size={16} className="mr-2" />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Products Section */}
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Изделия
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-montserrat text-lg text-gray-900">
                    {product.name}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <Icon
                          name="Check"
                          size={14}
                          className="text-amber-600 mr-2"
                        />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalog;
