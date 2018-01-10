import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import Peer from 'simple-peer';
import firebase from 'firebase';
// import firebase from 'firebase';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {
    
  }
  ionViewDidEnter(){          
      let database = firebase.database();
      let ownIdRef = database.ref("stream/");
      let otherIdRef = database.ref("stream/RaspberryId");
      let otherId;
      otherIdRef.once("value").then(assignValue);

      function assignValue(data) {
        otherId = data.val();
      }
      let peer = new Peer({
        initiator: location.hash === '',
        trickle: false
      })

      peer.on('signal', function (data) {
        document.getElementById("yourId").setAttribute("value",JSON.stringify(data));
        ownIdRef.update({userId: JSON.stringify(data)});
        try {
          peer.signal(otherId);
        } 
        catch (err) {
          alert("your Raspberry is not on " + err);
        }
      })
      peer.on('stream', function(stream) {
        let video = document.getElementById("livestream").setAttribute("src", window.URL.createObjectURL(stream));
      })


      // var localStream = document.getElementById('livestream');
      // var remoteStream = document.getElementById('remoteStream');
      // var pc1;
      // var pc2;
      // var config = {'iceServers': [{'url': 'stun:stun.services.mozilla.com'}, {'url': 'stun:stun.l.google.com:19302'}]};
      // var vendorURL = window.URL;
      // var offerOptions = {
      //   offerToReceiveAudio: 1,
      //   offerToReceiveVideo: 1
      // };
      // pc1 = new RTCPeerConnection(config);
      // pc1.onicecandidate = function(e) {
      //   onIceCandidate(pc2,e);
      // };     
      // pc1.createOffer(offerOptions)
      // .then(
      //   gotDescription
      // );
      // pc1.onicecandidate = gotIceCandidate;
      // pc1.onaddstream = gotRemoteStream;

      // function gotDescription(description) {
      //     pc1.setRemoteDescription(description)
      //     .then(
      //       console.trace('setLocalDescription complete')
      //     )
      // }

      // function onIceCandidate(pc, event) {
      //   pc.addIceCandidate(event.candidate)
      //   .then(function() {
      //     console.log("candidate added");
      //   })
      // }

      // function gotIceCandidate(event) {
      //     if(event.candidate != null) {
      //         pc1.send(JSON.stringify({'ice': event.candidate}));
      //     }
      // }

      // function gotRemoteStream(event) {
      //   remoteStream.setAttribute("src",vendorURL.createObjectURL(event.stream));
      // }
      
      // // navigator.getUserMedia({
      // //   audio: true, 
      // //   video: true
      // // }, function(stream) {
      // //     pc1.addStream(stream);
      // //     localStream.setAttribute("src", vendorURL.createObjectURL(stream));
      // // }, function(err) {
      // //   console.log('getUserMedia error' + err);
      // // })
  }
}
