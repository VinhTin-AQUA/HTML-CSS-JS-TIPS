import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  imports: [],
  templateUrl: './custom-cursor.component.html',
  styleUrl: './custom-cursor.component.scss'
})
export class CustomCursorComponent {
  htmlCode =
  'html';

cssCode =
  `html {
    cursor: url('/assets/cursors/pointer.png'), auto;
}`;

copyText(flag:string): void {

  if(flag === 'html') {
    navigator.clipboard
    .writeText(this.htmlCode)
    .then(() => {
      console.log('Text copied to clipboard successfully!');
    })
    .catch(err => {
      console.error('Could not copy text: ', err);
    });
  } else if(flag === 'css') {
    navigator.clipboard
    .writeText(this.cssCode)
    .then(() => {
      console.log('Text copied to clipboard successfully!');
    })
    .catch(err => {
      console.error('Could not copy text: ', err);
    });
  }
}
}
