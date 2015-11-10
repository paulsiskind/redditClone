
              
              doSomething.controller("appCtrl", ["$scope", function($scope) {

                $scope.displays = [{title: 'The Mysterious Green Toad',
                                   author: 'Humbert Humperdinck',
                                   url:"http://img.timeinc.net/time/photoessays/2010/top10_invasive/cane_toad.jpg",
                                   description: "Something Green, Something blue, something purple, neon , orange colred brains",
                                   comments: [{
                                       author:"Jack Sparrow",
                                       comment: "Arr, Matey!  I smell something fishy!"}],
                                   votes: 0,
                                    date: 'WEDS Nov 04 2015 2:00:37 GMT-0700 (MST)',
                                  upVote: function(){
                                           console.log("upVote")
                                           console.log(this.votes)
                                           this.votes ++},
                                downVote: function(){
                                            console.log('downVote')
                                            this.votes --}
                                 },
                                 {title: "Illmatic",
                                  author: "NAS",
                                  url: "http://static.vibe.com/files/article_images/94-week-king-of-new-york-biggie-nas.jpg",
                                  description:"Aclaimed as the Greatest hip hop album of all time. ",
                                   comments:[{
                                          author: "Bog George",
                                          comment: "I slept with Prince"}],
                                   votes: 2,
                                    date: 'WEDS Nov 04 2015 2:37:37 GMT-0700 (MST)',
                                 
                                   upVote: function(){
                                           console.log("upVote")
                                           console.log(this.votes)
                                           this.votes ++},
                                  downVote: function(){
                                            console.log('downVote')
                                            this.votes --}
                                },
                                {
                                  title: "Crazy Gringo",
                                  author: "Jode",
                                  url: "http://cmsimg.news-leader.com/apps/pbcsi.dll/bilde?Site=DO&Date=20100927&Category=NEWS0102&ArtNo=9270346&Ref=AR&MaxW=640&Border=0&Bull-riding-full-thrills-even-you-re-not-riding",
                                  description: "Crazy Gringos taking over the world!",
                                  comments:[{
                                         author: "Jude Law",
                                         comment: "damn damn"}],
                                  votes: 10,
                                   date: 'WEDS Nov 04 2015 1:00:37 GMT-0700 (MST)',
                                 upVote: function(){
                                           console.log("upVote")
                                           console.log(this.votes)
                                           this.votes ++},
                               downVote: function(){
                                            console.log('downVote')
                                            this.votes --}
                                }
                                ]

                                   
                  $scope.order = function(select) {
                    if(select === '-votes') {
                      $scope.viewBar = 'Votes';
                    }
                    if(select === 'date') {
                      $scope.viewBar = 'Date';
                    }
                    if(select === 'title') {
                      $scope.viewBar = 'Title';
                    }
                    $scope.select = select;
                    }
               

                 $scope.commentPost = function(){

                  console.log(this.commentNew)
                  this.display.comments.push(this.commentNew);


                  this.commentNew = {};

                 }                  
                 $scope.formButton = function(){
                 var date = new Date;
                 $scope.displays.push({ title: this.form.title,
                                      author: this.form.author,
                                      url: this.form.url,
                                      description: this.form.description,
                                      votes: 0,
                                     upVote: function(){
                                           console.log("upVote")
                                           console.log(this.votes)
                                           this.votes ++},
                                   downVote: function(){
                                            console.log('downVote')
                                            this.votes --},
                                      comments: [],
                                      date: date});
                 $scope.form = {};
                };
                $scope.showComment= false;
             
              }])
