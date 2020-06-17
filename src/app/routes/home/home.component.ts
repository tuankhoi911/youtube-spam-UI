import { FilterService } from "./../../services/filter.service";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  result: any;
  algorisms = [
    {
      name: "All model",
      value: "all",
    },
    {
      name: "Long short-term memory",
      value: "lstm",
    },
    {
      name: "Support vector machine",
      value: "svm",
    },
    {
      name: "Native Bayes",
      value: "nb",
    },
  ];

  spamFilterForm = new FormGroup({
    comment: new FormControl(""),
    algorism: new FormControl(""),
  });
  constructor(private filterService: FilterService) {}

  onSubmit() {
    let commentObj = this.spamFilterForm.value.comment;
    let typeAlgorism = this.spamFilterForm.value.algorism;

    this.filterService
      .checkSpam(commentObj, typeAlgorism)
      .subscribe((response) => {
        console.log(response);

        this.result = response;
      });
  }

  ngOnInit() {}
}
