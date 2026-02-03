import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
  }, []);

  return <div id="cursor" className="fixed w-6 h-6 bg-[#8B5E3C] rounded-full pointer-events-none z-50 opacity-70" />;
}
