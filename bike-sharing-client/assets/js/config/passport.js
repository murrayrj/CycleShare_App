var FacebookStrategy = require('passport-facebook').Strategy;
var LocalStrategy   = require('passport-local').Strategy;

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    enableProof: false
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.get('/auth/facebook',
  passport.authenticate('facebook', { scope: ['user_status', 'user_checkins'] }));

app.get('/auth/facebook',
  passport.authenticate('facebook', { authType: 'rerequest', scope: ['user_status', 'user_checkins'] }));

app.get('/auth/facebook',
  passport.authenticate('facebook', { display: 'touch' }));

app.get('/auth/facebook',
  passport.authenticate('facebook', { authType: 'reauthenticate', authNonce: 'foo123' }));

passport.use(new FacebookStrategy({
    // clientID, clientSecret and callbackURL
    profileFields: ['id', 'displayName', 'photos']
  },
  // verify callback
));