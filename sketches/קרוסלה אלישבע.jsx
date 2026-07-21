import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Share2, Bookmark, Heart, MessageSquare, Lightbulb, AlertTriangle, CheckCircle, HelpCircle, ArrowRight } from 'lucide-react';

const CarouselGenerator = () => {
  // דוגמה לתוכן קרוסלה אמיתי לפי המבנה הפסיכולוגי המדויק שביקשת
  const carouselData = {
    topic: "למה העסק שלך תקוע בלי לקוחות חדשים?",
    slides: [
      {
        id: 1,
        type: "hook",
        bg: "bg-[#111111]", // שקופית פתיחה דרמטית בשחור
        textColor: "text-white",
        icon: <HelpCircle className="text-[#FF7F50] w-12 h-12 mb-4" />, // כתום סלמון
        title: "הטעות ששורפת לך 80% מהלקוחות",
        highlightText: "בלי ששמת לב",
        description: "אתה עובד קשה, משקיע בתוכן, אבל הטלפון לא מצלצל. הסיבה האמיתית תפתיע אותך. תחליק שמאלה כדי להבין.",
        imageIdea: "💡 רעיון ויזואלי: צילום של מסך טלפון ריק מהודעות על רקע כהה ומטושטש."
      },
      {
        id: 2,
        type: "problem",
        bg: "bg-white", // שקופיות תוכן בלבן קלאסי לקריאות מקסימלית
        textColor: "text-[#111111]",
        icon: <AlertTriangle className="text-red-500 w-12 h-12 mb-4" />,
        title: "אתה מרגיש כמו בלם בלתי נראה",
        highlightText: "רודף אחרי אנשים",
        description: "אתה מעלה פוסטים, מציע הנחות, ומנסה לשכנע את כולם לקנות. התוצאה? אנשים מתעלמים או אומרים 'יקר לי' ונעלמים.",
        imageIdea: "💡 רעיון ויזואלי: גרפיקה מודרנית של דמות רצה אחרי אייקון של 'לייק' שמתרחק."
      },
      {
        id: 3,
        type: "reason",
        bg: "bg-white",
        textColor: "text-[#111111]",
        icon: <AlertTriangle className="text-[#FF7F50] w-12 h-12 mb-4" />,
        title: "למה זה קורה באמת?",
        highlightText: "אתה מוכר מוצרים",
        description: "הטעות היא שאתה מדבר על המאפיינים של העסק שלך במקום על הכאב של הלקוח. הקהל לא מחפש מוצר, הוא מחפש פתרון לבעיה ספציפית.",
        imageIdea: "💡 רעיון ויזואלי: תרשים זרימה פשוט המציג את ההבדל בין 'מה אני מוכר' לבין 'מה הלקוח צריך'."
      },
      {
        id: 4,
        type: "mindshift",
        bg: "bg-white",
        textColor: "text-[#111111]",
        icon: <Lightbulb className="text-[#FF7F50] w-12 h-12 mb-4" />,
        title: "השינוי שישנה הכל",
        highlightText: "תפסיק למכור, תתחיל לרפא",
        description: "תחשוב כמו רופא. רופא לא מתחנן שתקנה תרופה, הוא מאבחן את הכאב שלך ונותן מרשם. כשאתה מאבחן, הלקוח רודף אחריך.",
        imageIdea: "💡 רעיון ויזואלי: איור מינימליסטי של מפתח מוזהב הפותח מנעול שחור."
      },
      {
        id: 5,
        type: "tool",
        bg: "bg-white",
        textColor: "text-[#111111]",
        icon: <CheckCircle className="text-[#FF7F50] w-12 h-12 mb-4" />,
        title: "הכלי המנצח: מודל הזדהות",
        highlightText: "נוסחת 3 השלבים",
        description: "בפוסט הבא שלך השתמש בנוסחה הזו: תאר את הכאב, תסביר את סיבת השורש, ורק אז תציג את הדרך שלך לפתרון.",
        imageIdea: "💡 רעיון ויזואלי: שלוש קוביות מעוצבות בצבע כתום סלמון עם המספרים 1, 2, 3."
      },
      {
        id: 6,
        type: "action",
        bg: "bg-white",
        textColor: "text-[#111111]",
        icon: <ArrowRight className="text-[#FF7F50] w-12 h-12 mb-4" />,
        title: "מה לעשות עכשיו?",
        highlightText: "3 צעדים ליישום היום",
        description: "1. מחק פוסטים שמשבחים את העסק שלך. 2. כתוב פוסט אחד שמתחיל בכאב הכי גדול של הלקוח שלך. 3. תציע פתרון פשוט וברור.",
        imageIdea: "💡 רעיון ויזואלי: צ'ק-ליסט מעוצב עם וי (V) מסומן על המשימות."
      },
      {
        id: 7,
        type: "cta",
        bg: "bg-[#111111]", // שקופית סגירה דרמטית בשחור
        textColor: "text-white",
        icon: <Share2 className="text-[#FF7F50] w-12 h-12 mb-4" />,
        title: "רוצה להפוך את התוכן שלך למגנט לקוחות?",
        highlightText: "שמור את הפוסט הזה",
        description: "אל תיתן למידע הזה ללכת לאיבוד. שמור אותו עכשיו כדי לחזור אליו בכתיבה הבאה שלך, וכתוב לי בתגובות מה הבעיה הגדולה בעסק שלך.",
        imageIdea: "💡 רעיון ויזואלי: חצים גרפיים בצבע סלמון המצביעים ישירות על כפתור השמירה של אינסטגרם."
      }
    ]
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? carouselData.slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === carouselData.slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 font-sans" dir="rtl">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">

        {/* כותרת עליונה של המערכת */}
        <div className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center text-xs font-bold tracking-wider">
          <span>תצוגה מקדימה: קרוסלת סטוריטלינג</span>
          <span className="bg-[#FF7F50] px-2 py-1 rounded text-black font-extrabold">פונט HEEBO</span>
        </div>

        {/* אזור השקופית (מדמה ריבוע אינסטגרם 1:1 בדיוק) */}
        <div className={`relative w-full aspect-square ${carouselData.slides[currentIndex].bg} p-8 flex flex-col justify-between transition-all duration-300 select-none`}>

          {/* מחוון מספר שקופית */}
          <div className="absolute top-6 left-6 text-xs font-bold px-2 py-1 rounded-full bg-black/10 text-gray-400">
            {currentIndex + 1} / {carouselData.slides.length}
          </div>

          {/* לוגו/שם מותג קטן בראש השקופית */}
          <div className={`text-xs font-bold tracking-widest ${carouselData.slides[currentIndex].textColor === 'text-white' ? 'text-gray-400' : 'text-gray-500'}`}>
            MY BUSINESS @
          </div>

          {/* מרכז התוכן של השקופית */}
          <div className="flex flex-col items-center text-center my-auto px-2">
            {carouselData.slides[currentIndex].icon}

            <h2 className={`text-2xl font-black mb-3 leading-tight ${carouselData.slides[currentIndex].textColor}`}>
              {carouselData.slides[currentIndex].title}
            </h2>

            <div className="bg-[#FF7F50] text-black text-sm font-extrabold px-3 py-1.5 rounded-lg mb-4 shadow-sm inline-block">
              {carouselData.slides[currentIndex].highlightText}
            </div>

            <p className={`text-base font-medium leading-relaxed max-w-xs ${carouselData.slides[currentIndex].textColor === 'text-white' ? 'text-gray-200' : 'text-gray-600'}`}>
              {carouselData.slides[currentIndex].description}
            </p>
          </div>

          {/* תחתית השקופית - בר ניווט אינטראקטיבי המדמה רשתות חברתיות */}
          <div className="flex justify-between items-center border-t border-gray-500/20 pt-4">
            <div className="flex gap-3 text-gray-400">
              <Heart size={18} />
              <MessageSquare size={18} />
            </div>
            {/* נקודות ניווט */}
            <div className="flex gap-1">
              {carouselData.slides.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentIndex ? 'bg-[#FF7F50] w-3' : 'bg-gray-400/50'}`}
                />
              ))}
            </div>
            <Bookmark size={18} className={currentIndex === 6 ? "text-[#FF7F50]" : "text-gray-400"} />
          </div>
        </div>

        {/* אזור המלצות העיצוב (מופיע מתחת לשקופית) */}
        <div className="bg-gray-50 p-5 border-t border-gray-200 text-sm">
          <div className="font-bold text-gray-800 mb-2 flex items-center gap-1.5">
            <span>🎨 הוראות עיצוב והפקה לשקופית זו:</span>
          </div>
          <p className="text-gray-600 font-medium leading-relaxed bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
            {carouselData.slides[currentIndex].imageIdea}
          </p>
        </div>

        {/* כפתורי שליטה ומעבר לחצים */}
        <div className="flex justify-between items-center p-4 bg-white border-t border-gray-200">
          <button
            onClick={prevSlide}
            className="flex items-center gap-1 font-bold text-sm px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors"
          >
            <ChevronRight size={18} />
            הקודם
          </button>

          <span className="text-xs font-bold text-gray-400">
            שלב פסיכולוגי: <span className="text-gray-700 capitalize">{carouselData.slides[currentIndex].type}</span>
          </span>

          <button
            onClick={nextSlide}
            className="flex items-center gap-1 font-bold text-sm px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-colors"
          >
            הבא
            <ChevronLeft size={18} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default CarouselGenerator;