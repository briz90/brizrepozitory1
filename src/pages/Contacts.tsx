interface ContactsProps {
  onOpenForm: () => void
}

export default function Contacts({ onOpenForm }: ContactsProps) {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-title">Контакты</h1>
          <p className="section-subtitle">
            Свяжитесь с нами любым удобным способом — мы всегда на связи
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Contact Cards */}
            <div className="space-y-6">
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Телефон</h3>
                    <a href="tel:+79000000000" className="text-2xl font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
                      +7 900 000-00-00
                    </a>
                    <p className="text-gray-500 mt-1">Звоните в рабочее время</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Электронная почта</h3>
                    <a href="mailto:info@balans.ru" className="text-xl font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">
                      info@balans.ru
                    </a>
                    <p className="text-gray-500 mt-1">Ответим в течение 2 часов</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Адрес</h3>
                    <p className="text-xl text-gray-700 font-medium">
                      г. Москва, ул. Примерная, д. 1, оф. 100
                    </p>
                    <p className="text-gray-500 mt-1">Метро «Центральная», 5 мин. пешком</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Режим работы</h3>
                    <p className="text-lg text-gray-700">
                      Пн–Пт: 9:00–18:00
                    </p>
                    <p className="text-gray-500 mt-1">Сб–Вс: по записи</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form / Map placeholder */}
            <div className="space-y-6">
              {/* Quick form */}
              <div className="card">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Быстрая заявка</h3>
                <p className="text-gray-500 mb-6">Оставьте контакты — мы перезвоним в течение 15 минут</p>
                <button onClick={onOpenForm} className="btn-primary w-full text-center text-xl">
                  Получить расчёт
                </button>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden bg-emerald-50 border border-emerald-100 h-80 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-emerald-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                  <p className="text-emerald-600 font-medium text-lg">г. Москва, ул. Примерная, д. 1</p>
                  <p className="text-emerald-500 text-sm mt-1">Офис 100, 1 этаж</p>
                </div>
              </div>

              {/* Messengers */}
              <div className="card">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Напишите нам в мессенджере</h3>
                <div className="flex gap-3">
                  {[
                    { name: 'WhatsApp', color: 'bg-green-500' },
                    { name: 'Telegram', color: 'bg-blue-500' },
                    { name: 'Viber', color: 'bg-purple-500' },
                  ].map((messenger, i) => (
                    <button
                      key={i}
                      className={`flex-1 ${messenger.color} text-white py-3 px-4 rounded-xl font-medium hover:opacity-90 transition-opacity`}
                    >
                      {messenger.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
