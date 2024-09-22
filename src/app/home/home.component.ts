import { Component } from '@angular/core';
import { ModulesModule } from '../modules/modules.module';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ModulesModule,
    CommonModule,
    RouterModule
  ],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  displayedColumns: string[] = ['task', 'action'];
  dataSource = new MatTableDataSource<string>();

  task: string = '';

  addTask() {
    if (this.task.trim()) {
      this.dataSource.data = [...this.dataSource.data, this.task];
      this.task = '';
    }
  }

  deleteTask(index: number) {
    const updatedData = [...this.dataSource.data];
    updatedData.splice(index, 1);
    this.dataSource.data = updatedData;
  }
}
