export class SuiviReclamation {
  idSuiviRec: number;
  idReclamation: number;
  dateSuiviRec: Date;
  descSuivi: string;
  byWho: number;

  constructor(idSuiviRec: number, idReclamation: number, dateSuiviRec: Date, descSuivi: string, byWho: number) {
    this.idSuiviRec = idSuiviRec;
    this.idReclamation = idReclamation;
    this.dateSuiviRec = dateSuiviRec;
    this.descSuivi = descSuivi;
    this.byWho = byWho;
  }
}
