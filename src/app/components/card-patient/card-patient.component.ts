import { User } from './../../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { GetAllPatientService } from 'src/app/services/get-all-patient.service';
import { DeleteteUserForIdService } from 'src/app/services/delete-user-for-id.service';

@Component({
  selector: 'app-card-patient',
  templateUrl: './card-patient.component.html',
  styleUrls: ['./card-patient.component.scss']
})
export class CardPatientComponent implements OnInit {
  user: User[] | any = [];
  status: string = "Não atendido";
  pag: number = 1;
  contador: number = 4;
  urlImage: Array<{ url: string }> = [];
  constructor(private getAllPatient: GetAllPatientService, private deleteId : DeleteteUserForIdService) { }
  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.getAllPatient.getAllPatients().subscribe((data) => {
      this.user = data;
      this.user.map((item: any) => {
        this.urlImage.push(item.url)
      });
    })
  }

  teste(e: any) {
    console.log(e)
    this.deleteId.delete(e.target.id).subscribe((data) => {
      this.getAll();
    })
  }

}
