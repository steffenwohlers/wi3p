import { TagElement } from './tag-element.model';

export class Lieferdaten {
    constructor(
        public supplychain: [TagElement],
        public vorlaufzeit: TagElement,
        public losgroesseHersteller: number,
        public bestelleingangBisProduktion: TagElement
    ) {}
}
