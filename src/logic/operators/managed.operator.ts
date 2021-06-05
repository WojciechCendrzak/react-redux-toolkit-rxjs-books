import { of, EMPTY, OperatorFunction } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

export type Managed = <T, A>(
  operator: OperatorFunction<T, A>
) => OperatorFunction<T, A>;

export const managed: Managed = (operator) =>
  mergeMap((action) =>
    of(action).pipe(
      operator,
      catchError((error: Error) => {
        console.log(error);
        alert(error.message);
        return EMPTY;
      })
    )
  );
