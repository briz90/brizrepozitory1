interface ServicesProps {
  onOpenForm: () => void
}

export default function Services({ onOpenForm }: ServicesProps) {
  const services = [
    {
      title: 'Ведение бухгалтерии',
      description: 'Полное сопровождение учёта для ООО и ИП',
      price: 'от 5 000 ₽/мес',
      features: [
        'Первичная документация',
        'Книга учёта доходов и расходов',
        'Расчёт зарплат и кадровый учёт',
        'Подготовка и сдача отчётности',
        'Консультации по taxation',
      ],
      popular: false,
    },
    {
      title: 'Комплексное обслуживание',
      description: 'Всё включено — для тех, кто хочет забыть о бухгалтерии',
      price: 'от 12 000 ₽/мес',
      features: [
        'Всё из тарифа «Ведение бухгалтерии»',
        'Персональный бухгалтер',
        'Электронный документооборот',
        'Взаимодействие с банками',
        'Подготовка управленческой отчётности',
        'Представительство в налоговой',
      ],
      popular: true,
    },
    {
      title: 'Восстановление учёта',
      description: 'Приведём в порядок запущенную бухгалтерию',
      price: 'от 15 000 ₽',
      features: [
        'Аудит текущего состояния',
        'Восстановление первичных документов',
        'Корректировка отчётности',
        'Подача уточнённых деклараций',
        'Минимизация штрафов и пеней',
      ],
      popular: false,
    },
    {
      title: 'Разовые услуги',
      description: 'Точечная помощь по конкретным задачам',
      price: 'от 3 000 ₽',
      features: [
        'Подготовка декларации 3-НДФЛ',
        'Регистрация ООО / ИП',
        'Ликвидация и реорганизация',
        'Кадровый аудит',
        'Консультация по оптимизации налогов',
      ],
      popular: false,
    },
  ]

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-title">Услуги и цены</h1>
          <p className="section-subtitle">
            Прозрачное ценообразование без скрытых платежей. Стоимость зависит от объёма операций и системы налогообложения.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                  service.popular
                    ? 'bg-emerald-600 text-white shadow-xl shadow-emerald-200 scale-105'
                    : 'bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-200'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-100 text-emerald-800 px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                )}

                <h3 className={`text-xl font-bold mb-2 ${service.popular ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
                <p className={`text-sm mb-4 ${service.popular ? 'text-emerald-100' : 'text-gray-500'}`}>
                  {service.description}
                </p>
                <div className={`text-2xl font-bold mb-6 ${service.popular ? 'text-white' : 'text-emerald-600'}`}>
                  {service.price}
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${service.popular ? 'text-emerald-200' : 'text-emerald-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-sm ${service.popular ? 'text-emerald-50' : 'text-gray-600'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onOpenForm}
                  className={`w-full py-3 rounded-xl font-semibold text-base transition-all duration-300 ${
                    service.popular
                      ? 'bg-white text-emerald-700 hover:bg-emerald-50'
                      : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                  }`}
                >
                  Оставить заявку
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Дополнительные услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Регистрация ООО', price: 'от 5 000 ₽' },
              { name: 'Регистрация ИП', price: 'от 2 000 ₽' },
              { name: 'Нулевая отчётность', price: 'от 1 500 ₽/кв.' },
              { name: 'Кадровый учёт', price: 'от 3 000 ₽/мес' },
              { name: 'ВЭД сопровождение', price: 'от 8 000 ₽/мес' },
              { name: 'Консультация (1 час)', price: '3 000 ₽' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-5 rounded-xl bg-gray-50 hover:bg-emerald-50 transition-colors">
                <span className="text-gray-700 font-medium text-lg">{item.name}</span>
                <span className="text-emerald-600 font-bold text-lg whitespace-nowrap ml-4">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Не нашли подходящую услугу?</h2>
          <p className="text-emerald-100 text-lg mb-8">
            Оставьте заявку — подберём индивидуальное решение под ваш бизнес
          </p>
          <button onClick={onOpenForm} className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold py-4 px-10 rounded-xl text-xl transition-all duration-300 shadow-lg hover:shadow-xl">
            Получить расчёт
          </button>
        </div>
      </section>
    </div>
  )
}
