import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {Title} from 'angular2/platform/browser';

bootstrap(AppComponent, [Title]).then(
    () => window.console.info( 'Angular finished bootstrapping your application!' ),
    (error) => {
      console.warn( 'Angular was not able to bootstrap your application.' );
      console.error( error );
    }
  );
