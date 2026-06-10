import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocale, LocaleService } from '../../services/locale';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPage {

  localeService = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID));

  nameLower = signal('saul');
  nameUpper = signal('SAUL');
  fullName = signal('SauL AParIciO');

  customDate = signal(new Date());

  tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date())
      console.log('thick')
    }, 1000);

    onCleanup(() => {
      clearInterval(interval)
    })
  })

  changeLocale(locale: AvailableLocale) {
    this.localeService.changeLocale(locale);
  }

}
