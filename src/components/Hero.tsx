import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.7)), url('https://images.unsplash.com/photo-1615971677499-5467cbab01d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <div className="mb-8">
            <h1 className="font-montserrat text-5xl md:text-7xl font-bold mb-4 leading-tight">
              <span className="block text-white">Симфония</span>
              <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Камня
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6"></div>
          </div>

          {/* Description */}
          <div className="mb-12 space-y-4">
            <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
              Ищете надёжность и элегантность? Наши изделия из натурального и
              искусственного камня станут украшением любого дома.
            </p>
            <p className="text-lg text-gray-300">
              Собственное производство и профессиональный монтаж. Выберите
              долговечность и стиль — мы воплотим ваши мечты в камне!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-medium border-0"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-400 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 px-8 py-4 text-lg"
            >
              <Icon name="Eye" size={20} className="mr-2" />
              Посмотреть работы
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">15+ лет опыта</h3>
              <p className="text-gray-300 text-sm">
                Профессиональная работа с камнем
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Wrench" size={32} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Собственное производство
              </h3>
              <p className="text-gray-300 text-sm">
                Полный цикл от проекта до монтажа
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Гарантия качества</h3>
              <p className="text-gray-300 text-sm">Надёжность на десятилетия</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-blue-400/70" />
      </div>
    </section>
  );
};

export default Hero;
