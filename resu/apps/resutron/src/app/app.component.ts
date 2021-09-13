import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skills } from '@resu/skills/domain';
import { PositionNotes } from '@resu/position-notes/domain'

@Component({
  selector: 'resu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'resutron';
  skills: any;
  pns: any;

  constructor(private httpClient: HttpClient) {
    this.skills = [];
    this.pns = [];
  }
  async ngOnInit(): Promise<void> {

    this.httpClient.get("/api/skills/").subscribe(
      (r) => {
        this.skills = r;
      } 
    );
    for(let n = 1; n < 5; n++)
    this.httpClient.get("/api/position_notes/getByPositionId/" + n).subscribe(
      (r) => {
        this.pns.push(r);
      } 
    );

    console.log(this.skills);
  }
}
