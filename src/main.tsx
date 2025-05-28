import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// i18n yapılandırmasını içe aktarma
import './lib/i18n'

createRoot(document.getElementById("root")!).render(<App />);
