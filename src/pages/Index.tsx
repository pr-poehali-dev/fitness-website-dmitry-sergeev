import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const TRAINER_IMG =
  'https://cdn.poehali.dev/projects/c5a54fa1-9851-4895-abee-3b53ecf4fc43/files/9ef5ede2-07bc-4e62-bd20-36eab58288c2.jpg';

const nav = [
  { id: 'about', label: 'Обо мне' },
  { id: 'services', label: 'Услуги' },
  { id: 'pricing', label: 'Тарифы' },
  { id: 'portfolio', label: 'Портфолио' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'blog', label: 'Блог' },
  { id: 'contacts', label: 'Контакты' },
];

const stats = [
  { value: '10+', label: 'лет опыта' },
  { value: '500+', label: 'клиентов' },
  { value: '15', label: 'соревнований' },
  { value: '98%', label: 'достигли цели' },
];

const services = [
  {
    icon: 'Dumbbell',
    title: 'Персональные тренировки',
    text: 'Индивидуальный подход и контроль техники на каждом занятии в зале.',
  },
  {
    icon: 'Apple',
    title: 'Питание и рацион',
    text: 'Составлю план питания под твою цель — набор массы или сушку.',
  },
  {
    icon: 'Video',
    title: 'Онлайн-сопровождение',
    text: 'Тренировки и поддержка в любой точке мира через видеосвязь.',
  },
  {
    icon: 'HeartPulse',
    title: 'Восстановление',
    text: 'Программы реабилитации после травм и работа с осанкой.',
  },
];

const pricing = [
  {
    name: 'Старт',
    price: '3 000',
    unit: '₽ / занятие',
    features: ['Разовая тренировка', 'Разбор техники', 'Оценка формы'],
    accent: false,
  },
  {
    name: 'Прогресс',
    price: '20 000',
    unit: '₽ / месяц',
    features: ['8 тренировок', 'План питания', 'Чат-поддержка 24/7', 'Замеры прогресса'],
    accent: true,
  },
  {
    name: 'Онлайн',
    price: '9 000',
    unit: '₽ / месяц',
    features: ['Программа на месяц', 'Видеоуроки', 'Еженедельная связь'],
    accent: false,
  },
];

const portfolio = [
  { name: 'Алексей, −18 кг', tag: 'Похудение' },
  { name: 'Марина, +6 кг мышц', tag: 'Набор массы' },
  { name: 'Игорь, жим 120 кг', tag: 'Сила' },
  { name: 'Ольга, марафон', tag: 'Выносливость' },
];

const reviews = [
  {
    name: 'Екатерина',
    text: 'За 4 месяца сбросила 12 кг и наконец полюбила спорт. Дмитрий мотивирует как никто!',
  },
  {
    name: 'Сергей',
    text: 'Профессионал своего дела. Грамотно поставил технику, ушли боли в спине.',
  },
  {
    name: 'Анна',
    text: 'Онлайн-формат — просто спасение. Тренируюсь дома, а результат как в зале.',
  },
];

