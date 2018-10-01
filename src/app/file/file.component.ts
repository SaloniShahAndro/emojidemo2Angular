import { Component, OnInit } from '@angular/core';
import mimetype2fa from 'mimetype-to-fontawesome'

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  filedata = {};

  constructor() { }

  ngOnInit() {
    this.filedata = {
        "path": "http://localhost:4555/uploads",
        "filename": "images-1534242004628greece-beach-resorts-wallpaper-3.jpg",
        "extension": "image/jpeg"
    }
    console.log(mimetype2fa('foo/bar',{ prefix: 'fa-' })) // fa-file-o
    console.log(mimetype2fa('image/png',{ prefix: 'fa-' })) // fa-file-image-o
  }

}
