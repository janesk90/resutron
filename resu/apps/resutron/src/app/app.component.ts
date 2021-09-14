import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'resu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'resutron';
  res: any;

  constructor(private httpClient: HttpClient) {
    this.res = {};
  }
  async ngOnInit(): Promise<void> {
    this.httpClient.get("/api/positions/getByPersonId/1").subscribe(
      (positions) => {
        let positionsCo = (positions as any[]);
        for(let i = 0; i < positionsCo.length; i++) {
          this.httpClient.get("/api/position_notes/getByPositionId/" + positionsCo[i].positions_id).subscribe(
            (position_notes) => {
              let pnCo = (position_notes as any[]);
              positionsCo[i].position_notes = pnCo;
            }
          );
          this.httpClient.get("/api/companies/" + positionsCo[i].companies_id).subscribe(
            (company) => {
              positionsCo[i].company = company;
            }
          )
        }
        this.res.positions = positionsCo;
        console.log(this.res);
      }
    );
    this.httpClient.get("/api/skills/getByPersonId/1").subscribe(
      (skills) => {
        let skCo = [...(skills as any[])];
        skCo.sort(function (a, b) {
          return a.skills_name.toLowerCase().localeCompare(b.skills_name.toLowerCase());
      });
        this.res.skills = skCo;
      }
    )
  }
}
