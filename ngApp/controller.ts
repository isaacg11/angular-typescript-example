//controller
namespace MovieApp.Controllers {

   export class MovieController{
    public movies;

    public pickColor(color:string){
      console.log(color);
    }

    constructor(){
      this.movies = [
        {title: 'one', director: 'a'},
        {title: 'two', director: 'b'},
        {title: 'three', director: 'c'}
      ];
    }
  }
  angular.module("MyApp").controller("MovieController", MovieController);
}
