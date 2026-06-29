const services = [
  {
    icon: '💍',
    title: 'ოქროს განვადება',
    description: 'ოქროს ნივთების სწრაფი შეფასება და მაქსიმალური ფასი. უსაფრთხო შენახვა სერტიფიცირებულ საცავში.',
  },
  {
    icon: '💰',
    title: 'სწრაფი სესხი',
    description: 'ფული 15 წუთში — მინიმალური დოკუმენტები, გამჭვირვალე პირობები, მოქნილი გადახდის გრაფიკი.',
  },
  {
    icon: '💎',
    title: 'ძვირფასეულობა',
    description: 'ბრილიანტები, საათები, ძვირფასეული ქვები — პროფესიონალური შეფასება სერტიფიცირებული გემოლოგის მიერ.',
  },
  {
    icon: '📱',
    title: 'ტექნიკა',
    description: 'iPhone, MacBook, სმარტფონები და ტექნიკა — სწრაფი შეფასება და კონკურენტუნარიანი ფასი.',
  },
]

const products = [
  {
    name: 'ოქროს ყელსაბამი 585',
    price: '1,250 ₾',
    original: '1,580 ₾',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
    badge: '-21%',
  },
  {
    name: 'Rolex Submariner',
    price: '8,900 ₾',
    original: '12,000 ₾',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=400&fit=crop',
    badge: 'პრემიუმ',
  },
  {
    name: 'iPhone 15 Pro 256GB',
    price: '2,100 ₾',
    original: '2,650 ₾',
    image: 'https://images.unsplash.com/photo-1695048133142-1c204c6e11b9?w=400&h=400&fit=crop',
    badge: '-21%',
  },
  {
    name: 'ბრილიანტის ყურბგერი',
    price: '3,400 ₾',
    original: '4,200 ₾',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop',
    badge: 'ახალი',
  },
]

const stats = [
  { value: '15+', label: 'წლის გამოცდილება' },
  { value: '50,000+', label: 'კმაყოფილი კლიენტი' },
  { value: '15 წთ', label: 'სესხის გაცემა' },
  { value: '0.8%', label: 'დღიური საკომისიო' },
]

