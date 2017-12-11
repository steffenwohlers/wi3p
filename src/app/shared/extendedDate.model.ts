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

    getAktuellerTagIstArbeitstag() {
        this.getIstArbeistag(this.date.getDay());
    }

    private getIstArbeistag(tag: Number) {
        if (tag === 5 || 6 ) {
            return false;
        } else {
            return true;
        }
    }


    // TODO MS: Korrigieren und mit Urlaubstagen prüfen (https://github.com/jdiehl/holiday-de)
    getAnzahlArbeitstageImMonat() {
        let result = 0;
        const tempDate: Date = new Date(this.date.getFullYear(), this.date.getMonth(), 1);

        while (tempDate.getDate() <= this.getAnzahlTageImMonat()) {
            // console.log(tempDate);
            // console.log(tempDate.getDay());
            if (tempDate.getDay() !== 5 || 6) {
                result = result + 1;
                // console.log('Ist Wochentag');
            } else {
                // console.log('Ist kein Wochentag');
            }
            tempDate.setDate(tempDate.getDate() + 1);
        }

        return result;

    }


}
