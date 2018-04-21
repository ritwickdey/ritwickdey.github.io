import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  ViewChild
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  @ViewChild('portfolioHeader') portfolioHeaderRef: ElementRef;
  @ViewChild('portfolioArea') portfolioAreaRef: ElementRef;
  @ViewChild('portfolioSelectionArea') portfolioSelectionAreaRef: ElementRef;

  dpLogoStyle = {
    height: '12rem',
    width: '12rem',
    borderWidth: '3px'
  };

  prevScrollY = 0;

  setFixedPostion = false;

  constructor(private router: Router) {}
  ngOnInit() {}

  @HostListener('window:scroll')
  onScroll() {
    const portfolioHeader: HTMLElement = this.portfolioHeaderRef.nativeElement;
    const portfolioArea: HTMLElement = this.portfolioAreaRef.nativeElement;
    const portfolioSelectionArea: HTMLElement = this.portfolioSelectionAreaRef
      .nativeElement;

    const thresoldHeight =
      portfolioHeader.scrollHeight + portfolioHeader.offsetTop;

    const portfolioSelectionHeight =
      portfolioSelectionArea.scrollHeight + portfolioSelectionArea.offsetTop;

    if (window.scrollY > thresoldHeight) {
      portfolioArea.style.marginTop = `${portfolioSelectionHeight}px`;
      this.setFixedPostion = true;
    } else {
      portfolioArea.style.marginTop = `inherit`;
      this.setFixedPostion = false;
      const factor = window.scrollY / (thresoldHeight + 40);
      const netFactor =
        window.innerWidth < 900
          ? 1
          : this.prevScrollY < window.scrollY
            ? factor
            : 1 - factor;
      this.dpLogoStyle = {
        height: `${12 * netFactor}rem`,
        width: `${12 * netFactor}rem`,
        borderWidth: '3px'
      };

      this.prevScrollY = window.scrollY;
    }
  }

  onBackBtnClick() {
    this.router.navigateByUrl('/');
  }
}
