# סקיל אסטרטגיית עיצוב - בימה לשירה (ישי לפידות)

## א. זהות ברנדית

### צבעים ראשיים
- **כתום אש** (#ff6b35): אנרגיה, חום, התקדמות
- **אדום קרוב** (#d64045): תשוקה, אזכור, חיוניות
- **לבן/רקע בהיר**: קלילות, גישה, מודרניות
- **אפור כהה** (#333): טקסט, קבילות, מקצועיות

### פונטים
- **כותרות**: Google Sans / SF Pro Display (מודרני, בנוי, טכני)
- **טקסט קורא**: Inter / Roboto (קל לקריאה, חם, אדווקט)
- **הדגשות**: Montserrat / Poppins (בולט, צעיר, דרך רחוקה)

### סגנון צילום
- **אנרגיה**: תמונות של הופעות חיות עם קהל ואנרגיה
- **קרבה**: תמונות מקרוב של ישי עם ביטויי פנים חמים
- **מאחורי קלעים**: בהקלטות לא מנוסחות, אמיתיות, חמות
- **מגוון**: גברים, נשים, צעירים, מבוגרים — כל הקהילה

---

## ב. ארכיטקטורת דף הנחיתה

### 1. Header (Navigation)
**מטרה**: אוריינטציה ברורה + CTA דחוף
```
[לוגו/כותרת] ← [ניווט] → [הזמנה] 
```
- **צבע**: כתום/אדום gradient
- **CTA**: ממוקם בצד ימין (בעברית), לבן, עגול
- **טקסט**: "הזמנת כרטיסים" (כוונה ברורה)
- **סיכולים**: סדור (sticky) כשמגללים למטה

### 2. Hero Section (מהקלל)
**מטרה**: לתפוס את תשומת לב ב-2 שניות
```
[כותרת ענקית] + [תת-כותרת] + [CTA ממוקדת]
```
- **כותרת**: "התחבורו להופעות הזמר המובילות בדרך הטובה"
  - טקסט גדול (48px+), משקל בולד
  - צריך להיות מובן בבחצי שניה
- **תמונה רקע**: gradient כתום-אדום (או תמונה של ישי)
- **CTA Button**: לבן + טקסט כתום, גדול וברור, עם hover effect
- **טקסט משנה**: "הופעות בלתי נשכחות עם מוזיקה שנוגעת בלב"

### 3. Featured Events (הופעות מומלצות)
**מטרה**: מראה בחירות + יצירת ה-FOMO
```
[כותרת] + [3-4 כרטיסי הופעות]
```

**כל כרטיס:**
- **תמונה**: Placeholder gradient כתום-אדום (או תמונות אמיתיות של הופעות)
- **תאריך**: בולט, בחום, עם אייקון
- **שם הופעה**: 18px, bold, כהה
- **תיאור קצר**: 2-3 שורות, בגודל 14px
- **מחיר**: בולט בכתום, עם טווח (₪150-250)
- **Button**: "הזמן כרטיס", כתום, בולט

**Layout**: 
- Desktop: 3 כרטיסים בשורה
- Tablet: 2 כרטיסים בשורה
- Mobile: 1 כרטיס בשורה (scroll)

### 4. About Section (אודות ישי)
**מטרה**: בנייה אמון + חיבור אישי
```
[תמונה ישי] ← [טקסט ביוגרפיה + סטטיסטיקה]
```

**תמונה:**
- חמימות, מחזקת עם קהל (לא ממלא צילומים)
- אם אין תמונה: placeholder בגדול זהה לסגנון

**טקסט:**
- כותרת: "ישי לפידות - מוזיקאי של הלב"
- 2 פסקים: ביוגרפיה + ערך + סגנון
- סטטיסטיקה: 
  - 50+ הופעות בשנה
  - 10K+ עוקבים
  - 15 שירים חדשים

**סגנון**: חם, אישי, לא דוקטוריני

### 5. CTA Section (תחנת רשמי)
**מטרה**: המרה אחרונה לפני ההלאה
```
[כותרת] + [תיאור] + [CTA]
```
- **Background**: Gradient כתום-אדום
- **Tone**: דחיפה עדינה ("אל תפספסו")
- **CTA**: ניוזלטר signup או "הזמנה"

### 6. Footer
**מטרה**: מידע משלים + קישורים חוקיים
```
[עמודות: מידע | הזמנות | חברתיות] + [copyright]
```
- **צבע רקע**: כהה (#333)
- **צבע טקסט**: לבן + כתום עבור כותרות
- **ארגון**: 3 עמודות בדסקטופ, 1 בנייד

---

## ג. עקרונות דיזיין

### 1. Hierarchy (היררכיה)
- **כותרת ראשית**: 48px, bold, כהה
- **כותרות משנה**: 28px, bold, כהה
- **תת-כותרות**: 18px, bold, כהה
- **טקסט רגיל**: 15px, regular, אפור בינוני
- **טקסט עדין**: 14px, light, אפור בהיר

**כלל**: כל דבר צריך להיות קריא מראשית בלא קריאה עמוקה.

### 2. Whitespace (מרחק בין אלמנטים)
- **בין סקציות**: 60px (desktop), 30px (mobile)
- **בתוך סקציה**: 20-30px
- **בתוך כרטיס**: 15-20px
- **כלל**: צוואר > התחום מלחוץ

### 3. CTA Design (כפתורים)
- **Primary CTA** (הזמנה):
  - Background: כתום/אדום
  - Text: לבן, bold, 16px
  - Padding: 16px 40px
  - Border Radius: 50px (עגול)
  - Hover: צל + scale up
  
- **Secondary CTA** (הרשמה/למידע):
  - Background: לבן/outlined
  - Border: 2px כתום
  - Text: כתום, bold
  - Hover: background כתום בהיר

### 4. Imagery
- **Principle**: אמיתי > מלבד
- **סגנון**: אנשים, פנים, אנרגיה, בחיים
- **חדות**: כל תמונה צריכה להיות HD + מטובה
- **עריכה**: צבעי הברנד צריכים להיות קיימים בצילומים

### 5. Borders & Shadows
- **Subtle Shadows**: 0 2px 12px rgba(0,0,0,0.08) על כרטיסים
- **Hover Shadows**: 0 8px 24px rgba(0,0,0,0.12) on hover
- **Borders**: Rounded 12px על כרטיסים, בסיס 2px על inputs
- **כלל**: צל עדיף על גבול ישיר

---

## ד. Responsive Design (דרגות)

### Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

### טבלה של שינויים
| אלמנט | Desktop | Tablet | Mobile |
|------|---------|--------|--------|
| Hero Headline | 48px | 36px | 32px |
| Hero Paragraph | 20px | 18px | 16px |
| Section Title | 32px | 28px | 24px |
| Event Grid | 3 col | 2 col | 1 col |
| About Grid | 2 col | 1 col (image top) | 1 col |
| Padding | 60px | 40px | 20px |

### Mobile First Approach
- התחל בנוייד (הוא הקטן ביותר)
- הוסף complexity כשאתה הולך לדסקטופ
- הוודא שעולם דבר משגרט נכון

---

## ה. Components (אלמנטים שחוזרים)

### 1. Event Card Component
```html
[Image] 
[Date + Icon]
[Event Name]
[Description]
[Price]
[Button]
```
- Reusable בכל מקום שמוצגת הופעה
- צבע consistent, layout consistent

### 2. Stats Component
```html
[Number (bold, כתום)]
[Label (קטן, אפור)]
```
- משמש בסקציית About
- אפשר לחזור על זה בכל מקום לשו"ע סטטיסטיקה

### 3. CTA Banner
```html
[Headline]
[Subheadline]
[Button]
```
- משמש בחלק ה-Hero וב-CTA Section
- Flexible בצבע (כתום gradient או מוצק)

---

## ו. Animation & Micro-interactions

### Hover Effects
- **Buttons**: Scale 1.05 + shadow increase
- **Cards**: translateY(-8px) + shadow increase
- **Links**: Color change + underline

### Scroll Effects
- **Lazy Loading**: תמונות טוענות כשהן נכנסות לחזון
- **Counter Animation**: סטטיסטיקות מנויים מ-0 לערך הסופי

### Page Transitions
- **סדוגמא**: Fade in בעדינות כשהעמוד טוען

---

## ז. Accessibility (גישה)

### Color Contrast
- **Text + Background**: צריך להיות ≥ 4.5:1 ratio
- **CTA + Background**: צריך להיות ≥ 3:1 ratio

### Font Sizes
- **Minimum**: 14px (אפילו קטן יותר צריך להיות קריא)
- **Headings**: ≥ 24px

### Interactive Elements
- **Button Size**: ≥ 48px × 48px (צריך להיות קל ללחוץ בנייד)
- **Link Underlines**: תמיד כללו תחתון או צבע שונה

### Alt Text
כל תמונה צריכה alt text:
- `alt="ישי לפידות בהופעה עם קהל"`
- לא `alt="image123.jpg"`

---

## ח. Loading & Performance

### Images
- שימוש ב-WebP + Fallback to JPG
- Lazy loading עבור תמונות מתחת לקפדת
- גדלים: Hero (~2MB), Cards (~500KB each)

### CSS/JS
- CSS: Single file, minified
- JS: Minimal, vanilla (אין frameworks הכבדים)
- Goal: Page load < 3 seconds

---

## ט. Conversion Optimizations

### Strategic Button Placement
- Hero: CTA ממוקם זה אחרי קריאה ראשית
- Cards: Button תמיד visible (לא צריך לגלול)
- Footer: Backup CTA (newsletter signup)

### Color Psychology
- **כתום**: תנועה, חום, דיוק (drive action)
- **לבן**: פשטות, קלילות (reduce friction)
- **אדום**: טורגנטיוס, דחיפה (urgency)

### Trust Signals
- תמונות אמיתיות (לא stock photos)
- ביקורות/טקסטימוניאלים
- סטטיסטיקה ("50K+ עוקבים")
- לוגוים של מדיה (קול הבמה, וכו')

---

## י. Design Checklist

### Pre-Launch
- [ ] כל תמונות טוענות בנכון
- [ ] כל קישורים עובדים (לא 404)
- [ ] ניווט עובד בנייד + דסקטופ
- [ ] CTA buttons בולטים בכל עמוד
- [ ] צבעים consistent
- [ ] טקסט קריא וללא שגיאות
- [ ] Performance: < 3 seconds load time
- [ ] Responsive: בדיקה בעבור אייפון, אנדרואיד, דסקטופ

### Post-Launch (שבועי)
- [ ] בדוק analytics — מה החלקים המושכים בעיניים?
- [ ] בדוק bounce rate — אם גבוה (>60%), עדכן design
- [ ] קבל feedback מלקוחות — מה הם חושבים על העיצוב?
- [ ] עדכן ניסויים — נסה צבעים/CTAs שונים
