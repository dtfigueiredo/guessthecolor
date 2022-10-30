import './index.css';

import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import { App } from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
