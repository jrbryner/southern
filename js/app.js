initGSE();

var a = angular.module('Southern', ['angular-scroll-animate', 'ngFitText', 'ngMap', 'angularVideoBg']);

a.factory('app', function(){

  var app = {

    baseImgFolder     : 'img/',

    headerText        : ['Future Students', 'Parents & Families', 'Alumni & Friends', 'Faculty & Staff', 'Current Students', 'MyAccess'],
    headerLink        : ['/undergrad', '/connect/parents.html', '/connect/alumni.html', '/connect/faculty-staff.html', '/connect/currentstudents.html', 'https://myaccess.southern.edu'],

    firstSection      : ['img0-0.png'],

    secondSection     : ['img1-1.png', 'img1-2.png', 'img1-3.png'],
    secondSectionText : ['LEARN HERE', 'WORSHIP HERE', 'LIVE HERE'],
    secondSectionLink : ['/undergrad/academics/academic-majors.html', 'http://www.southern.edu/undergrad/campus-life/spiritual-life.html', 'http://www.southern.edu/undergrad/campus-life/student-life.html'],

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
  app.hideElement = function(el){
    el.removeClass('animated flipInY');
    el.addClass('hidden');
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
  controller: function sixthSectionController($scope, app, NgMap){
    $scope.app = app;
    $scope.missionLocations = missionLocations.Locations;
    this.mapOpen = !1;

    $scope.showInfosWindow = function (event, lat, long, index) {
        var infowindow = new google.maps.InfoWindow();

        var center = new google.maps.LatLng(lat + 7, long);
        var word = missionLocations.Locations[index].Students == 1 || missionLocations.Locations[index].Students === 0 ? ' is' : 's are';

        infowindow.setContent(
          '<div>' + missionLocations.Locations[index].Students + ' student' + word + ' in ' + missionLocations.Locations[index].Location + ' from ' + missionLocations.Locations[index].Department  + '</div>'
        );

        infowindow.setPosition(center);
        infowindow.open($scope.map);
        console.log(infoWindow);
     };

    NgMap.getMap().then(function(map){
      console.log("HI");
      $scope.map = map;
    });
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
  controller: function FooterController($scope, app, NgMap, $window){
    var map;
    $scope.app = app;
    NgMap.getMap().then(function(map){
      google.maps.event.addListener(map, 'resize', function(){
        var center = new google.maps.LatLng(map.center.lat(), map.center.lng())
        console.log();
        map.setCenter(center);
      });
      $(window).resize(function(){
        google.maps.event.trigger(map, 'resize')
      });
    });
    $scope.showDirections = function(event, p){
      var infowindow = new google.maps.InfoWindow();
      console.log(p);
      var center = new google.maps.LatLng(p[0] + .001,p[1]);

      infowindow.setContent(
        '4881 Taylor Circle Collegedale, TN 37315<a class="directionLink" target="_blank" href="https://www.google.com/maps/dir//4881+Taylor+Circle+Collegedale,+TN+37315/@35.050502,-85.0459625,13z">Get Directions</a>'
      );

      infowindow.setPosition(center);
      infowindow.open($scope.map);
      console.log(infoWindow);
    }

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

function initGSE() {
   window.__gcse = {
       parsetags: 'onload',
       callback: function() {

           $('input.gsc-input').attr('placeholder', 'Search');

           $('td.gsc-search-button').on('mousedown', function() {
               $(this).find('input').trigger('click');
           });

       }
   }

   var cx = '004766769700957756237:fowol8rwkue'; // Production
   //var cx = '004766769700957756237:out5iv1xyfm'; // Test
   var gcse = document.createElement('script'); gcse.type = 'text/javascript';
   gcse.async = true;
   gcse.src = 'https://www.google.com/cse/cse.js?cx=' + cx;
   var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);
}
