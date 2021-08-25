import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'img'
})
export class LazyloadImageDirective {

  @HostBinding('attr.src') srcAttr:string = '';
  @Input() src: string ='' ;

  //threshold is kept .5, which means i want the image to start downloading lazily only after 50 percent of the image holder is in the viewport(i.e. 50 percent of image holder is on screen for user to see: This is done, so that we can see image being clearly lazy loaded)
  intersectionOption={
    threshold:.5
  }

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    // console.log(this.el)
    this.canLazyLoad() ? this.lazyLoadImage() : this.loadImageDirectly();
  }

  private canLazyLoad() {
    // console.log('IntersectionObserver' in window);
    return window && 'IntersectionObserver' in window;
  }

  private lazyLoadImage() {

    const observer = new IntersectionObserver(entries => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
            this.loadImageDirectly();
            observer.unobserve(this.el.nativeElement);
        }
      });
    },this.intersectionOption);
    observer.observe(this.el.nativeElement);
  }

  private loadImageDirectly() {
    console.log(this.src, this.srcAttr);
    this.srcAttr = this.src;
  }

}
