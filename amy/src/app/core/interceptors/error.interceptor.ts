/**
 * ARCHIVO: error.interceptor.ts
 *
 * RESPONSABILIDAD:
 * Interceptar peticiones HTTP para manejar errores de forma centralizada.
 * 
 * DEBE CONTENER:
 * - Functional interceptor (HttpInterceptorFn).
 * - Captura y transformación de HttpErrorResponse.
 *
 * NO DEBE CONTENER:
 * - Alertas visuales bloqueantes directamente (mejor disparar un toast service).
 *
 * EJEMPLO DE USO:
 * Registrado en provideHttpClient(withInterceptors([errorInterceptor])) en app.config.ts
 */
import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('[HTTP Error]', error);
      let errorMessage = 'Ha ocurrido un error inesperado';
      if (error.error instanceof ErrorEvent) {
        // Error de cliente
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // Error de backend
        errorMessage = `Código: ${error.status}\nMensaje: ${error.message}`;
      }
      return throwError(() => new Error(errorMessage));
    })
  );
};
