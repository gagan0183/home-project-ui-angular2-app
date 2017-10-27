export class Book {
  constructor(public isbn: string, public bookName: string, public type: string, public author: string, public startDate: Date, public completeDate: Date, public revision: boolean, public imagePath: string){

  }
}
