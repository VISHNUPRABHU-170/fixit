import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FxNavigateService {

  constructor (private router: Router) { }

  onNavigate(path: string) {
    this.router.navigate([path]);
  }
}
