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
      portfolioArea.style.marginTop = `${portfolioSelectionHeight + 5}px`;
      this.setFixedPostion = true;
    } else {
      portfolioArea.style.marginTop = `inherit`;
      this.setFixedPostion = false;
      const factor = 1 - window.scrollY / (thresoldHeight + 40);
      // const netFactor = window.innerWidth < 900 ? 1 : 1 - factor;
      this.dpLogoStyle = {
        ...this.dpLogoStyle,
        height: `${12 * factor}rem`,
        width: `${12 * factor}rem`,
      };
      portfolioHeader.style.opacity = factor.toString();
    }
  }

  onBackBtnClick() {
    this.router.navigateByUrl('/');
  }
}
