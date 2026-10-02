import { useState } from 'react'

interface RequestFormProps {
  isOpen: boolean
  onClose: () => void
}

interface Request {
  id: string
  name: string
  phone: string
  date: string
}

export default function RequestForm({ isOpen, onClose }: RequestFormProps) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!name.trim()) {
      setError('Пожалуйста, введите ваше имя')
      return
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      setError('Пожалуйста, введите корректный номер телефона')
      return
    }

    // Сохраняем заявку в localStorage
    const requests: Request[] = JSON.parse(localStorage.getItem('balance_requests') || '[]')
    const newRequest: Request = {
      id: Date.now().toString(),
      name: name.trim(),
      phone: phone.trim(),
      date: new Date().toISOString(),
    }
    requests.push(newRequest)
    localStorage.setItem('balance_requests', JSON.stringify(requests))

    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setName('')
      setPhone('')
      onClose()
    }, 2500)
  }

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '')
    let formatted = ''
    if (digits.length > 0) {
      if (digits[0] === '7' || digits[0] === '8') {
        formatted = '+7'
        if (digits.length > 1) formatted += ' ' + digits.slice(1, 4)
        if (digits.length > 4) formatted += ' ' + digits.slice(4, 7)
        if (digits.length > 7) formatted += '-' + digits.slice(7, 9)
        if (digits.length > 9) formatted += '-' + digits.slice(9, 11)
      } else {
        formatted = '+7 ' + digits.slice(0, 10)
      }
    }
    return formatted
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value)
    setPhone(formatted)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-scale-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
        >
          <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Заявка отправлена!</h3>
            <p className="text-gray-500 text-lg">Мы перезвоним вам в ближайшее время</p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Получить расчёт</h3>
              <p className="text-gray-500 text-base">Оставьте контакты — мы подберём оптимальный тариф и перезвоним</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ваше имя</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Иван Иванов"
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all placeholder:text-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="+7 900 000-00-00"
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all placeholder:text-gray-300"
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}

              <button type="submit" className="btn-primary w-full text-center">
                Отправить
              </button>

              <p className="text-xs text-gray-400 text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          </>
        )}
      </div>

      <style>{`
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-scale-in {
          animation: scale-in 0.2s ease-out;
        }
      `}</style>
    </div>
  )
}
