const express = require('express');
const hbs = require('hbs');
const app = express();

//Make everything inside of public available
app.use(express.static('public'));

// We need to tell hbs where partial templates are located
hbs.registerPartials(__dirname + '/views/partials');

// Express needs to know which templating engine to use
// We need to set the option 'view engine' to the name of the package
// that will render our views
app.set('view engine', 'hbs');

// We need to tell express where to look up our view templates
app.set('views', __dirname + '/views');

app.get('/home', (request, response, next) => {
  response.render('home', {
    name: 'Charlotte Pelgen',
    description: 'talented ukulele player',
    mainPicture: '/images/bad-mouse-orchestra.jpg'
  });
});

app.get('/about', (request, response, next) => {
  response.render('about', {
    name: 'Charlotte Pelgen',
    profession: 'Ukulele player and teacher',
    description:
      'The Bad Mouse Orchestra is a German ukulele and guitar trio playing swing and jazz tunes from the 1920’s to 40’s. Our repertoire covers well known standards such as "I Can’t Give You Anything but Love” and “Sweet Georgia Brown” which allows the audience to sing along, but we also play unknown and forgotten numbers that have rarely been heard in almost a hundred years. These tunes we discover when digging through old sheet music or gramophone records which we find in dusty boxes on flea markets, attics or thrift stores.Our passion for the time does not stop when we leave stage. The love for the music, old fashion and the fun we have performing together is not simply a show we put on but it truly is authentic. Another key point of our performances is a collection of original arrangements by the ukulele virtuoso Roy Smeck. Passed on to us by Roy’s old student Vincent Cortese many arrangements can not be heard anywhere else. The incredibly creative and stunt filled arrangements bring fresh wind into the old songs. As the Bad Mouse Orchestra we are dedicated to bring back the vibe of the roaring 20’s, daring 30’s and wicked 40’s. Not however in the extravagant manner of old broadway shows but in a much more intimate way, like three friends getting together at the end of the day to play their favourite gramophone records right there in their living room.'
  });
});

app.get('/works', (request, response, next) => {
  response.render('works', {
    albums: [
      {
        title: 'UKULELE TREASURES FROM THE GOLDEN SWING ERA',
        tracks: '8',
        musicStyle: 'swing',
        albumDescription:
          'The classic Bad Mouse Orchestra living room sound captured on CD!'
      },
      {
        title: 'SCHAU SIE SCHLÄFT',
        tracks: '12',
        musicStyle: 'chansons',
        albumDescription:
          'Charlotte & Elisabeth connects a love for the songs of Rainer Bielfeldt, Jacques Brel, Freidrich Holländer, Kurt Weill, Berthold Brecht and many more. '
      },
      {
        title: 'DRUNK WITH LOVE',
        tracks: '12',
        musicStyle: 'swing',
        albumDescription: 'Swing from forgotten queer musicians​'
      }
    ]
  });
  followHer: [
    {
      facebook: 'fblink',
      instagram: 'instalink',
      youtube: 'ytlink',
      homepage: 'homepagelink'
    }
  ];
});

app.get('/*', (request, response, next) => {
  response.render('home', {
    name: 'Charlotte Pelgen',
    description: 'talented ukulele player'
  });
});

app.listen(3020);
