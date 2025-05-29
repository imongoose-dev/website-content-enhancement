import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "ChefHat",
      title: "Изготовление столешниц",
      description:
        "Производство столешниц из натурального и искусственного камня любой сложности по индивидуальным размерам.",
      features: ["Мрамор", "Гранит", "Кварц", "Акрил"],
    },
    {
      icon: "Square",
      title: "Подоконники из камня",
      description:
        "Элегантные и долговечные подоконники, которые станут украшением любого интерьера.",
      features: ["Любые размеры", "Обработка кромки", "Полировка", "Монтаж"],
    },
    {
      icon: "Droplets",
      title: "Каменные раковины",
      description:
        "Уникальные раковины из камня, сочетающие в себе практичность и изысканный дизайн.",
      features: ["Врезные", "Накладные", "Интегрированные", "Дизайнерские"],
    },
    {
      icon: "Grid3x3",
      title: "Облицовка плиткой",
      description:
        "Качественная облицовка стен и полов каменной плиткой для создания стильного интерьера.",
      features: ["Стены", "Полы", "Фасады", "Лестницы"],
    },
    {
      icon: "TrendingUp",
      title: "Лестницы из камня",
      description:
        "Прочные и красивые лестницы, которые прослужат десятилетиями, не теряя своего внешнего вида.",
      features: ["Ступени", "Подступенки", "Перила", "Площадки"],
    },
    {
      icon: "Settings",
      title: "Монтаж и обслуживание",
      description:
        "Профессиональный монтаж и последующее обслуживание каменных изделий.",
      features: ["Установка", "Герметизация", "Полировка", "Ремонт"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-white mb-4">
            Наши услуги
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Полный спектр услуг по работе с натуральным и искусственным камнем.
            От проектирования до финального монтажа.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-dark-card text-white"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-white"
                  />
                </div>
                <CardTitle className="font-montserrat text-xl text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="text-sm bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-dark-card rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border border-dark-border">
            <h3 className="font-montserrat text-2xl font-bold text-white mb-4">
              Готовы обсудить ваш проект?
            </h3>
            <p className="text-gray-300 mb-6">
              Получите бесплатную консультацию и расчёт стоимости. Наши
              специалисты помогут выбрать оптимальное решение.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+79001232343"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить сейчас
              </a>
              <a
                href="#contacts"
                className="inline-flex items-center justify-center px-6 py-3 border border-dark-border text-gray-300 rounded-lg hover:bg-dark-border hover:text-white transition-colors font-medium"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать нам
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
