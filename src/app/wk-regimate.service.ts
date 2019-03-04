import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

export interface Test {
  id?: string;
  test: string;
  priority: number;
  createdAt: number;
}

@Injectable({
  providedIn: 'root'
})
export class WkRegimateService {
	
  private testCollection: AngularFirestoreCollection<Test>;
  private test: Observable<Test[]>;

  constructor(db: AngularFirestore) {
	  this.testCollection = db.collection<Test>('test');
	 
	    this.test = this.testCollection.snapshotChanges().pipe(
	      map(actions => {
	        return actions.map(a => {
	          const data = a.payload.doc.data();
	          const id = a.payload.doc.id;
	          return { id, ...data };
	        });
	      })
	    );
   }
   getTests() {
    return this.test;
  }
 
  getTest(id) {
    return this.testCollection.doc<Test>(id).valueChanges();
  }
 
  updateTest(test: Test, id: string) {
    return this.testCollection.doc(id).update(test);
  }
 
  addTest(test: Test) {
    return this.testCollection.add(test);
  }
 
  removeTest(id) {
    return this.testCollection.doc(id).delete();
  }
}
