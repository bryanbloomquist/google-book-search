const path = require( "path" );
const router = require( "express" ).Router();
const apiRoutes = require( "./api" );

router.use( "/api", apiRoutes ); // API routes

router.use(( req, res ) => { // send to React app if no API routes were hit
  res.sendFile( path.join( __dirname, "../client/build/index.html" ));
});

module.exports = router;