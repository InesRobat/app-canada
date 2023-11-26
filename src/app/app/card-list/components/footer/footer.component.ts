import { Component, Inject, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
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
