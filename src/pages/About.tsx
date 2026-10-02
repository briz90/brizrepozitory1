export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-title">О компании</h1>
          <p className="section-subtitle">
            Мы помогаем малому бизнесу расти спокойно — без тревог за бухгалтерию и налоги
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Наша история</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Компания «Баланс» основана в 2010 году. Мы начинали как небольшая команда из трёх бухгалтеров, 
                  которые мечтали изменить подход к обслуживанию малого бизнеса.
                </p>
                <p>
                  За 14 лет мы выросли в надёжную компанию с командой из 25 профессионалов. 
                  Наши клиенты — это более 500 компаний и предпринимателей, которые доверили нам свою бухгалтерию 
                  и сосредоточились на развитии бизнеса.
                </p>
                <p>
                  Мы верим, что бухгалтерия должна быть незаметной — как хороший фундамент дома: 
                  вы не думаете о нём, но знаете, что всё надёжно.
                </p>
              </div>
            </div>
            <div className="bg-emerald-50 rounded-3xl p-10">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '2010', label: 'Год основания' },
                  { value: '25', label: 'Специалистов' },
                  { value: '500+', label: 'Клиентов' },
                  { value: '14', label: 'Лет опыта' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-1">{stat.value}</div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                title: 'Ответственность',
                text: 'Мы несём финансовую ответственность за ошибки. Если штраф по нашей вине — мы его оплатим.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                ),
                title: 'Доступность',
                text: 'Всегда на связи. Отвечаем в течение 2 часов в рабочее время. Персональный менеджер для каждого клиента.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                ),
                title: 'Развитие',
                text: 'Постоянно учимся и следим за изменениями в законодательстве. Применяем современные технологии и сервисы.',
              },
            ].map((value, i) => (
              <div key={i} className="card text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Наша команда</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Анна Петрова',
                role: 'Генеральный директор',
                experience: '18 лет в бухгалтерии',
                initials: 'АП',
              },
              {
                name: 'Дмитрий Козлов',
                role: 'Главный бухгалтер',
                experience: '12 лет опыта, аттестат Минфина',
                initials: 'ДК',
              },
              {
                name: 'Елена Сидорова',
                role: 'Руководитель отдела кадров',
                experience: '10 лет в кадровом учёте',
                initials: 'ЕС',
              },
            ].map((person, i) => (
              <div key={i} className="card text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">{person.initials}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{person.name}</h3>
                <p className="text-emerald-600 font-medium mb-2">{person.role}</p>
                <p className="text-gray-500">{person.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licenses */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-6">Гарантии и лицензии</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              'Страхование профессиональной ответственности',
              'Аттестаты профессиональных бухгалтеров',
              'Членство в СРО «Институт профессиональных бухгалтеров»',
              'Договор с финансовой ответственностью',
              'Соблюдение конфиденциальности (NDA)',
              'Резервное копирование данных ежедневно',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700 text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
