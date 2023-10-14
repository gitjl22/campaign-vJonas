import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AudioService } from '../services/audio.service';
import { VotesStore } from '../stores/votes.store';

@Component({
  selector: 'app-results-page',
  templateUrl: 'results-page.component.html',
  styleUrls: ['results-page.component.css']
})
export class ResultsPage implements OnInit {
  constructor(private router: Router, public votes: VotesStore) {}

  ngOnInit() {
      if (this.votes.isDemocrat) {
        this.votes.addGameStats(this.votes.getUserWon(),true,this.votes.getFinalBlue());
      } else {
        this.votes.addGameStats(this.votes.getUserWon(),false,this.votes.getFinalRed());
      }
  }


  mainMenu() {
    this.votes.reset();
    this.router.navigateByUrl('/');
  }
}
