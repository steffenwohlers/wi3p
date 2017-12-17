import { Lieferdaten } from './lieferdaten.model';
import { TagElement } from './tag-element.model';
import { Tag } from './tag.enum';

export class LieferdatenService {

    public lieferdatenSattel: Lieferdaten = new Lieferdaten (
        // Supplychain
        [
            new TagElement(2, Tag.Arbeitstag),
            new TagElement(30, Tag.Kalendertag),
            new TagElement(2, Tag.Arbeitstag)
        ],
        // Vorlaufzeit
        new TagElement(49, Tag.Kalendertag),
        // Losgröße
        500,
        // Dauer von Bestelleingang bis Produktion
        new TagElement(5, Tag.Arbeitstag)
    );

    public lieferdatenGabel: Lieferdaten = new Lieferdaten (
        // Supplychain
        [
            new TagElement(9, Tag.Kalendertag),
        ],
        // Vorlaufzeit
        new TagElement(14, Tag.Kalendertag),
        // Losgröße
        75,
        // Dauer von Bestelleingang bis Produktion
        new TagElement(5, Tag.Arbeitstag)
    );

    public lieferdatenRahmen: Lieferdaten = new Lieferdaten (
        // Supplychain
        [
            new TagElement(3, Tag.Arbeitstag),
        ],
        // Vorlaufzeit
        new TagElement(7, Tag.Kalendertag),
        // Losgröße
        10,
        // Dauer von Bestelleingang bis Produktion
        new TagElement(2, Tag.Arbeitstag)
    );

}
