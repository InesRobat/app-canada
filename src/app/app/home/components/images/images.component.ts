import { Component, DestroyRef, Inject, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  public srcList = new Array(16);

  public currentIndex = 0

  constructor(
    @Inject(DestroyRef) private destroyRef: DestroyRef,
  ) { }

  ngOnInit(): void {
    interval(4000).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.currentIndex = (this.currentIndex + 1) % this.srcList.length;
    })
  }

}
