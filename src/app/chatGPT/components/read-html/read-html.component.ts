import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-read-html',
  templateUrl: './read-html.component.html',
  styleUrls: ['./read-html.component.less']
})
export class ReadHtmlComponent {
  response: any;

  constructor(private http: HttpClient) { }

  sendRequest() {
    const url = 'https://chatgpt-api.shn.hk/v1/';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'Hello, how are you?' }]
    };

    this.http.post(url, body, { headers }).subscribe(
      (data) => {
        console.log('Response:', data);
        this.response = data;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
