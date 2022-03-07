import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-save-task',
  templateUrl: './save-task.component.html',
  styleUrls: ['./save-task.component.css']
})
export class SaveTaskComponent implements OnInit {

  informationTask: any;
  message: string = '';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  vertitalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds: number = 2000;

  constructor(
    private _taskService: TaskService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.informationTask = {};
  }


  registerTask(){
    console.log(this.informationTask);
    
    if(!this.informationTask.name || !this.informationTask.description){
      this.message='Incomplete Data';
      this.openSnackBarError();
    }else{
      this._taskService.registerTask(this.informationTask)
      .subscribe({
        next:(v)=>{
          this._router.navigate(['/listTask']);
          this.message ='Task registered';
          this.openSnackBarSuccessfull();
        },
        error:(e)=>{
          this.message=e.error.message;
          this.openSnackBarError();
        },
      })
    }
  }

  openSnackBarSuccessfull() {
    this._snackBar.open(this.message, 'x', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.vertitalPosition,
      duration: this.durationInSeconds,
      panelClass:['styleSnackBarSuccesfull']
    });
  }

  openSnackBarError() {
    this._snackBar.open(this.message, 'x', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.vertitalPosition,
      duration: this.durationInSeconds,
      panelClass:['styleSnackBarError']
    });
  }

  ngOnInit(): void {
  }


}
