import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  connectList = [
    {
      name:'Linkdin',
      url:'https://www.linkedin.com/',
      icon:'fa-brands fa-linkedin',
      class: 'linkdin'
    },{
      name:'Github',
      url:'https://github.com/asitpanda',
      icon:'fa-brands fa-github',
      class: 'github'
    },{
      name:'Mail',
      url:'#contact',
      icon:'fa-solid fa-envelope',
      class: 'mail'
    },{
      name:'Stack Overflow',
      url:'https://stackoverflow.com/users/2087122/asit',
      icon:'fa-brands fa-stack-overflow',
      class: 'stack'
    },{
      name:'Twiter',
      url:'https://twitter.com/panda_asit',
      icon:'fa-brands fa-twitter',
      class: 'twiter'
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
