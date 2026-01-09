import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-gta3',
  imports: [RouterLink],
  templateUrl: './gta3.html',
  styleUrl: './gta3.css',
})
export class Gta3 {
   protected left = 'assets/images/left.png'
   protected right = 'assets/images/right.png'
   protected up = 'assets/images/up.png'
   protected down = 'assets/images/down.png'
   protected l1 = 'assets/images/l1.png'
   protected l2 = 'assets/images/l2.png'
   protected r1 = 'assets/images/r1.png'
   protected r2 = 'assets/images/r2.png'
   protected cross = 'assets/images/cross.png'
   protected circle = 'assets/images/circle.png'
   protected square = 'assets/images/square.png'
   protected triangle = 'assets/images/triangle.png'
}
