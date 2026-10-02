import { Link } from 'react-router-dom'

interface HomeProps {
  onOpenForm: () => void
}

export default function Home({ onOpenForm }: HomeProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-50 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-100 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              Работаем с 2010 года
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Ваш бизнес растёт —{' '}
              <span className="text-emerald-600">вы спокойны</span>{' '}
              за финансы
            </h1>

            <p className="text-xl md:text-2xl text-gray-500 mb-10 leading-relaxed">
              Берём на себя всю бухгалтерию, чтобы вы занимались тем, что действительно важно — развитием бизнеса
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={onOpenForm} className="btn-primary text-xl">
                Получить расчёт
              </button>
              <Link to="/services" className="btn-secondary text-xl text-center">
                Наши услуги
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Почему выбирают нас</h2>
            <p className="section-subtitle">Три причины доверить бухгалтерию профессионалам</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Advantage 1 */}
            <div className="card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Без штрафов и рисков</h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                Сдаём отчётность вовремя, следим за изменениями законодательства. Если ошибка по нашей вине — компенсируем штрафы.
              </p>
            </div>

            {/* Advantage 2 */}
            <div className="card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Экономия времени</h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                Вам не нужно разбираться в нюансах учёта — мы берём всё на себя. Освободите до 20 часов в месяц.
              </p>
            </div>

            {/* Advantage 3 */}
            <div className="card text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Прозрачные цены</h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                Фиксированная стоимость без скрытых платежей. Вы всегда знаете, сколько платите и за что.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Готовы передать бухгалтерию профессионалам?
          </h2>
          <p className="text-emerald-100 text-xl mb-8">
            Оставьте заявку — рассчитаем стоимость за 15 минут
          </p>
          <button onClick={onOpenForm} className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold py-4 px-10 rounded-xl text-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Получить расчёт
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '14+', label: 'лет на рынке' },
              { value: '500+', label: 'клиентов' },
              { value: '0', label: 'штрафов клиентам' },
              { value: '24ч', label: 'время ответа' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">{stat.value}</div>
                <div className="text-gray-500 text-base md:text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
