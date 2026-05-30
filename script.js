let currentLang = 'en';

const dict = {
  en: {
    'Home': 'Home',
    'Features': 'Features',
    'Pricing': 'Pricing',
    'How It Works': 'How It Works',
    'Join Discord': 'Join Discord',
    'عربي': 'عربي',
    '▶ Get Access via Discord': '▶ Get Access via Discord',
    '0 DELAY • UNDETECTABLE • 100 CPS': '0 DELAY • UNDETECTABLE • 100 CPS',
    'Violent': 'Violent',
    'Clicker': 'Clicker',
    'The most powerful auto-clicker with zero delay. Dominate every game with lightning speed.': 'The most powerful auto-clicker with zero delay. Dominate every game with lightning speed.',
    'Why <span class="accent">Violent</span>?': 'Why <span class="accent">Violent</span>?',
    'Zero Delay': 'Zero Delay',
    'Industry fastest response time. 0ms delay between clicks.': 'Industry fastest response time. 0ms delay between clicks.',
    'Undetectable': 'Undetectable',
    'Advanced bypass technology. Stay safe while you dominate.': 'Advanced bypass technology. Stay safe while you dominate.',
    'Precision Mode': 'Precision Mode',
    'Customize click patterns, intervals, and hotkeys with pixel accuracy.': 'Customize click patterns, intervals, and hotkeys with pixel accuracy.',
    'Lightning Fast': 'Lightning Fast',
    'Up to 100 clicks per second. Lightning precision.': 'Up to 100 clicks per second. Lightning precision.',
    'How It <span class="accent">Works</span>': 'How It <span class="accent">Works</span>',
    'Join Our Discord': 'Join Our Discord',
    'Click the button above and join the Violent Discord server.': 'Click the button above and join the Violent Discord server.',
    'Open a Ticket': 'Open a Ticket',
    'Go to the ticket channel and open a new purchase ticket.': 'Go to the ticket channel and open a new purchase ticket.',
    'Get Your Machine ID': 'Get Your Machine ID',
    'Download MachineId.exe and run it to get your unique Machine ID.': 'Download MachineId.exe and run it to get your unique Machine ID.',
    'Download MachineId.exe': 'Download MachineId.exe',
    'Get Your Key': 'Get Your Key',
    'Receive your personal license key and start using Violent Clicker.': 'Receive your personal license key and start using Violent Clicker.',
    'Simple <span class="accent">Pricing</span>': 'Simple <span class="accent">Pricing</span>',
    'LIFETIME': 'LIFETIME',
    '🔥 WEEKEND SALE': '🔥 WEEKEND SALE',
    'Sale ends in:': 'Sale ends in:',
    'Violent Clicker': 'Violent Clicker',
    'One-time payment. Lifetime access. Limited time.': 'One-time payment. Lifetime access. Limited time.',
    '⚡ Zero Delay': '⚡ Zero Delay',
    '🛡️ Undetectable': '🛡️ Undetectable',
    '🎯 Precision Mode': '🎯 Precision Mode',
    '🚀 100 CPS': '🚀 100 CPS',
    '🔑 Unique HWID Key': '🔑 Unique HWID Key',
    '📦 Lifetime Updates': '📦 Lifetime Updates',
    '▶ Buy Now — Join Discord': '▶ Buy Now — Join Discord',
    '© 2026 Violent. All rights reserved.': '© 2026 Violent. All rights reserved.',
  },
  ar: {
    'Home': 'الرئيسية',
    'Features': 'المميزات',
    'Pricing': 'السعر',
    'How It Works': 'طريقة العمل',
    'Join Discord': 'انضم للديسكورد',
    'عربي': 'English',
    '▶ Get Access via Discord': '▶ احصل عليها عبر الديسكورد',
    '0 DELAY • UNDETECTABLE • 100 CPS': '0 تأخير • غير مكتشف • 100 نقرة/ثانية',
    'Violent': 'عنيف',
    'Clicker': 'النقر',
    'The most powerful auto-clicker with zero delay. Dominate every game with lightning speed.': 'أقوى أداة نقر تلقائي بدون تأخير. سيطر على كل لعبة بسرعة البرق.',
    'Why <span class="accent">Violent</span>?': 'لماذا <span class="accent">عنيف</span>؟',
    'Zero Delay': 'بدون تأخير',
    'Industry fastest response time. 0ms delay between clicks.': 'أسرع وقت استجابة في المجال. 0 مللي ثانية تأخير بين النقرات.',
    'Undetectable': 'غير قابل للكشف',
    'Advanced bypass technology. Stay safe while you dominate.': 'تقنية تجاوز متقدمة. ابق آمناً أثناء سيطرتك.',
    'Precision Mode': 'وضع دقيق',
    'Customize click patterns, intervals, and hotkeys with pixel accuracy.': 'خصص أنماط النقر والفترات والمفاتيح بدقة البكسل.',
    'Lightning Fast': 'سرعة خارقة',
    'Up to 100 clicks per second. Lightning precision.': 'حتى 100 نقرة في الثانية. دقة فائقة.',
    'How It <span class="accent">Works</span>': '<span class="accent">طريقة</span> العمل',
    'Join Our Discord': 'انضم لديسكوردنا',
    'Click the button above and join the Violent Discord server.': 'اضغط الزر بالأعلى وانضم لسيرفر Violent ديسكورد.',
    'Open a Ticket': 'افتح تكت',
    'Go to the ticket channel and open a new purchase ticket.': 'اذهب لروم التكت وافتح تكت شراء جديد.',
    'Get Your Machine ID': 'اجلب Machine ID',
    'Download MachineId.exe and run it to get your unique Machine ID.': 'حمّل MachineId.exe وشغّله عشان تطلع Machine ID حقك.',
    'Download MachineId.exe': 'حمّل MachineId.exe',
    'Get Your Key': 'استلم مفتاحك',
    'Receive your personal license key and start using Violent Clicker.': 'استلم مفتاح الترخيص الشخصي وابدأ استخدام Violent Clicker.',
    'Simple <span class="accent">Pricing</span>': 'سعر <span class="accent">بسيط</span>',
    'LIFETIME': 'مدى الحياة',
    '🔥 WEEKEND SALE': '🔥 عرض الأسبوع',
    'Sale ends in:': 'العرض ينتهي بعد:',
    'Violent Clicker': 'عنيف النقر',
    'One-time payment. Lifetime access. Limited time.': 'دفعة واحدة. وصول مدى الحياة. لفترة محدودة.',
    '⚡ Zero Delay': '⚡ بدون تأخير',
    '🛡️ Undetectable': '🛡️ غير قابل للكشف',
    '🎯 Precision Mode': '🎯 وضع دقيق',
    '🚀 100 CPS': '🚀 100 نقرة/ثانية',
    '🔑 Unique HWID Key': '🔑 مفتاح HWID خاص',
    '📦 Lifetime Updates': '📦 تحديثات مدى الحياة',
    '▶ Buy Now — Join Discord': '▶ اشتري الآن — انضم للديسكورد',
    '© 2026 Violent. All rights reserved.': '© 2026 عنيف. جميع الحقوق محفوظة.',
  }
};

