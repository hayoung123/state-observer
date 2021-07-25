import { initState } from '../lib/observer/globalObserver';

export const textState = initState({
  key: 'test',
  defaultValue: '기본값이다.',
});
