import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface LayoutProps {
  children: React.ReactNode
  onOpenForm: () => void
}

export default function Layout({ children, onOpenForm }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { to: '/', label: 'Главная' },
    { to: '/services', label: 'Услуги' },
    { to: '/about', label: 'О компании' },
    { to: '/reviews', label: 'Отзывы' },
    { to: '/contacts', label: 'Контакты' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md sticky top-0 z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">Баланс</span>
                <span className="hidden sm:block text-xs text-gray-400 -mt-0.5">Бухгалтерские услуги</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 rounded-lg text-base font-medium transition-colors ${
                    isActive(link.to)
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'text-gray-600 hover:text-emerald-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Phone + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+79000000000" className="text-gray-700 font-semibold text-base hover:text-emerald-700 transition-colors">
                +7 900 000-00-00
              </a>
              <button onClick={onOpenForm} className="btn-primary !py-3 !px-6 !text-base">
                Получить расчёт
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive(link.to)
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-gray-100 mt-3">
                <a href="tel:+79000000000" className="block px-4 py-2 text-emerald-700 font-semibold text-lg">
                  +7 900 000-00-00
                </a>
                <button onClick={() => { onOpenForm(); setMobileMenuOpen(false); }} className="btn-primary w-full mt-2">
                  Получить расчёт
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-xl font-bold">Баланс</span>
              </div>
              <p className="text-gray-400 text-base leading-relaxed">
                Профессиональные бухгалтерские услуги для малого бизнеса. Работаем с 2010 года.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Навигация</h4>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link key={link.to} to={link.to} className="block text-gray-400 hover:text-emerald-400 transition-colors text-base">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Контакты</h4>
              <div className="space-y-3 text-gray-400">
                <a href="tel:+79000000000" className="block hover:text-emerald-400 transition-colors text-base">
                  📞 +7 900 000-00-00
                </a>
                <a href="mailto:info@balans.ru" className="block hover:text-emerald-400 transition-colors text-base">
                  ✉️ info@balans.ru
                </a>
                <p className="text-base">
                  📍 г. Москва, ул. Примерная, д. 1, оф. 100
                </p>
                <p className="text-base">
                  🕐 Пн–Пт: 9:00–18:00
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} ООО «Баланс». Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  )
}
