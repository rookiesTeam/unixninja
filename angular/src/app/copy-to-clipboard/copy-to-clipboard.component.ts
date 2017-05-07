import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';


@Component({
  selector: 'app-copy-to-clipboard',
  templateUrl: './copy-to-clipboard.component.html',
  styleUrls: ['./copy-to-clipboard.component.css']
})
export class CopyToClipboardComponent implements OnInit, OnChanges {

  @Input() target: string;
  private text: string;

  constructor() { }

  ngOnInit() {
    this.text = this.target;
  }

  ngOnChanges(changes: SimpleChanges) {
    if('target' in changes){
      this.text = changes['target'].currentValue;
    }
  }

}
