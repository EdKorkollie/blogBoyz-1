import DateTimeFormat = Intl.DateTimeFormat;

export class Post {
  post_id: number;
  title: string;
  content: string;
  image: string;
  date: DateTimeFormat;
  tag: string;

   constructor() {
      this.post_id = 1;
      this.title = "";
      this.content ="";
      this.image = "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg";
      this.date = null;
      this.tag = "OTHER"
   };
}
