import { Component, VERSION } from "@angular/core";
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';
import {GraphUser} from './graph-user.model';
import { Observable, Subject, BehaviorSubject, from, of, ReplaySubject } from 'rxjs';
import { retry, catchError, delay, tap, take, multicast, share, publishBehavior, refCount, map } from 'rxjs/operators';


@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  user: GraphUser;

constructor(private http: HttpClient){

}
getUser() {
    this.http.get("./user.json").pipe(map(data => {
      
    }))
    .subscribe(result => {
      console.log(result);
    });
  }





}


