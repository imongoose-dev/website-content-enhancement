import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  const contactInfo = [
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (900) 123-23-43",
      link: "tel:+79001232343",
    },
    {
      icon: "Mail",
      title: "Email",
      value: "info@simfoniya-kamnya.ru",
      link: "mailto:info@simfoniya-kamnya.ru",
    },
    {
      icon: "MapPin",
      title: "Адрес",
      value: "г. Омск, ул. Производственная, 15",
      link: "https://maps.google.com",
    },
    {
      icon: "Clock",
      title: "Режим работы",
      value: "Пн-Пт: 9:00-18:00, Сб: 10:00-16:00",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-montserrat text-4xl md:text-6xl font-bold text-white mb-6">
            Контакты
          </h1>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Свяжитесь с нами для консультации и расчёта стоимости вашего проекта
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Cards */}
            <div className="space-y-6">
              <h2 className="font-montserrat text-3xl font-bold text-gray-900 mb-8">
                Как с нами связаться
              </h2>

              {contactInfo.map((contact, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                        <Icon
                          name={contact.icon as any}
                          size={24}
                          className="text-white"
                        />
                      </div>
                      <div>
                        <h3 className="font-montserrat text-lg font-semibold text-gray-900 mb-1">
                          {contact.title}
                        </h3>
                        {contact.link ? (
                          <a
                            href={contact.link}
                            className="text-amber-600 hover:text-amber-700 transition-colors"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-gray-600">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Social Links */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="font-montserrat text-xl text-gray-900">
                    Мы в социальных сетях
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                    >
                      <Icon
                        name="MessageCircle"
                        size={20}
                        className="text-white"
                      />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                    >
                      <Icon name="Youtube" size={20} className="text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                    >
                      <Icon name="Facebook" size={20} className="text-white" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="font-montserrat text-2xl text-gray-900">
                    Напишите нам
                  </CardTitle>
                  <p className="text-gray-600">
                    Оставьте заявку и мы свяжемся с вами в течение часа
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Имя *
                      </label>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Телефон *
                      </label>
                      <Input placeholder="+7 (___) ___-__-__" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input placeholder="your@email.com" type="email" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Тип услуги
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
                      <option>Выберите услугу</option>
                      <option>Столешницы</option>
                      <option>Подоконники</option>
                      <option>Лестницы</option>
                      <option>Раковины</option>
                      <option>Консультация</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Сообщение
                    </label>
                    <Textarea
                      placeholder="Расскажите о вашем проекте..."
                      rows={4}
                    />
                  </div>

                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-lg py-3">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных
                    данных
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-20">
            <h2 className="font-montserrat text-3xl font-bold text-gray-900 text-center mb-8">
              Как нас найти
            </h2>
            <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <Icon
                  name="MapPin"
                  size={48}
                  className="text-gray-500 mx-auto mb-4"
                />
                <p className="text-gray-600 text-lg">
                  Интерактивная карта будет добавлена
                </p>
                <p className="text-gray-500">
                  г. Омск, ул. Производственная, 15
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
