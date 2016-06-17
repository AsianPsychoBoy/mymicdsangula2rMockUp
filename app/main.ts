import {bootstrap}    from '@angular/platform-browser-dynamic';
import {APP_ROUTER_PROVIDERS} from './app.routes';
import {AppComponent} from './app.component';
import {Title} from '@angular/platform-browser';

bootstrap(AppComponent, [Title, APP_ROUTER_PROVIDERS]).then(
    () => window.console.info( 'Angular finished bootstrapping your application!' ),
    (error) => {
      console.warn( 'Angular was not able to bootstrap your application.' );
      console.error( error );
    }
  );
