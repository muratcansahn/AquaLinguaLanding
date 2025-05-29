import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// i18n yapılandırmasını içe aktarma
import './lib/i18n'

// Performans için React.StrictMode'u kaldırdım
// Üretim ortamında gereksiz yeniden render'ları önlemek için

// Web Vitals ölçümü için
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

const reportWebVitals = () => {
  if (import.meta.env.PROD) {
    // Yalnızca üretim ortamında Web Vitals'ı ölç
    onCLS(console.log); // Cumulative Layout Shift
    onINP(console.log); // Interaction to Next Paint (FID yerine)
    onFCP(console.log); // First Contentful Paint
    onLCP(console.log); // Largest Contentful Paint
    onTTFB(console.log); // Time to First Byte
  }
};

// Hydration performansını artırmak için
const hydrate = () => {
  const root = createRoot(document.getElementById("root")!);
  root.render(<App />);
  
  // Web Vitals'ı ölç
  reportWebVitals();
};

// requestIdleCallback ile uygulamayı başlat (tarayıcı boşta kaldığında)
if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  // requestIdleCallback desteklenmeyen tarayıcılar için
  window.setTimeout(hydrate, 1);
}
