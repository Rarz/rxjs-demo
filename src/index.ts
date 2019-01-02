import { of } from 'rxjs';

const source = of(1, 2, 3, 4, 5);
const subscribe = source.subscribe(
  (x) => console.log(x),
  (err) => console.error(err),
  () => console.log('closed')
);
