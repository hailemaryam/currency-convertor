import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {FixerService} from "../../api/fixer.service";
import {symbols} from "../../api/model/Symbols";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  isSaving = false;
  rate = '';
  result = '';
  options = symbols;

  constructor(
      private fixer: FixerService,
    private router: Router,
    private fb: FormBuilder) {}

  ngOnInit(): void {
    this.convert();
  }

  editForm = this.fb.group({
    amount: [1, [Validators.required]],
    from: ['EUR', [Validators.required, Validators.required]],
    to: ['USD', [Validators.required]]
  });

  convert(): void{
    this.fixer.convert(this.editForm.value.from, this.editForm.value.to, this.editForm.value.amount).subscribe(
      res => {
        this.result = `${res.result} ${this.editForm.value.to}`;
        let exchange = res.result / Number(this.editForm.value.amount);
        this.rate = `1 ${this.editForm.value.from}= ${exchange}${this.editForm.value.to}`;
      }
    )
  }

  more() {
    this.router.navigate(['/detail', this.editForm.value.from + '-' + this.editForm.value.to])
  }
}
