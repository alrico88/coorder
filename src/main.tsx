import { render } from 'preact';
import { App } from './app';
import { registerSW } from 'virtual:pwa-register';
import './app.scss';

render(<App />, document.getElementById('app') as HTMLElement);

registerSW({ immediate: true });
