export const content = {
  en: {
    dir: 'ltr', brand: 'Nile & Stone', nav: ['Projects', 'Studio', 'Services', 'Contact'],
    heroTitle: 'Architecture that listens to the place.',
    heroText: 'A fictional Cairo and Dubai studio concept. Residential, cultural and high-rise design.',
    cta: 'View projects', filters: { all: 'All', residential: 'Residential', cultural: 'Cultural', tower: 'Towers' },
    projectsTitle: 'Selected projects', studioTitle: 'The studio',
    studioText: 'We design buildings that fit the climate, the street and the people who use them. This is a portfolio demo, not a real company.',
    servicesTitle: 'Services', services: ['Concept design', 'Interior architecture', 'Project supervision', '3D visualisation'],
    contactTitle: 'Start a project', name: 'Your name', email: 'Email', message: 'Tell us about the project', send: 'Send',
    thanks: 'Thanks, this demo form does not send data.', lang: 'العربية', view: 'Details', close: 'Close',
    footer: 'Demo website for portfolio purposes. Images are AI-generated.'
  },
  ar: {
    dir: 'rtl', brand: 'النيل والحجر', nav: ['المشاريع', 'الاستوديو', 'الخدمات', 'تواصل'],
    heroTitle: 'عمارة تنصت للمكان.',
    heroText: 'مفهوم استوديو افتراضي في القاهرة ودبي. تصميم سكني وثقافي وأبراج.',
    cta: 'شاهد المشاريع', filters: { all: 'الكل', residential: 'سكني', cultural: 'ثقافي', tower: 'أبراج' },
    projectsTitle: 'مشاريع مختارة', studioTitle: 'الاستوديو',
    studioText: 'نصمم مباني تناسب المناخ والشارع والناس الذين يستخدمونها. هذا موقع تجريبي للبورتفوليو وليس شركة حقيقية.',
    servicesTitle: 'الخدمات', services: ['التصميم المبدئي', 'التصميم الداخلي', 'الإشراف على التنفيذ', 'التصور ثلاثي الأبعاد'],
    contactTitle: 'ابدأ مشروعك', name: 'الاسم', email: 'البريد الإلكتروني', message: 'احكي لنا عن المشروع', send: 'إرسال',
    thanks: 'شكرًا، هذا النموذج تجريبي ولا يرسل بيانات.', lang: 'English', view: 'التفاصيل', close: 'إغلاق',
    footer: 'موقع تجريبي لأغراض البورتفوليو. الصور مولدة بالذكاء الاصطناعي.'
  }
}
export const projects = [
  { id: 1, cat: 'residential', img: 'img/arch-hero.jpg', year: 2025, en: ['Dune House', 'Villa, New Cairo', 'A concrete and glass villa around a shaded courtyard.'], ar: ['بيت الكثيب', 'فيلا، القاهرة الجديدة', 'فيلا من الخرسانة والزجاج حول فناء مظلل.'] },
  { id: 2, cat: 'cultural', img: 'img/arch-project1.jpg', year: 2024, en: ['Timber Hall', 'Cultural center, Alexandria', 'A timber-clad hall for performance and workshops.'], ar: ['قاعة الخشب', 'مركز ثقافي، الإسكندرية', 'قاعة مكسوة بالخشب للعروض والورش.'] },
  { id: 3, cat: 'tower', img: 'img/arch-project2.jpg', year: 2026, en: ['Crescent Tower', 'Residential tower, Dubai', 'Curved balconies that shade each floor below.'], ar: ['برج الهلال', 'برج سكني، دبي', 'شرفات منحنية تظلل الطوابق أسفلها.'] },
  { id: 4, cat: 'residential', img: 'img/arch-interior.jpg', year: 2025, en: ['Oak Room', 'Interior, Zamalek', 'Oak, linen and large openings toward the Nile.'], ar: ['غرفة السنديان', 'تصميم داخلي، الزمالك', 'سنديان وكتان ونوافذ كبيرة نحو النيل.'] }
]
