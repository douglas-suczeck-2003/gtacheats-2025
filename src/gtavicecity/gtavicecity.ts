import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gtavicecity',
  imports: [CommonModule],
  templateUrl: './gtavicecity.html',
  styleUrl: './gtavicecity.css',
})
export class Gtavicecity {
  protected cheats: any[] = [];

  protected buttons: any = {
    left: 'assets/images/left.png',
    right: 'assets/images/right.png',
    up: 'assets/images/up.png',
    down: 'assets/images/down.png',
    l1: 'assets/images/l1.png',
    l2: 'assets/images/l2.png',
    r1: 'assets/images/r1.png',
    r2: 'assets/images/r2.png',
    cross: 'assets/images/cross.png',
    circle: 'assets/images/circle.png',
    square: 'assets/images/square.png',
    triangle: 'assets/images/triangle.png'
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('assets/data/gtavicecity.json')
      .subscribe(data => {
        this.cheats = data;
      });
  }
}
