import {bootstrap}    from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app.component';
import {Title} from 'angular2/platform/browser';

bootstrap(AppComponent, [Title, ROUTER_PROVIDERS]).then(
    () => window.console.info( 'Angular finished bootstrapping your application!' ),
    (error) => {
      console.warn( 'Angular was not able to bootstrap your application.' );
      console.error( error );
    }
  );
