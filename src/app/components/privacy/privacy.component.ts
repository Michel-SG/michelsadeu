import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonneesService } from 'src/app/services/donnees.service';

@Component({
  selector: 'app-projets',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {
  constructor(private route: ActivatedRoute, private donnee: DonneesService) { }

  ngOnInit(): void {
  }
}