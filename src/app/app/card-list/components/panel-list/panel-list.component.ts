import { Component, Inject, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-panel-list',
  templateUrl: './panel-list.component.html',
  styleUrls: ['./panel-list.component.scss']
})
export class PanelListComponent implements OnInit {

  public currentLanguage!: string;

  constructor(
    @Inject(TranslocoService) private transloco: TranslocoService
  ) { }

  ngOnInit(): void {
    this.currentLanguage = this.transloco.getActiveLang();
  }

  setLanguage(lang: string) {
    this.currentLanguage = lang;
    this.transloco.setActiveLang(lang);
  }

}
