import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuItems = [{
    name:'Home',
    href:'#home'
  },{
    name:'About',
    href:'#about'
  },{
    name:'Work Experience',
    href:'#experience'
  },{
    name:'Skill',
    href:'#skill'
  },{
    name:'Contact',
    href:'#contact'
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
