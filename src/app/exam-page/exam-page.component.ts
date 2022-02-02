import {Component, ElementRef, Injector, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ExamRepository} from "../models/ExamRepository";
import {ExamsService} from "../services/exams.service";
import {Answer} from "../models/answer.model";

@Component({
  selector: 'app-exam-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.css']
})
export class ExamPageComponent implements OnInit {
  public examName: any;
  public examRepository: ExamRepository;
  public results: any;
  public endExam: any = [];
  public examname='';
  public answer: any = [
    {
      text: "سی و یک",
      hash: "Ncz0d5"
    },
    {
      text: "چهل",
      hash: "Y0RcHg"
    },
    {
      text: "بیست",
      hash: "aU73w3"
    },
    {
      text: "سی و سه",
      hash: "uaKJHa"
    }
  ];
  public ansTest: any = {
    answers: []
  };
  constructor(private router: Router,
              private el:ElementRef,
              private injector: Injector,
              private examService: ExamsService) {
    this.examRepository = ExamRepository.getInstance(injector);
  }

  ngOnInit(): void {
    this.examName = localStorage.getItem('exTitle');
    this.getExamInit();
  }
  finishExam(): any{
    alert('آزمون شما با موفقیت به پایان رسید.');
    this.examRepository.backToExamsMode = 'yes';
    this.examService.getAllResult().subscribe(
      (res) => {
        this.results = res.data;
        this.router.navigateByUrl('/scores').then();
      }
    );
    // this.router.navigateByUrl('/scores').then();
  }
  getExamInit(): any{
    this.examService.startExamExam().subscribe(
      (data) => {
        //if (data.msg) {alert(data.msg)};
        this.examRepository.questions = data.data.questions;
        this.examname=data.data.lesson;
      }
    );
  }
  answerFunc(hash: any, id: any,j1:any): any{
  const answer = new Answer();
  answer.hash = hash;
  answer.questionId = id;

  this.el.nativeElement.querySelector('#j'+id+'-0').style.background = '#fff';;
  this.el.nativeElement.querySelector('#j'+id+'-1').style.background = '#fff';;
  this.el.nativeElement.querySelector('#j'+id+'-2').style.background = '#fff';;
  this.el.nativeElement.querySelector('#j'+id+'-3').style.background = '#fff';;

  this.el.nativeElement.querySelector('#j'+id+'-'+j1).style.background = '#b4b4b4';;
 





 //alert(hash+'-'+id+'-'+j1);

  this.ansTest.answers.push(answer);
  
  }
  check(): any{
    this.examService.finishExam(this.ansTest).subscribe(
      (res) => {
        this.finishExam();
      }
    );
  }
}
