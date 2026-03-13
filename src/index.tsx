import { createRoot } from 'react-dom/client';
import AppWrapper from './AppWrapper';

const container = document.getElementById('root')!;
createRoot(container).render(<AppWrapper />);
