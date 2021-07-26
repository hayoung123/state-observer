import { initState } from '../lib/observer/globalObserver';
import FirstPage from './page/FirstPage';

export const pageState = initState({
  key: 'pageState',
  defaultValue: { Page: FirstPage },
});

export const textState = initState({
  key: 'test',
  defaultValue: '기본값이다.',
});
