import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FixerService} from "../../api/fixer.service";

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent implements OnInit, OnChanges{

  @Input() base: string | null | undefined;
  @Input() amount: number | null | undefined;
  rates: Map<string, number> = new Map<string, number>();

  constructor(
    private fixerService: FixerService
  ){}
  ngOnInit(): void {
    this.fixerService.latest(this.base).subscribe(
      res =>{
        this.rates = res.rates;
      }
    )
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.fixerService.latest(this.base).subscribe(
      res =>{
        this.rates = res.rates;
      }
    )
  }
}
