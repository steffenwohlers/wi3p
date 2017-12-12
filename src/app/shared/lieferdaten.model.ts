import { TagElement } from './tag-element.model';

export class Lieferdaten {
    constructor(
        public supplychain: [TagElement],
        public vorlaufzeit: TagElement,
        public losgroesse: number,
        public bestelleingangBisProduktion: TagElement
    ) {}
}
