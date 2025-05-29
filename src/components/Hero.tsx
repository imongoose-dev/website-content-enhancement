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
          backgroundImage: `linear-gradient(rgba(44, 44, 44, 0.7), rgba(44, 44, 44, 0.5)), url('https://images.unsplash.com/photo-1615971677499-5467cbab01d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <div className="mb-8">
            <h1 className="font-montserrat text-5xl md:text-7xl font-bold mb-4 leading-tight">
              <span className="block text-white">Симфония</span>
              <span className="block text-amber-400">Камня</span>
            </h1>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
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
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-medium"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
            >
              <Icon name="Eye" size={20} className="mr-2" />
              Посмотреть работы
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-amber-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2">15+ лет опыта</h3>
              <p className="text-gray-300 text-sm">
                Профессиональная работа с камнем
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Wrench" size={32} className="text-amber-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Собственное производство
              </h3>
              <p className="text-gray-300 text-sm">
                Полный цикл от проекта до монтажа
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-amber-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Гарантия качества</h3>
              <p className="text-gray-300 text-sm">Надёжность на десятилетия</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white/70" />
      </div>
    </section>
  );
};

export default Hero;
