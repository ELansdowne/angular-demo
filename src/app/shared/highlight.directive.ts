import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @HostListener('mouseenter') onmouseenter() {
    this.highlight('yellow');
  }
  @HostListener('mouseleave') onmouseleave() {
    this.highlight(null);
  }
  constructor(private readonly elementRef: ElementRef) {}

  ngOnInit() {
    // this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }
  private highlight(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
}
