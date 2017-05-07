import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClipboardService } from 'ng2-clipboard/ng2-clipboard';

@Component({
  selector: 'app-popover-button',
  templateUrl: './popover-button.component.html',
  styleUrls: ['./popover-button.component.css']
})
export class PopoverButtonComponent implements OnInit {

  @Input() text: string;
  @Output() copied = new EventEmitter();
  @Output() hidePopOver = new EventEmitter();
  private timer;

  constructor(private clipboard: ClipboardService) { }

  ngOnInit() {
  }

  copy = (event) => {
    this.clipboard.copy(''+this.text);
    this.copied.emit(event);
    this.timer = setTimeout(() => this.hidePopOver.emit(event), 500);
  }

}
