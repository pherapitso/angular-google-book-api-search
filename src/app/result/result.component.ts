import { Component, OnInit } from '@angular/core';
import { GoogleBookApiService } from '../google-book-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
book;

  constructor(private googleBooksApiService: GoogleBookApiService, private route: ActivatedRoute) {
     
   }

  ngOnInit() {

    let isbn = this.route.snapshot.params['isbn'];
     
    this.googleBooksApiService.SearchByISBN(isbn).
         subscribe((data) => {
            console.log(data.items);
            this.book = data.items[0];
    }); 



}

}
