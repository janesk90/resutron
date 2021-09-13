import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'resu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'resutron';
  skills: any;
  constructor(private httpClient: HttpClient) {
    this.skills = [];
  }
  async ngOnInit(): Promise<void> {

    this.httpClient.get("/api/skills/").subscribe(
      (r) => {
        this.skills = r;
      } 
    );

    console.log(this.skills);
  }
}
