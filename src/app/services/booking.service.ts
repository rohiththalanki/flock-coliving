import { AngularFirestore } from '@angular/fire/firestore';
export class BookingService {
    userFound;
    userData;
    documentData = {};
  constructor(   private afs: AngularFirestore   ) {}


  createNewRecord(userData, images) {
    this.documentData['userDetails'] = {'name': userData.name, 'email': userData.email, 'mobile': userData.mobile, 'isMale': (userData.isMale === 'true'), 'userId': userData.userId }
    this.documentData['proof'] = {'type': userData.proofType , 'images': images}
    this.documentData['createdAt'] = new Date()
    this.documentData['dateOfBirth'] = userData.birthDate;
    this.documentData['bookingId'] = '';
    this.afs.doc('residents/' + userData.userId).set(this.documentData).then(r => {
      console.log('done');
    }).catch(error => {
      console.log(error);
    });
  }
  getAvailableRooms( info ) {
    console.log(info);
  }

  checkIfUserExists(mobile) {
    console.log('in');
    this.afs.firestore.doc('residents/' + mobile).get()
      .then(docSnapshot => {
        if (docSnapshot.exists) {
          this.userFound = true;
        } else {
          this.userFound = false;
        }
      }).catch((error: any) => {
        console.log(error.message);
    });

  }
}