const blog = [
  { title: '5 ошибок новичка в зале', date: '28 июня', tag: 'Тренировки' },
  { title: 'Как считать КБЖУ без стресса', date: '20 июня', tag: 'Питание' },
  { title: 'Кардио до или после силовой?', date: '12 июня', tag: 'Советы' },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <button
            onClick={() => scrollTo('hero')}
            className="font-display font-bold text-xl tracking-wide"
          >
            <span className="text-primary">Д</span>С
            <span className="text-secondary">.</span>
          </button>
          <nav className="hidden lg:flex items-center gap-7">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
              >
                {n.label}
              </button>
            ))}
          </nav>
          <Button
            onClick={() => scrollTo('contacts')}
            className="hidden sm:flex bg-primary text-primary-foreground hover:bg-primary/90 font-semibold uppercase"
          >
            Записаться
          </Button>
          <button
            className="lg:hidden text-foreground"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="container py-4 flex flex-col gap-3">
              {nav.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className="text-left text-sm font-medium uppercase tracking-wide py-1"
                >
                  {n.label}
                </button>
              ))}
              <Button
                onClick={() => scrollTo('contacts')}
                className="bg-primary text-primary-foreground font-semibold uppercase mt-2"
              >
                Записаться
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="hero" className="relative pt-16 min-h-screen flex items-center">
        <div className="absolute inset-0 grid-lines opacity-30" />
        <div className="absolute -right-20 top-20 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-[120px]" />
        <div className="absolute -left-20 bottom-0 w-[400px] h-[400px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="container relative grid lg:grid-cols-2 gap-10 items-center py-16">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-sm font-medium mb-6">
              <Icon name="MapPin" size={15} />
              Ростов-на-Дону
            </div>
            <h1 className="font-display font-bold uppercase leading-[0.95] text-5xl sm:text-6xl lg:text-7xl">
              Дмитрий
              <br />
              <span className="text-primary">Сергеев</span>
            </h1>
            <p className="mt-3 text-xl sm:text-2xl font-display uppercase tracking-widest text-secondary">
              Персональный фитнес-тренер
            </p>
            <p className="mt-6 text-muted-foreground max-w-md text-lg">
              Превращаю тело и характер. Программа под твою цель, контроль на
              каждом шаге и результат, который видно.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                onClick={() => scrollTo('contacts')}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase text-base h-14 px-8"
              >
                Начать тренировки
                <Icon name="ArrowRight" size={18} className="ml-1" />
              </Button>
              <Button
                onClick={() => scrollTo('pricing')}
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-bold uppercase text-base h-14 px-8"
              >
                Тарифы
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border-2 border-primary/30">
              <img
                src={TRAINER_IMG}
                alt="Дмитрий Сергеев"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-xl font-display font-bold uppercase">
                  Master Coach
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-primary text-primary-foreground py-3 overflow-hidden -skew-y-1">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex">
              {['СИЛА', 'ДИСЦИПЛИНА', 'РЕЗУЛЬТАТ', 'ЭНЕРГИЯ', 'ПОБЕДА'].map((w) => (
                <span
                  key={w}
                  className="font-display font-bold uppercase text-xl mx-6 flex items-center gap-6"
                >
                  {w}
                  <Icon name="Zap" size={18} />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* About */}
      <section id="about" className="py-24 relative">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTag>Обо мне</SectionTag>
            <h2 className="font-display font-bold uppercase text-4xl sm:text-5xl mt-4 leading-tight">
              Твой путь к <span className="text-primary">лучшей форме</span>{' '}
              начинается здесь
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              Более 10 лет я помогаю людям в Ростове-на-Дону менять тело и жизнь.
              Мастер спорта, сертифицированный тренер и практик, который сам живёт
              по принципам, которым учит.
            </p>
            <p className="mt-4 text-muted-foreground text-lg">
              Никакой воды и модных диет — только выверенные методики, честный
              контроль и полная отдача с обеих сторон.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-card border border-border rounded-2xl p-5 hover-scale"
                >
                  <div className="font-display font-bold text-3xl text-primary">
                    {s.value}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border-2 border-secondary/30">
              <img src={TRAINER_IMG} alt="Тренировка" className="w-full h-[560px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-2xl max-w-[220px] hidden sm:block">
              <Icon name="Trophy" size={28} className="mb-2" />
              <div className="font-display font-bold uppercase leading-tight">
                Мастер спорта по бодибилдингу
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-card/40 relative">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <SectionTag>Услуги</SectionTag>
            <h2 className="font-display font-bold uppercase text-4xl sm:text-5xl mt-4">
              Что я <span className="text-primary">предлагаю</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {services.map((s) => (
              <div
                key={s.title}
                className="group bg-card border border-border rounded-2xl p-7 hover:border-primary transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon name={s.icon} size={26} />
                </div>
                <h3 className="font-display font-semibold uppercase text-xl mt-5">
                  {s.title}
                </h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <SectionTag>Тарифы</SectionTag>
            <h2 className="font-display font-bold uppercase text-4xl sm:text-5xl mt-4">
              Выбери свою <span className="text-secondary">программу</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {pricing.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-3xl p-8 border-2 transition-transform hover:-translate-y-2 ${
                  p.accent
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-card border-border'
                }`}
              >
                {p.accent && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-bold uppercase px-4 py-1 rounded-full">
                    Хит продаж
                  </div>
                )}
                <div className="font-display font-bold uppercase text-2xl">{p.name}</div>
                <div className="mt-4 flex items-end gap-1">
                  <span className="font-display font-bold text-4xl">{p.price}</span>
                  <span className={p.accent ? 'text-primary-foreground/70 mb-1' : 'text-muted-foreground mb-1'}>
                    {p.unit}
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Icon
                        name="Check"
                        size={18}
                        className={p.accent ? 'text-secondary-foreground' : 'text-secondary'}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => scrollTo('contacts')}
                  className={`w-full mt-8 font-bold uppercase ${
                    p.accent
                      ? 'bg-background text-foreground hover:bg-background/90'
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  }`}
                >
                  Выбрать
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 bg-card/40">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <SectionTag>Портфолио</SectionTag>
            <h2 className="font-display font-bold uppercase text-4xl sm:text-5xl mt-4">
              Результаты <span className="text-primary">клиентов</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {portfolio.map((p) => (
              <div
                key={p.name}
                className="group relative rounded-2xl overflow-hidden h-72 border border-border"
              >
                <img
                  src={TRAINER_IMG}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-0 p-5">
                  <span className="text-xs font-bold uppercase text-secondary tracking-wide">
                    {p.tag}
                  </span>
                  <div className="font-display font-bold uppercase text-lg mt-1">
                    {p.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <SectionTag>Отзывы</SectionTag>
            <h2 className="font-display font-bold uppercase text-4xl sm:text-5xl mt-4">
              Говорят <span className="text-secondary">клиенты</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {reviews.map((r) => (
              <div key={r.name} className="bg-card border border-border rounded-2xl p-7">
                <div className="flex gap-1 text-primary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">«{r.text}»</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center font-display font-bold text-secondary">
                    {r.name[0]}
                  </div>
                  <span className="font-semibold">{r.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-24 bg-card/40">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionTag>Блог</SectionTag>
              <h2 className="font-display font-bold uppercase text-4xl sm:text-5xl mt-4">
                Полезное <span className="text-primary">чтиво</span>
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {blog.map((b) => (
              <div
                key={b.title}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-colors"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={TRAINER_IMG}
                    alt={b.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground uppercase tracking-wide">
                    <span className="text-secondary font-bold">{b.tag}</span>
                    <span>{b.date}</span>
                  </div>
                  <h3 className="font-display font-semibold text-xl mt-3 group-hover:text-primary transition-colors">
                    {b.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                    Читать <Icon name="ArrowRight" size={15} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-24">
        <div className="container grid lg:grid-cols-2 gap-12">
          <div>
            <SectionTag>Контакты</SectionTag>
            <h2 className="font-display font-bold uppercase text-4xl sm:text-5xl mt-4">
              Готов <span className="text-primary">начать?</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Оставь заявку или свяжись напрямую — обсудим цель и подберём
              программу под тебя.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { icon: 'Phone', label: '+7 (900) 000-00-00' },
                { icon: 'Mail', label: 'dmitry@fitness-rostov.ru' },
                { icon: 'MapPin', label: 'Ростов-на-Дону, ул. Спортивная, 1' },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center text-primary">
                    <Icon name={c.icon} size={20} />
                  </div>
                  <span className="text-lg">{c.label}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-8">
              {['Instagram', 'Send', 'Youtube'].map((s) => (
                <button
                  key={s}
                  className="w-11 h-11 rounded-xl border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-colors"
                >
                  <Icon name={s} size={20} />
                </button>
              ))}
            </div>
          </div>
          <div className="bg-card border border-border rounded-3xl p-8">
            <h3 className="font-display font-bold uppercase text-2xl">
              Записаться на тренировку
            </h3>
            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                placeholder="Ваше имя"
                className="w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors"
              />
              <input
                placeholder="Телефон"
                className="w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors"
              />
              <textarea
                placeholder="Ваша цель"
                rows={4}
                className="w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors resize-none"
              />
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase h-12"
              >
                Отправить заявку
              </Button>
            </form>
            <Accordion type="single" collapsible className="mt-6">
              <AccordionItem value="q1" className="border-border">
                <AccordionTrigger className="uppercase text-sm font-semibold">
                  Нужен ли опыт?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Нет, я работаю с любым уровнем — от новичка до профи.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2" className="border-border">
                <AccordionTrigger className="uppercase text-sm font-semibold">
                  Есть ли онлайн?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, доступен полноценный онлайн-формат с сопровождением.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-display font-bold text-xl">
            <span className="text-primary">Д</span>С
            <span className="text-secondary">.</span> Сергеев
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 Дмитрий Сергеев — фитнес-тренер, Ростов-на-Дону
          </p>
        </div>
      </footer>
    </div>
  );
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-secondary font-display font-semibold uppercase tracking-[0.2em] text-sm">
      <span className="w-8 h-0.5 bg-secondary" />
      {children}
    </span>
  );
}
