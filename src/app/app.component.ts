import { Component } from "@angular/core";

interface Book {
  id: number;
  title: string;
  coverImage: string;
  category: string;
  author: string;
  rating: number;
  added: boolean;
  add: string;
  button: string;
  addedToList: boolean;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "section1-b";
  public show: boolean = false;
  public listCart = [];
  private data;

  books: Book[] = [
    {
      id: 1,
      title: "How To: Absurd Scientific Advice for Common Real-World Problems",
      coverImage:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1550145086l/43852758.jpg",
      author: "Randall Munroe",
      category: "Science & Technology",
      rating: 4.2,
      addedToList: false,
      add: "btn btn-primary",
      button: "Want to Read",
      added: false
    },
    {
      id: 2,
      title: "Sapiens: A Brief History of Humankind",
      coverImage:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1420585954l/23692271.jpg",
      author: "Yuval Noah Harari",
      category: "History",
      rating: 4.44,
      addedToList: false,
      add: "btn btn-primary",
      button: "Want to Read",
      added: false
    },
    {
      id: 3,
      title: "Shoe Dog: A Memoir by the Creator of NIKE",
      coverImage:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1457284880l/27220736.jpg",
      author: "Phil Knight",
      category: "Biography",
      rating: 4.48,
      addedToList: false,
      add: "btn btn-primary",
      button: "Want to Read",
      added: false
    },
    {
      id: 4,
      title:
        "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
      coverImage:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1535115320l/40121378._SY475_.jpg",
      author: "James Clear",
      category: "Self Help",
      rating: 4.34,
      addedToList: false,
      add: "btn btn-primary",
      button: "Want to Read",
      added: false
    }
  ];

  addToCart(button, i) {
    button.addedToList = !button.addedToList;
    button.button = button.addedToList ? "Added to List!" : "Want to Read";
    button.add = button.addedToList ? "btn btn-success" : "btn btn-primary";

    if (!button.addedToList) {
      this.listCart.splice(this.listCart.indexOf(button), 1);
    } else {
      this.listCart.push(button);
    }
  }
}
