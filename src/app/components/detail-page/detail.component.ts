import {Component, OnInit} from '@angular/core';
import {symbols} from "../../api/model/Symbols";
import {FixerService} from "../../api/fixer.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{

  isSaving = false;
  rate = '';
  result = '';
  options = symbols;
  title = '';

  constructor(
    private route: ActivatedRoute,
    private fixer: FixerService,
    private router: Router,
    private fb: FormBuilder) {
    router.events.subscribe((val)=>{
      console.log(val instanceof NavigationEnd);
      if (val instanceof NavigationEnd){
        this.updateForm();
        this.convert();
      }
    });
  }

  editForm = this.fb.group({
    amount: [1, [Validators.required]],
    from: ['', [Validators.required, Validators.required]],
    to: ['', [Validators.required]]
  });

  ngOnInit(): void {
    this.updateForm();
    this.convert();
  }
  updateForm():void{
    const urlParam = this.route.snapshot.paramMap.get('detail');
    if (urlParam){
      this.editForm.patchValue({
        from: urlParam.split("-")[0],
        to: urlParam.split('-')[1]
      })
      this.title = "from " + urlParam.split('-')[0] + ' to ' + urlParam.split('-')[1];
    }
  }


  convert(): void{
    this.fixer.convert(this.editForm.value.from, this.editForm.value.to, this.editForm.value.amount).subscribe(
      res => {
        this.result = `${res.result} ${this.editForm.value.to}`;
        let exchange = res.result / Number(this.editForm.value.amount);
        this.rate = `1 ${this.editForm.value.from}= ${exchange}${this.editForm.value.to}`;
      }
    )
  }
}
