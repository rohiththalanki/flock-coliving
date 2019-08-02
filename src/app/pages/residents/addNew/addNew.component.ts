import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDateService } from '@nebular/theme';
import { BookingService } from '../../../services/booking.service';
import * as firebase from 'firebase';

@Component({
  selector: 'ngx-new',
  templateUrl: './addNew.component.html',
  styleUrls: ['./addNew.component.scss'],
})
export class AddNewComponent implements OnInit {
  radioGroupValue = 'This is value 2';
  imagesUploaded = false;
  min;
  max;
  mobileForm: FormGroup;
  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  checkRequestSent = false;
  Math: any;
  showAvailableRooms = false;
  resident: {};
  images= [];
  imageUrls = [];
  constructor(protected dateService: NbDateService<Date>, private booking: BookingService) {
    this.min = this.dateService.today()
    this.max = this.dateService.addDay(this.dateService.today(), this.min);
  }

  ngOnInit() {
    this.mobileForm = new FormGroup({
      'mobile': new FormControl(null , [Validators.required, Validators.min(1000000000), Validators.max(9999999999) ]),
    });
    this.firstForm = new FormGroup({
      'fullName': new FormControl('', [Validators.required]),
      'isMale': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required,
        Validators.pattern('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9]' +
          '(?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?')]),
      'proofType': new FormControl('', [Validators.required]),
      'idProof': new FormControl('', [Validators.required]),
      'birthDate': new FormControl('', [Validators.required]),
    });

    this.secondForm = new FormGroup({
      'startDate': new FormControl('', [Validators.required]),
      'endDate': new FormControl('', [Validators.required]),
      'roomType': new FormControl('', [Validators.required]),
    });

    this.thirdForm = new FormGroup({
      'thirdCtrl': new FormControl('', [Validators.required]),
    });
  }

  saveUserDetails() {
    console.log(this.firstForm.value);
    const data = {
      'name': this.firstForm.get('fullName').value,
      'email':  this.firstForm.get('email').value,
      'mobile': this.mobileForm.get('mobile').value.toString(),
      'userId': this.mobileForm.get('mobile').value.toString(),
      'isMale': this.firstForm.get('isMale').value,
      'proofType': this.firstForm.get('proofType').value,
      'birthDate': this.firstForm.get('birthDate').value,
    };

    this.booking.createNewRecord(data, this.imageUrls);
  }

  onSecondSubmit() {
    const data = this.secondForm.value;
    console.log(this.secondForm.value);
    // this.booking.createNewRecord(data);
    this.secondForm.markAsDirty();
  }

  onThirdSubmit() {
    this.thirdForm.markAsDirty();
  }

  sendCredentials() {
    console.log('credentails sent');
  }

  getAvailability() {
    let rooms = this.booking.getAvailableRooms(this.secondForm.value);
    // if (rooms) {
    //   this.showAvailableRooms = true;
    // }
  }

  addImages(event) {
    this.imageUrls = [];
    let promises = [];
    this.imagesUploaded = false;
    const storageRef = firebase.storage().ref();
    const folder = 'residents_proof';
    for (const selectedFile of event.target.files) {
      console.log(selectedFile.name);
      const path = `/${folder}/${this.mobileForm.get('mobile').value}/${selectedFile.name}`;
      const iRef = storageRef.child(path);
      const task = iRef.put(selectedFile).then(snapshot => {
        snapshot.ref.getDownloadURL().then(res => {
          this.imageUrls.push(res);
        });
      }).catch(err => {
        console.log(err);
      });
      promises.push(task);
    }
    return Promise.all(promises).then(result => {
      this.imagesUploaded =true;
    });
  }




  getUserIfExists() {
    this.checkRequestSent = false;
    if (this.mobileForm.valid) {
      this.checkRequestSent = true;
      this.booking.checkIfUserExists(this.mobileForm.get('mobile').value);
    }
  }
}

