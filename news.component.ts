// src/app/news/news.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {
  newsItems: NewsItem[] = [
    {
      title: 'Lorem Ipsum Dolor',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '2023-11-26',
    },
    {
      title: 'Sed Do Eiusmod',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: '2023-11-25',
    },
    // Add more news items as needed
  ];
}

interface NewsItem {
  title: string;
  content: string;
  date: string;
}