// Particles
function createParticles() {
  const c = document.querySelector('.particles');
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (Math.random() * 15 + 10) + 's';
    p.style.animationDelay = (Math.random() * 10) + 's';
    c.appendChild(p);
  }
}
createParticles();

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.feature-card, .step, .pricing-card, .hero-banner').forEach(el => observer.observe(el));

// Language toggle
function switchLang(lang) {
  currentLang = lang;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.dir = dir;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-en], [data-ar]').forEach(el => {
    const key = el.dataset[lang];
    if (key) {
      if (el.tagName === 'A' || el.tagName === 'BUTTON' || el.classList.contains('price-badge') || key.indexOf('<') === -1) {
        el.textContent = key;
      } else {
        el.innerHTML = key;
      }
    }
  });

  document.querySelector('.lang-btn').textContent = lang === 'en' ? 'عربي' : 'English';
}

document.querySelector('.lang-btn').addEventListener('click', () => {
  switchLang(currentLang === 'en' ? 'ar' : 'en');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Countdown timer — 7 days from page load
function startCountdown() {
  const end = new Date();
  end.setDate(end.getDate() + 7);
  const timer = document.getElementById('timer');
  if (!timer) return;

  function tick() {
    const now = new Date();
    const diff = end - now;
    if (diff <= 0) { timer.textContent = 'EXPIRED'; return; }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    timer.textContent = `${d}d ${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  }
  tick();
  setInterval(tick, 1000);
}
startCountdown();
