import { Component , OnInit , Input } from '@angular/core';

@Component({
    selector: 'msg-box',
    templateUrl: 'msg-box.component.html'
})

export class MsgBoxComponent implements OnInit {

    @Input() msg;

    constructor() { }

    ngOnInit() { }

    getClass(mime) {
        // mime is being returned false for unknown extension , need to make it string
       // return ChatHelper.getFontAwesomeIconFromMIME(mime.toString());
    }

    checkIfImage(msg) {
        // mime is being returned false for unknown extension
        if (!msg.file_detail.extension) {
            return false;
        } else {
            return msg.file_detail.extension.includes("image/");
        }
    }
}