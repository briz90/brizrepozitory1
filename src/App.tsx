import { useState, useEffect, useRef } from 'react'

function App() {
  const [greeting, setGreeting] = useState('')
  const [showContent, setShowContent] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, speed: number, color: string}>>([])
  const containerRef = useRef<HTMLDivElement>(null)

  const greetings = [
    'Привет! 👋',
    'Здравствуй! ✨',
    'Добро пожаловать! 🎉',
    'Hola! 🌟',
    'Hello! 🚀',
    'こんにちは! 🌸',
    'Bonjour! 🥐',
    'Ciao! 🍕',
  ]

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setGreeting(greetings[index])
      index = (index + 1) % greetings.length
    }, 2000)

    setTimeout(() => setShowContent(true), 500)

    // Generate particles
    const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#06b6d4']
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      speed: Math.random() * 20 + 10,
      color: colors[Math.floor(Math.random() * colors.length)]
    }))
    setParticles(newParticles)

    return () => clearInterval(interval)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      })
    }
  }

  const [clickCount, setClickCount] = useState(0)
  const [showEmoji, setShowEmoji] = useState(false)

  const handleClick = () => {
    setClickCount(prev => prev + 1)
    setShowEmoji(true)
    setTimeout(() => setShowEmoji(false), 1000)
  }

  const timeOfDay = () => {
    const hour = new Date().getHours()
    if (hour < 6) return 'Доброй ночи 🌙'
    if (hour < 12) return 'Доброе утро ☀️'
    if (hour < 18) return 'Добрый день 🌤️'
    return 'Добрый вечер 🌆'
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center"
    >
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 opacity-30 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)`,
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full opacity-60 animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            animation: `float ${particle.speed}s ease-in-out infinite`,
            animationDelay: `${particle.id * 0.2}s`,
          }}
        />
      ))}

      {/* Main content */}
      <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Greeting text with animation */}
        <div className="mb-8">
          <h1
            key={greeting}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white animate-fade-in cursor-pointer select-none"
            onClick={handleClick}
            style={{
              textShadow: '0 0 40px rgba(139, 92, 246, 0.5)',
            }}
          >
            {greeting}
          </h1>
          {showEmoji && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-4xl animate-bounce-up">
              {['🎉', '✨', '🌟', '💫', '🎊'][clickCount % 5]}
            </div>
          )}
        </div>

        {/* Time-based greeting */}
        <p className="text-xl md:text-2xl text-purple-200 mb-12 font-light">
          {timeOfDay()}
        </p>

        {/* Interactive card */}
        <div className="max-w-lg mx-auto backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl hover:scale-105 transition-transform duration-300">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-green-300 text-sm font-medium">Я готов помочь!</span>
            </div>

            <p className="text-white/80 text-lg leading-relaxed">
              Я — AI-ассистент для создания веб-приложений. Опиши, что тебе нужно, и я создам это!
            </p>

            <div className="grid grid-cols-2 gap-3 mt-6">
              {[
                { icon: '🎨', label: 'Дизайн' },
                { icon: '⚡', label: 'Скорость' },
                { icon: '🔧', label: 'Инструменты' },
                { icon: '🚀', label: 'Результат' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white/5 rounded-xl p-3 border border-white/10 hover:bg-white/10 transition-colors cursor-default"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-white/70 text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Click counter */}
        {clickCount > 0 && (
          <p className="mt-6 text-white/50 text-sm animate-fade-in">
            Кликов: {clickCount} {clickCount >= 10 ? '🏆 Ты настойчивый!' : clickCount >= 5 ? '👍 Продолжай!' : ''}
          </p>
        )}

        {/* Bottom decoration */}
        <div className="mt-12 flex justify-center gap-2">
          {['bg-purple-500', 'bg-pink-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'].map((color, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${color} animate-bounce`}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes bounce-up {
          0% { opacity: 1; transform: translate(-50%, 0); }
          100% { opacity: 0; transform: translate(-50%, -100px); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        .animate-bounce-up {
          animation: bounce-up 1s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default App
