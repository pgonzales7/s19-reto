import { Component, OnInit } from '@angular/core';
import { Root } from 'src/app/models/users';

import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit{
  constructor(private userService:UserservicesService) { }
  listado:Root = new Array()
  ngOnInit(): void {
    this.obtenerusuarios()
  }
  obtenerusuarios(){
    this.userService.getreto19().subscribe({
      next:(reto19:Root)=>{this.listado = reto19},
      error:(e)=>{console.error(e)},
      complete:()=> console.log
    });
  }

}
