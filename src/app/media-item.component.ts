import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  @Input() mediaItem;
  @Output() deleteEvent = new EventEmitter();

  onDelete(): void {
    console.log("something");
    this.deleteEvent.emit(this.mediaItem);
  }
}
