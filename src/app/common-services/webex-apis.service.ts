import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebexApisService {

  basePath = environment.basePath;
  constructor(private http: HttpClient) { }

  getRoomsDetails(){
    this.http.get(`${this.basePath}/rooms`);
  }

  createRoom() {
    this.http.post(`${this.basePath}/rooms`,{});
  }

  getRoomDetail(roomId){
    this.http.get(`${this.basePath}/rooms/${roomId}`);
  }

  getMeetingRoomDetail(roomId){
    this.http.get(`${this.basePath}/rooms/${roomId}/meetingInfo`);
  }

  updateRoomDetails(roomId){
    this.http.put(`${this.basePath}/rooms/${roomId}`,{});
  }

  deleteRoom(roomId){
    this.http.delete(`${this.basePath}/rooms/${roomId}`);
  }

  getTeams(){
    this.http.get(`${this.basePath}/teams`);
  }
}
