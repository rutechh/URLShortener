import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { ShortenerResponse } from './model/ShortenerResponse';
import { ShortenerService } from './service/shortener.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'URLShortener';
  isLoading:boolean = false;

  response:ShortenerResponse|null = null;

  constructor ( private shortenerService:ShortenerService, private toast: ToastrService, private clipboard: Clipboard) {}

  shortenUrl(input:string){
    this.isLoading = true;
    if(!input){
      this.toast.error("Enter a valid URL", " URL Shortener");
      this.isLoading =false;
      return;
    }

    this.shortenerService.shortenUrl(input).subscribe(
      data => {
        this.toast.success("URL generated successfully", ` URL Shortener`)
        this.response = data;
        this.isLoading = false;
      },
      err => {
        this.toast.error(err.error.error, " URL Shortener");
        console.log(err);
        this.isLoading = false;
      }
    )
  }

  copyText(textToCopy: string) {
    this.clipboard.copy(textToCopy);
    this.toast.success("Link copied");
  }

}
