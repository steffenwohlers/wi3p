import { Injectable } from '@angular/core';
import * as holiday from '../../../node_modules/holiday-de';

@Injectable()
export class DatumService {

  constructor() { }

  public static istArbeitstag(datum: Date) {

    // Wenn der Tag ein Samstag oder Sonntag ist, dann ist garantiert kein Arbeitstag
    if (datum.getDay() === 0 || datum.getDay() === 6) {
      return false;
    } else {
      // Ansonsten wird geprüft, ob dieser Tag vielleicht ein Feiertag ist
      holiday.setState('nw');
      return !holiday.isHoliday(datum);
    }
  }

  public static getArbeitstageMonat(date: Date) {
    let result = 0;
    const tempDate: Date = new Date(date.getFullYear(), date.getMonth(), 1);

    while (tempDate.getDate() < this.getAnzahlTageImMonat(tempDate)) {
      if (this.istArbeitstag(tempDate)) {
        ++result;
      }
      tempDate.setDate(tempDate.getDate() + 1);
    }

    return result;
  }

  public static getAnzahlTageImMonat(date: Date) {

    date = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    return date.getDate();
  }

  public static getDatumAsString(date: Date): String {
    let result: string;

    result = '' + date.getDate() + date.getMonth() + date.getFullYear();

    return result;
  }

}
