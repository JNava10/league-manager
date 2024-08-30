import {Component, OnInit} from '@angular/core';
import {AsyncPipe, NgIf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Championship} from "../../../utils/interfaces/championship.interface";
import {ChampionshipApiService} from "../../../services/api/championship-api.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {League} from "../../../utils/interfaces/league.interface";
import {CategoryApiService} from "../../../services/api/category-api.service";
import {ScoreApiService} from "../../../services/api/score-api.service";
import {TrackApiService} from "../../../services/api/track-api.service";
import {Track} from "../../../utils/interfaces/track.interface";
import {Category} from "../../../utils/interfaces/category.interface";
import {ScoreSystem} from "../../../utils/interfaces/score.interface";
import {DropdownModule} from "primeng/dropdown";
import {AccordionModule} from "primeng/accordion";

@Component({
  selector: 'app-create-championship',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    DropdownModule,
    AsyncPipe,
    AccordionModule
  ],
  templateUrl: './create-championship.component.html',
  styleUrl: './create-championship.component.css'
})
export class CreateChampionshipComponent implements OnInit {
  constructor(
    private championshipService: ChampionshipApiService,
    private categoryService: CategoryApiService,
    private scoreService: ScoreApiService,
    private trackService: TrackApiService,
    private router: ActivatedRoute
  )  {}

  leagueId?: number;

  tracks$!: Observable<Track[]>;
  categories$!: Observable<Category[]>;
  scoreSystems$!: Observable<ScoreSystem[]>;

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      const id = params.get("leagueId");
      this.leagueId = Number(id) ?? null;
    })

    this.tracks$ = this.trackService.getAllTracks();
    this.categories$ = this.categoryService.getAllCategories();
    this.scoreSystems$ = this.scoreService.getAllScoreSystems();
  }

  createChampionshipForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    categoryId: new FormControl(0),
    scoreSystemId: new FormControl(0)
  });

  raceCalendar: Map<number, Track> = new Map();
  addingRace: boolean = false

  get name() {
    return this.createChampionshipForm.get('name')!;
  }

  get description() {
    return this.createChampionshipForm.get('description')!;
  }

  createChampionship = () => {
    if (this.createChampionshipForm.invalid) return;

    const championship = this.createChampionshipForm.value as Championship;

    championship.calendarIds = Array.from(this.raceCalendar.values()).map(track => track.id!);

    this.championshipService.createChampionship(championship)
      .subscribe(this.handleCreatingChampionship)
  };

  private handleCreatingChampionship = () => {

  };

  addRace = (track: Track) => {
    this.raceCalendar.set(this.raceCalendar.size + 1, track)
  }
}
