import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as confs from "../configs";
import {map, take} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  constructor(private  http: HttpClient) { }
  getAllUsers () {
    return this.http.get(`${confs.api_address}/participants`).pipe(take(1))
  }
}
