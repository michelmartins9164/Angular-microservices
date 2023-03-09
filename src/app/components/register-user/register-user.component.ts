import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CreateNewUserService } from 'src/app/services/create-new-user.service';
import { ErrorStateMatcher } from '@angular/material/core';

import { User } from './../../interfaces/user';
import { ModalComponent } from '../modals/modal/modal.component';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent {
  constructor(private createUserService: CreateNewUserService, public dialogMOdal: MatDialog) {
  }

  sex: string[] = ['Masculino', 'Feminino'];
  status: string[] = ['Atendido', 'Não atendido'];
  @Input()
  statusUser: string = '';
  sexUser: string = '';
  nameUser: string = '';
  ageUser: number | any;
  dateCreate: any = '';
  urlImage: string = '';

  dataUser: User = {
    name: '',
    age: null,
    status: '',
    date: '',
    sex: '',
    url: '',
  }

  createUser() {
    if (this.sexUser === 'Masculino') {
      this.urlImage = '../../../assets/images/man.svg';
    } else {
      if (!this.sexUser) {
        this.urlImage = '../../../assets/images/woman.svg';
      } else return;
    };
    this.dataUser = {
      name: this.nameUser,
      age: this.ageUser,
      status: this.statusUser,
      date: this.dateCreate,
      sex: this.sexUser,
      url: this.urlImage
    };
    if (!this.dataUser.name/*  || !this.dataUser.age || !this.dataUser.status || !this.dataUser.date || !this.dataUser.sex */) {
      this.dialogMOdal.open(ModalComponent);
    }
    else {

      this.createUserService.createNewUser(this.dataUser).subscribe(data => {
        console.log(data)
      });
    }
  }
}
