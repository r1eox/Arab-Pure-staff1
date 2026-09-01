# قسم رولز

هذا مشروع موقع ثابت (Static Website) جاهز للنشر عبر GitHub Pages.

## خطوات النشر

1. ارفع هذا المجلد إلى مستودع GitHub جديد.
2. اذهب إلى Settings > Pages.
3. اختر Source: GitHub Actions.
4. سيقوم ملف GitHub Actions بنشر الموقع تلقائياً بعد كل push إلى الفرع `main`.

## التشغيل محلياً

```bash
python -m http.server 8000
```

ثم افتح:

```text
http://localhost:8000
```

## ملاحظات

- الموقع يعمل كصفحة HTML ثابتة بدون أي backend.
- إذا أردت، يمكن إضافة رابط خاص للاستضافة عبر Netlify أو Vercel لاحقاً.
