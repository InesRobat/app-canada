import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  constructor(
    @Inject(Router) private router: Router,
    @Inject(TranslocoService) private transloco: TranslocoService
  ) { }

  ngOnInit(): void { }

  goToLink(url: string, lang: string) {
    this.transloco.setActiveLang(lang)
    this.router.navigate([url]);
  }

}
