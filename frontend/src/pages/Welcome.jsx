import React from 'react';
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <div className="p-6 max-w-3xl mx-auto text-center">
      <header className="flex flex-col items-center gap-4">
        <img src="/school-logo.png" alt="شعار المدرسة" className="h-36 mx-auto" />
        <h1 className="text-2xl font-bold">ثانوية الشرقاط للمتفوقين</h1>
      </header>
      <p className="mt-4">أهلاً بكم في منصة ثانوية الشرقاط للمتفوقين لمتابعة أداء أبنائكم.</p>
      <div className="mt-6 flex justify-center gap-4">
        <Link to="/parent-login" className="px-4 py-2 bg-blue-600 text-white rounded">دخول ولي الأمر</Link>
        <Link to="/admin" className="px-4 py-2 border border-blue-600 text-blue-600 rounded">دخول المدير</Link>
      </div>
    </div>
  );
}