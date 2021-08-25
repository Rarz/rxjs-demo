import { Observable, of } from 'rxjs';

const source$: Observable<number> = of(1, 2, 3, 4, 5);

source$.subscribe({
  next: (x: number) => console.log(x),
  error: (e: Error) => console.log(e),
  complete: () => console.log('closed')
});
