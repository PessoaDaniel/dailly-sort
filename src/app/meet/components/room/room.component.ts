import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  mainVideoRef: any;
  isVideoOff = false;
  constructor() { }

  ngOnInit(): void {
    this.mainVideoRef = document.getElementById('mainVideo');
    this.setupCamera().then();
  }

  async  setupCamera () {
    let stream = await navigator.mediaDevices.getUserMedia({
      video: {
        width: {
          min: this.mainVideoRef.offsetWidth,
          ideal: 1920
        },
        height: {
          min: this.mainVideoRef.offsetHeight,
          ideal: 768
        },
        facingMode: "user",
        latency: 1000
      },
      audio: false
    });
    this.mainVideoRef.srcObject = stream;
    // stream.getTracks()[0]
    this.mainVideoRef.play();

  }

  offVideo() {
    if (!this.isVideoOff) {
      this.mainVideoRef.srcObject.getTracks()[0].applyConstraints({
        advanced: [

        ]
      });
      this.mainVideoRef.srcObject.getTracks()[0].stop();
     this.mainVideoRef.srcObject = null;
    } else {
      this.setupCamera().then(()=> {
        if (this.isVideoOff) {
          this.mainVideoRef.play();
        }
      });
    }
    this.isVideoOff = !this.isVideoOff;
  }
}
