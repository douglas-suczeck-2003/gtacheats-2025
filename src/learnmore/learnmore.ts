import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-learnmore',
  imports: [],
  templateUrl: './learnmore.html',
  styleUrl: './learnmore.css',
})
export class Learnmore implements OnInit {
  http = inject(HttpClient);
  protected members = signal<any>([])

  async ngOnInit() {
    this.members.set(await this.GetMembers())
  }

  async GetMembers() {
    try {
      return lastValueFrom(this.http.get('https://localhost:5001/api/members'));
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
