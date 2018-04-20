import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  onBackBtnClick() {
    this.router.navigateByUrl('/');
  }
}
