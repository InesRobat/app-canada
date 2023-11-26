import { AfterViewInit, Directive, ElementRef, Inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGravityBtn]'
})
export class GravityBtnDirective implements AfterViewInit {

  constructor(
    @Inject(ElementRef) public ref: ElementRef<HTMLDivElement>,
    @Inject(Renderer2) private renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
    this.renderer.listen(this.ref.nativeElement, 'mousemove', (e) => {
      const pos = this.ref.nativeElement.getBoundingClientRect();

      const h = pos.width / 2;

      const x = e.clientX - pos.left - h;
      const y = e.clientY - pos.top - h;

      const r1 = Math.sqrt(x * x + y * y);
      const r2 = (1 - (r1 / h)) * r1;

      const angle = Math.atan2(y, x);
      const tx = Math.round(Math.cos(angle) * r2 * 100) / 100;
      const ty = Math.round(Math.sin(angle) * r2 * 100) / 100;

      const op = (r2 / r1) + 0.25;

      this.ref.nativeElement.style.setProperty('--tx', `${tx}px`);
      this.ref.nativeElement.style.setProperty('--ty', `${ty}px`);
      this.ref.nativeElement.style.setProperty('--opacity', `${op}`);
    });

    this.renderer.listen(this.ref.nativeElement, 'mouseleave', (e) => {
      this.ref.nativeElement.style.setProperty('--tx', '0px');
      this.ref.nativeElement.style.setProperty('--ty', '0px');
      this.ref.nativeElement.style.setProperty('--opacity', `${0.25}`);
    })
  }

}
