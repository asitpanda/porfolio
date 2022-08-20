import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  languageList = [{
    name:'angular',
    description:'I am a good web developer.',
    iconClass:'fa-angular'
  },{
    name:'javascript',
    description:'I am a good web developer.',
    iconClass:'fa-js'
  },{
    name:'react',
    description:'I am a good web developer.',
    iconClass:'fa-react'
  },{
    name:'html5',
    description:'I am a good web developer.',
    iconClass:'fa-html5'
  },{
    name:'css3',
    description:'I am a good web developer.',
    iconClass:'fa-css3-alt'
  },{
    name:'sass',
    description:'I am a good web developer.',
    iconClass:'fa-sass'
  },{
    name:'node',
    description:'I am a good web developer.',
    iconClass:'fa-node'
  },{
    name:'npm',
    description:'I am a good web developer.',
    iconClass:'fa-npm'
  },{
    name:'typescript',
    description:'I am a good web developer.',
    iconClass:'typescript',
    isSvg: true
  },{
    name:'jenkin',
    description:'I am a good web developer.',
    iconClass:'fa-jenkins'
  }]

  descriptions = [
    'Develop highly interactive Front end / User Interfaces for your web and mobile applications',
    'Progressive Web Applications ( PWA ) in normal and SPA Stacks',
    'Integration of third party services such as Firebase/ AWS / Digital Ocean'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
