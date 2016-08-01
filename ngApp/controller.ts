namespace MovieApp.Controllers {

   export class MovieController{
    public dogs;
    public bunnies;

    constructor(){
      this.dogs = [
        {name: 'German Shepherd', img: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Buck_The_GSD.jpg'},
        {name: 'Black Lab', img: 'https://i.ytimg.com/vi/GmXks--98Bc/maxresdefault.jpg'}
      ]
      this.bunnies = [
        {name: 'Fluffy', img: 'https://englishwoodlandstimber.files.wordpress.com/2012/05/fluffy-bunny-just-for-you.jpg'},
        {name: 'Red Eyes', img: 'https://40.media.tumblr.com/bd8c7ae7f4f60881c7780582afce097b/tumblr_n4w271cEsn1rfhxyho1_1280.jpg'}
      ]
    }

  }
  angular.module("MyApp").controller("MovieController", MovieController);
}
