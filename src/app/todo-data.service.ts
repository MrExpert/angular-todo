import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Item } from './models/Item';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';



@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  todos = [ { title: 'clean room', id: 2, completed: false },
  { title: 'cook', id: 3, completed: false } ];

  items: Observable<any[]>;
  itemDoc: AngularFirestoreDocument<Item>;
  itemsCollection: AngularFirestoreCollection<Item>;
//   constructor(private db: AngularFirestore) {
//     const things = db.collection('things').valueChanges();
//     things.subscribe(console.log);
// }
constructor(private db: AngularFirestore) {
  // this.items = this.db.collection('items').valueChanges();

  this.itemsCollection = this.db.collection('items', ref => ref.orderBy('timestamp', 'desc').limit(10));
  this.items = this.itemsCollection.snapshotChanges().pipe(
    map(changes => changes.map( a => {
      const data = a.payload.doc.data() as Item;
      data.timestamp = a.payload.doc.id;
      return data;
    })
    )
  );

}

getItems() {
  return this.items;
}

  // getTodos() {
  //   // console.log(localStorage);
  //   // return JSON.parse(localStorage.getItem('Todos'));
  //   //  this.todos = JSON.parse(localStorage.getItem('Todos'));
  //   return this.todos;
  // }

  addTodo(todo: Item) {
    console.log(`this is todo: ${JSON.stringify(todo)}`);
    // localStorage.setItem('Todos',JSON.stringify(todo)) = this.todos;
    // console.log('this is 2', this.todos);
    //  localStorage.setItem('Todos', todo);
    // return this.todos.push(todo);
    this.db.collection('items').add({
      title: todo.title,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      completed: todo.timestamp
    });
  }

  deleteItem(todo: Item) {
    this.db.doc(`items/${todo.timestamp}`).delete();
  }

  updateItem(updatedTodo: Item) {
    this.db.doc(`items/${updatedTodo.timestamp}`).update(updatedTodo);
  }
}
