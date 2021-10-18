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
    return this.http.get(`${this.basePath}/rooms`);
  }

  createRoom() {
    this.http.post(`${this.basePath}/rooms`,{});
  }

  getRoomDetail(roomId){
    return this.http.get(`${this.basePath}/rooms/${roomId}`);
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

  createTeams(){
    this.http.post(`${this.basePath}/teams`,{});
  }

  getTeamDetails(teamId){
    this.http.get(`${this.basePath}/teams/${teamId}`);
  }

  updateTeamDetails(teamId){
    this.http.put(`${this.basePath}/teams/${teamId}`,{});
  }

  deleteTeamDetails(teamId){
    this.http.delete(`${this.basePath}/teams/${teamId}`);
  }

  
  getRoomsTabs(){
    this.http.get(`${this.basePath}/room/tabs`);
  }

  createRoomTabs(){
    this.http.post(`${this.basePath}/room/tabs`,{});
  }

  getRoomTabDetails(roomTabId){
    this.http.get(`${this.basePath}/room/tabs/${roomTabId}`);
  }

  updateRoomTabDetails(roomTabId){
    this.http.get(`${this.basePath}/room/tabs/${roomTabId}`,{});
  }

  deleteRoomTabDetails(roomTabId){
    this.http.delete(`${this.basePath}/room/tabs/${roomTabId}`,{});
  }
}
