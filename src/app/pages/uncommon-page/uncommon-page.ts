import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';

const client1 = {
  name: 'Saul',
  gender: 'male',
  age: 23,
  address: 'Maneadero, Ensenada'
}

const client2 = {
  name: 'Ana',
  gender: 'female',
  age: 20,
  address: 'Chapultepec, Ensenada'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [
    Card,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe],
  templateUrl: './uncommon-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UncommonPage {

  //i18n SelectPipe
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1)
  }

  //i18n PluralPipe
  clientsMap = signal({
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    other: 'tenemos # clientes esperando'
  })

  clients = signal([
    'Maria',
    'Pedro',
    'Natalia',
    'Nataly',
    'Ana',
    'Saul',
    'Andrea',
  ]);

  deleteClient() {
    this.clients.update(prev => prev.slice(1));
  }

  //keyvaluePipe
  profile = {
    name: 'Saul',
    age: 23,
    address: 'Ensenada, Maneadero',
  }

  //Async Pipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject('Tenemos un error en la data')
      resolve('Tenemos data en la promesa')
      console.log('Promesa finalizada')
    }, 3500);
  });

  myObservableTimer = interval(2000).pipe(
    map((value) => value + 1),
    tap((value) => console.log('tap', value)));
}
