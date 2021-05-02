import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    firstMediaItem = {
        name:"Hello World",
        watchedOn:"2020-10-10",
        gendre:"Drama",
        year:2020
    }

    deleteEventFired(mediaItem) {
        console.log("self created delete event fired");
    }
}
