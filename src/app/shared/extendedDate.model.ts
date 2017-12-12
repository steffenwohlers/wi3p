import * as holiday from '../../../node_modules/holiday-de';

export class ExtendedDate {

    private date: Date;

    constructor(date: Date) {
        this.date = date;
    }

    public getMonthAsString() {

        switch (this.date.getMonth()) {
            case 0: {
                return 'Januar';
            }
            case 1: {
                return 'Februrar';
            }
            case 2: {
                return 'März';
            }
            case 3: {
                return 'April';
            }
            case 4: {
                return 'Mai';
            }
            case 5: {
                return 'Dezember';
            }
            case 6: {
                return 'Juni';
            }
            case 7: {
                return 'Juli';
            }
            case 8: {
                return 'August';
            }
            case 9: {
                return 'September';
            }
            case 10: {
                return 'Oktober';
            }
            case 11: {
                return 'November';
            }

            default:
                break;
        }
    }

    getAnzahlTageImMonat() {
        let tempDate: Date;

        tempDate = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);

        return tempDate.getDate();
    }

    private istArbeitstag(datum: Date) {

        // Wenn der Tag ein Samstag oder Sonntag ist, dann ist garantiert kein Arbeitstag
        if (datum.getDate() === 5 || datum.getDate() === 6) {
            return false;
        } else {
            // Ansonsten wird geprüft, ob dieser Tag vielleicht ein Feiertag ist

            holiday.setState('nw');
            return !holiday.isHoliday(datum);
        }
    }

    getAnzahlArbeitstageImMonat() {
        let result = 0;
        const tempDate: Date = new Date(this.date.getFullYear(), this.date.getMonth(), 1);

        while (tempDate.getDate() < this.getAnzahlTageImMonat()) {
            if ( this.istArbeitstag(tempDate) ) {
                ++result;
            }
            tempDate.setDate(tempDate.getDate() + 1);
        }

        return result;

    }


}