const steps = [
  { num: '01', title: 'მობრძანდით ფილიალში', desc: 'მოიტანეთ ოქრო, ძვირფასეულობა ან ტექნიკა უფასო შეფასებისთვის' },
  { num: '02', title: 'მიიღეთ შეფასება', desc: 'ჩვენი სპეციალისტი განგიმარტავთ პირობებს და შემოგთავაზებთ საუკეთესო ფასს' },
  { num: '03', title: 'მიიღეთ ფული', desc: 'ხელშეკრულების გაფორმების შემდეგ ფული მიიღებთ 15 წუთში' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-stone-950/90 backdrop-blur-md border-b border-amber-900/30">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏛️</span>
            <div>
              <div className="font-bold text-lg text-amber-400">ოქროს ლომბარდი</div>
              <div className="text-xs text-stone-400">სანდო პარტნიორი 2009 წლიდან</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-stone-300">
            <a href="#services" className="hover:text-amber-400 transition-colors">სერვისები</a>
            <a href="#products" className="hover:text-amber-400 transition-colors">პროდუქცია</a>
            <a href="#how" className="hover:text-amber-400 transition-colors">როგორ მუშაობს</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">კონტაქტი</a>
          </nav>
          <a
            href="tel:+995555123456"
            className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
          >
            📞 დარეკეთ
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/40 via-stone-950 to-stone-950" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-600/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 text-amber-400 text-sm mb-6">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              ღიაა დღეს 09:00 — 21:00
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              სწრაფი სესხი{' '}
              <span className="text-amber-400">ოქროს</span>{' '}
              უზრუნველყოფით
            </h1>
            <p className="text-stone-400 text-lg mb-8 leading-relaxed">
              მიიღეთ ფული 15 წუთში ოქროს, ძვირფასეულობის ან ტექნიკის უზრუნველყოფით.
              გამჭვირვალე პირობები, მინიმალური საკომისიო, 15 წლიანი გამოცდილება.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-8 py-3 rounded-xl text-center transition-colors"
              >
                უფასო შეფასება
              </a>
              <a
                href="#products"
                className="border border-stone-600 hover:border-amber-500 text-stone-300 hover:text-amber-400 font-semibold px-8 py-3 rounded-xl text-center transition-colors"
              >
                პროდუქციის ნახვა
              </a>
            </div>
          </div>

          {/* Loan Calculator Card */}
          <div className="bg-stone-900 border border-amber-900/40 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-xl font-bold text-amber-400 mb-6">სესხის კალკულატორი</h2>
            <div className="space-y-5">
              <div>
                <label className="text-sm text-stone-400 mb-2 block">სესხის თანხა</label>
                <div className="bg-stone-800 rounded-xl px-4 py-3 text-2xl font-bold text-amber-400">
                  5,000 ₾
                </div>
              </div>
              <div>
                <label className="text-sm text-stone-400 mb-2 block">ვადა (დღე)</label>
                <div className="flex gap-2">
                  {['30', '60', '90', '180'].map((d) => (
                    <div
                      key={d}
                      className={`flex-1 text-center py-2 rounded-lg text-sm font-medium ${
                        d === '30'
                          ? 'bg-amber-500 text-stone-950'
                          : 'bg-stone-800 text-stone-400'
                      }`}
                    >
                      {d}
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t border-stone-700 pt-5 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-stone-400">დღიური საკომისიო</span>
                  <span className="text-stone-200">0.8%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-stone-400">გადასახდელი (30 დღე)</span>
                  <span className="text-stone-200">6,200 ₾</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span className="text-amber-400">თქვენ მიიღებთ</span>
                  <span className="text-amber-400">5,000 ₾</span>
                </div>
              </div>
              <button className="w-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold py-3 rounded-xl transition-colors">
                განაცხადის გაგზავნა
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-amber-900/20 bg-stone-900/50">
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-1">{s.value}</div>
              <div className="text-sm text-stone-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">ჩვენი სერვისები</h2>
            <p className="text-stone-400 max-w-xl mx-auto">
              სრული სპექტრის ლომბარდული მომსახურება — ოქროდან ტექნიკამდე
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-stone-900 border border-stone-800 hover:border-amber-700/50 rounded-2xl p-6 transition-all hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-amber-300">{s.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 px-4 bg-stone-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">გასაყიდი პროდუქცია</h2>
              <p className="text-stone-400">შერჩეული ნივთები კონკურენტუნარიან ფასებში</p>
            </div>
            <a href="#" className="text-amber-400 text-sm hover:text-amber-300 hidden md:block">
              ყველას ნახვა →
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <div
                key={p.name}
                className="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden hover:border-amber-700/50 transition-all hover:-translate-y-1 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-amber-500 text-stone-950 text-xs font-bold px-2 py-1 rounded-full">
                    {p.badge}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2 text-stone-200">{p.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-amber-400">{p.price}</span>
                    <span className="text-sm text-stone-500 line-through">{p.original}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">როგორ მუშაობს</h2>
            <p className="text-stone-400">სესხის მიღება 3 მარტივ ნაბიჯში</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="relative">
                <div className="text-6xl font-black text-amber-500/10 mb-4">{step.num}</div>
                <h3 className="text-xl font-bold mb-3 text-amber-300">{step.title}</h3>
                <p className="text-stone-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-stone-900/50 to-stone-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">დაგვიკავშირდით</h2>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <div className="font-semibold text-amber-300">მისამართი</div>
                  <div className="text-stone-400">თბილისი, რუსთაველის გამზ. 42</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <div className="font-semibold text-amber-300">ტელეფონი</div>
                  <div className="text-stone-400">+995 555 123 456</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">🕐</span>
                <div>
                  <div className="font-semibold text-amber-300">სამუშაო საათები</div>
                  <div className="text-stone-400">ორშაბათი — კვირა: 09:00 — 21:00</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">✉️</span>
                <div>
                  <div className="font-semibold text-amber-300">ელფოსტა</div>
                  <div className="text-stone-400">info@lombardi.ge</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-stone-900 border border-amber-900/30 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6 text-amber-400">უფასო კონსულტაცია</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="სახელი და გვარი"
                className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500"
              />
              <input
                type="tel"
                placeholder="ტელეფონი"
                className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500"
              />
              <textarea
                placeholder="რა გსურთ განვადება?"
                rows={3}
                className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500 resize-none"
              />
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold py-3 rounded-xl transition-colors"
              >
                გაგზავნა
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-800 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-stone-500">
          <div>© 2026 ოქროს ლომბარდი. ყველა უფლება დაცულია.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400 transition-colors">პირობები</a>
            <a href="#" className="hover:text-amber-400 transition-colors">კონფიდენციალურობა</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
