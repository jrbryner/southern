var a = angular.module('Southern', ['angular-scroll-animate', 'ngFitText', 'ngMap', 'angularVideoBg']);

a.factory('app', function(){

  var app = {

    baseImgFolder     : 'img/',

    headerText        : ['Future Students', 'Parents & Families', 'Alumni & Friends', 'Faculty & Staff', 'Curent Students', 'MyAccess'],
    headerLink        : [],

    firstSection      : ['img0-0.png'],

    secondSection     : ['img1-1.png', 'img1-2.png', 'img1-3.png'],
    secondSectionText : ['LEARN HERE', 'WORSHIP HERE', 'LIVE HERE'],

    thirdSection      : ['"Many are the plans in a person\'s heart, but it is the Lord\'s purpose that prevails"', 'Proverbs 19:21'],

    fourthTopText     : ['200+', '14:1', '60+', '12M'],
    fourthBottomText  : ['Students Participating in Campus Research day Each Semester', 'Student Faculty Ratio', 'Clubs and Organizations', 'Awarded in Financial Aid each year'],

    fifthSection      : ['img2-1.png'],

    sixthSection      : ['img3-2.png', 'img3-1.png', 'img3-3.png', 'img3-4.png'],

    seventhSection    : ['img4-1.png', 'img4-2.png', 'img4-3.png', 'img4-4.png', 'img4-5.png', 'img4-6.png', 'img4-7.png', 'img4-8.png'],
    seventhText       : ['Affordability', '', 'Life at Southern', '', '', 'Local Churches', '', 'Visiting Campus'],
    seventhTextBG     : ['rgb(255,136,73)', '', 'rgb(150,23,46)', '', '', 'rgb(0,82,147)', '', 'rgb(125,0,99)']
  };

  app.showElementUp = function(el){
    el.removeClass('hidden');
    el.addClass('animated fadeInUp');
  }
  app.showElementLeft = function(el){
    el.removeClass('hidden');
    el.addClass('animated fadeInLeft');
  }
  app.showElementFlip = function(el){
    el.removeClass('hidden');
    el.addClass('animated flipInY');
  }
  app.showElement = function(el){
    el.removeClass('hidden');
    el.addClass('animated fadeIn');
  }

  return app;

});

a.component('header', {
  templateUrl: 'templates/header.html',
  controller: function HeaderController($scope, app){
    $scope.app = app;
    $scope.isMenuOpen = !1;

    $scope.toggleMenu = function(){
      $scope.isMenuOpen = !$scope.isMenuOpen;
    };
  }
});

a.component('firstSection', {
  templateUrl: 'templates/first.html',
  controller: function firstSectionController($scope, app){
    $scope.app = app;
  }
});

a.component('secondSection', {
  templateUrl: 'templates/second.html',
  controller: function secondSectionController($scope, app){
    $scope.app = app;
  }
});

a.component('thirdSection', {
  templateUrl: 'templates/third.html',
  controller: function thirdSectionController($scope, app){
    $scope.app = app;
  }
});

a.component('fourthSection', {
  templateUrl: 'templates/fourth.html',
  controller: function fourthSectionController($scope, app){
    $scope.app = app;
  }
});

a.component('fifthSection', {
  templateUrl: 'templates/fifth.html',
  controller: function fifthSectionController($scope, app){
    $scope.app = app;
  }
});

a.component('sixthSection', {
  templateUrl: 'templates/sixth.html',
  controller: function sixthSectionController($scope, app){
    $scope.app = app;
    $scope.missionLocations = missionLocations.Locations;
    this.mapOpen = !1;
  }
});

a.component('seventhSection', {
  templateUrl: 'templates/seventh.html',
  controller: function seventhSectionController($scope, app){
    $scope.app = app;
  }
});

a.component('eighthSection', {
  templateUrl: 'templates/eighth.html',
  controller: function eighthSectionController($scope, $http, app){
    $http.get('http://www.southern.edu/calendar/calendar-v5/ajax/getRecentEvents.php?limit=3').then(function(response){
      $scope.events = response.data;
      console.log($scope.events);
    });
    $scope.app = app;
  }
});

a.component('ninthSection', {
  templateUrl: 'templates/ninth.html',
  controller: function ninthSectionController($scope, app){
    $scope.app = app;
  }
});

a.component('footer', {
  templateUrl: 'templates/footer.html',
  controller: function FooterController($scope, app){
    $scope.app = app;
  }
});

a.directive('scrollPosition', function($window) {
  return {
    scope: {
      scroll: '=scrollPosition'
    },
    link: function(scope, element, attrs) {
      var handler = function() {
        scope.scroll = $(window).scrollTop();
      }
      $(window).on('scroll', scope.$apply.bind(scope, handler));
      handler();
    }
  };
});

(function() {
 var cx = '004766769700957756237:fowol8rwkue';
 var gcse = document.createElement('script');
 gcse.type = 'text/javascript';
 gcse.async = true;
 gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
 var s = document.getElementsByTagName('script')[0];
 s.parentNode.insertBefore(gcse, s);
})();

window.onload = function() {
  $(".gsc-input input").attr('placeholder', 'Search');
}
