import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  skilDetails = [{
    name:'React',
    icon:'./assets/react.png'
  },{
    name:'Redux',
    icon:'./assets/redux.png'
  },{
    name:'JavaScript',
    icon:'./assets/javascript.png'
  },{
    name:'Node',
    icon:'./assets/node.png'
  }];
  expDetails = [{
    name:'Technical Delivery Manager',
    company:'Accolite',
    desc:'I work here I work here I work here I work here I work here I work here I work here I work here I work here ',
    year:'2010'
  },{
    name:'Frontend Developer',
    company:'Accolite',
    desc:'I work here I work here I work here I work here I work here I work here I work here I work here I work here ',
    year:'2010'
  },{
    name:'Frontend Developer',
    company:'Accolite',
    desc:'I work here I work here I work here I work here I work here I work here I work here I work here I work here ',
    year:'2010'
  },{
    name:'Frontend Developer',
    company:'Accolite',
    desc:'I work here I work here I work here I work here I work here I work here I work here I work here I work here ',
    year:'2010'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
