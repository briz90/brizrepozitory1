import { useState } from 'react'

export default function Reviews() {
  const [visibleCount, setVisibleCount] = useState(6)

  const reviews = [
    {
      name: 'Михаил С.',
      company: 'ООО «ТехноСервис»',
      text: 'Работаем с «Балансом» уже 3 года. За это время ни одного штрафа, ни одной просроченной отчётности. Очень удобно, что есть персональный менеджер — все вопросы решаются быстро.',
      rating: 5,
      date: 'Март 2024',
    },
    {
      name: 'Ольга К.',
      company: 'ИП Козлова О.В.',
      text: 'Перешла от другого бухгалтера и не пожалела. Всё чётко, прозрачно, цены адекватные. Особенно нравится, что всегда можно позвонить и получить консультацию.',
      rating: 5,
      date: 'Февраль 2024',
    },
    {
      name: 'Алексей Д.',
      company: 'ООО «СтройМастер»',
      text: 'Обратился за восстановлением учёта — ситуация была запущенная. Ребята навели порядок, подали уточнёнки, помогли минимизировать штрафы. Рекомендую!',
      rating: 5,
      date: 'Январь 2024',
    },
    {
      name: 'Наталья В.',
      company: 'Салон красоты «Лотос»',
      text: 'Как владелец небольшого бизнеса, я не хотела разбираться в бухгалтерии. «Баланс» взял всё на себя — я спокойна и занимаюсь любимым делом.',
      rating: 5,
      date: 'Декабрь 2023',
    },
    {
      name: 'Сергей М.',
      company: 'ООО «ФудДеливери»',
      text: 'Отличная команда! Помогли разобраться с ВЭД, оформили все документы для импорта. Профессионалы своего дела.',
      rating: 5,
      date: 'Ноябрь 2023',
    },
    {
      name: 'Ирина Л.',
      company: 'ИП Лебедева И.А.',
      text: 'Очень довольна обслуживанием. Раньше тратила выходные на бумажную работу, теперь всё делает «Баланс». Экономия времени колоссальная!',
      rating: 5,
      date: 'Октябрь 2023',
    },
    {
      name: 'Дмитрий Н.',
      company: 'ООО «МегаТорг»',
      text: 'Перешли на комплексное обслуживание полгода назад. Качество на высоте, отчётность всегда вовремя. Отдельное спасибо за помощь с налоговым планированием.',
      rating: 5,
      date: 'Сентябрь 2023',
    },
    {
      name: 'Екатерина Р.',
      company: 'Студия дизайна «Арт»',
      text: 'Дружелюбная команда, всё объясняют понятным языком. Для творческого человека это очень важно — не чувствовать себя глупым при обсуждении финансов.',
      rating: 4,
      date: 'Август 2023',
    },
    {
      name: 'Павел Г.',
      company: 'ООО «ГринТех»',
      text: 'Начинал как ИП, потом открыл ООО — «Баланс» сопровождал на всех этапах. Удобно, что одна компания ведёт всю историю.',
      rating: 5,
      date: 'Июль 2023',
    },
  ]

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-title">Отзывы клиентов</h1>
          <p className="section-subtitle">
            Нам доверяют более 500 компаний и предпринимателей. Вот что они говорят о нашей работе.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, visibleCount).map((review, i) => (
              <div key={i} className="card">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg
                      key={j}
                      className={`w-5 h-5 ${j < review.rating ? 'text-yellow-400' : 'text-gray-200'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  «{review.text}»
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-700 font-semibold text-sm">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.company}</div>
                  </div>
                  <div className="ml-auto text-xs text-gray-400">{review.date}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Show more */}
          {visibleCount < reviews.length && (
            <div className="text-center mt-10">
              <button
                onClick={() => setVisibleCount(reviews.length)}
                className="btn-secondary"
              >
                Показать все отзывы
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Rating summary */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-8 h-8 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="text-5xl font-bold text-white mb-2">4.9</div>
          <p className="text-emerald-100 text-xl">Средняя оценка от наших клиентов</p>
          <p className="text-emerald-200 text-base mt-2">На основе 127 отзывов</p>
        </div>
      </section>
    </div>
  )
}
