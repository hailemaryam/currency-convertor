import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {FixerService} from "../../api/fixer.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  isSaving = false;

  constructor(
    private fixer: FixerService,
    private router: Router,
    private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  editForm = this.fb.group({
    amount: [1, [Validators.required]],
    from: ['EUR', [Validators.required, Validators.required]],
    to: ['USD', [Validators.required]]
  });

  convert(): void{
    console.log(this.editForm.value);
    this.fixer.convert(this.editForm.value.from, this.editForm.value.to, this.editForm.value.amount).subscribe(
      res => {console.log(res)}
    )
  }

  more() {
    this.router.navigate(['/detail', this.editForm.value.from + '-' + this.editForm.value.to])
  }
}
