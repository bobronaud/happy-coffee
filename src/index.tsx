import { createRoot } from 'react-dom/client';
import App from '@/components/App/App';

const root = document.getElementById('root');

const container = createRoot(root);

container.render(<App />);
