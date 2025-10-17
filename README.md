# منصة ثانوية الشرقاط للمتفوقين

وصف
---
منصة مدرسية تفاعلية لمتابعة الطلاب وأدائهم الدراسي، تمكّن أولياء الأمور من الاطلاع على درجات أبنائهم وحضورهم، وتوفر لوحة تحكم للإدارة والمدرسين لتحديث البيانات.

الأهداف
---
- عرض درجات الطلاب (شهري أول، شهري ثاني، نصف السنة، نهائي) لكل مادة حسب الصف.  
- متابعة الحضور والغياب يوميًا مع عرض جدول.  
- تمكين المدير/المدرس من إضافة/تعديل طلاب، إدخال الدرجات وتحديث الحضور مباشرة.

المستخدمون
---
1. ولي الأمر: دخول باستخدام اسم الطالب وكوده الخاص لعرض بيانات ابنه فقط.  
2. الطالب: عرض بياناته ودرجاته (مستقبليًا).  
3. المدير/المدرس: إدارة سجلات الطلاب والمدرسين، إدخال الدرجات وتعديل الحضور.

التصميم
---
ألوان أساسية: أزرق + أبيض فاتح. واجهة مرتبة ومتجاوبة مع الأجهزة المحمولة. شعار المدرسة يظهر في أعلى الصفحة الرئيسية.

المكدس التقني المقترح
---
- واجهة المستخدم: React (Vite) + Tailwind CSS أو Bootstrap.  
- الخادم/API: Node.js + Express.  
- قاعدة البيانات: PostgreSQL.  
- مصادقة: دخول ولي الأمر بـ student_code (بدون كلمة مرور)، وحسابات للمدير/المدرس مع كلمات مرور مشفرة (bcrypt).  
- استضافة مقترحة: Vercel/Netlify (frontend) + Render/Heroku (backend) + Managed Postgres.

هيكل المشروع المقترح
---
- backend/
  - package.json
  - .env.example
  - src/
    - index.js
    - db.js
    - routes/
      - auth.js
      - students.js
      - grades.js
      - attendance.js
      - admin.js
    - middleware/
      - auth.js
- frontend/
  - package.json
  - vite config (إن وُجد)
  - src/
    - main.jsx
    - App.jsx
    - pages/
      - Welcome.jsx
      - ParentLogin.jsx
      - StudentDashboard.jsx
      - AdminPanel.jsx
    - services/api.js
- db/
  - schema.sql

قواعد البيانات (موجز)
---
الجداول الأساسية موجودة في db/schema.sql وتغطي: classes, subjects, class_subjects, students, users, grades, attendance.

تشغيل محلي (موجز)
---
1. إعداد PostgreSQL محليًا وأنشئ قاعدة بيانات (مثال: shirqat_school).  
2. شغّل ملف db/schema.sql لإنشاء الجداول.  
3. backend:
   - cd backend
   - نسخ .env.example إلى .env وملء CONN_STRING وJWT_SECRET
   - npm install
   - npm run dev
4. frontend:
   - cd frontend
   - npm install
   - npm run dev

نقاط API رئيسية (مقترح)
---
- POST /api/auth/parent-login { student_code } -> يعيد JWT/جلسة للاطلاع (صلاحية محدودة).  
- GET /api/students/:id/dashboard -> بيانات الدرجات والحضور.  
- GET /api/classes/:grade/subjects -> قائمة المواد لكل صف.  
- POST /api/admin/students -> إنشاء طالب جديد (admin only).  
- PUT /api/admin/students/:id -> تعديل طالب.  
- POST /api/admin/attendance -> تحديث حضور/غياب.  
- POST /api/admin/grades -> إضافة/تحديث درجات