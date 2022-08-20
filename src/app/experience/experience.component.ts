import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  workList = ['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'];
  activeFilter = 'All';
  workDetails = [{
    title:'Web Development',
    description:'I am a good web developer.',
    imageUrl:'./assets/about01.png',
    projectLink: '',
    codeLink: '',
    tags:['UI/UX']
  },{
    title:'Web Development',
    description:'I am a good web developer.',
    imageUrl:'./assets/about01.png',
    projectLink: '',
    codeLink: '',
    tags:['Web App']
  },{
    title:'Web Development',
    description:'I am a good web developer.',
    imageUrl:'./assets/about01.png',
    projectLink: '',
    codeLink: '',
    tags:['Mobile App','UI/UX']
  },{
    title:'Web Development',
    description:'I am a good web developer.',
    imageUrl:'./assets/about01.png',
    projectLink: '',
    codeLink: '',
    tags:['React JS']
  }]
  constructor() {}

  ngOnInit(): void {}

  handleWorkFilter(item: any) {
    console.log(item);
  }
  filterWorkList(works:Array<any>){
    if(this.activeFilter === 'All'){
      return works;
    } else {
      return works.filter(work => work.tags.indexOf(this.activeFilter)> -1 )
    }
  }
}
