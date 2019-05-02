const router = require( "express" ).Router();
const bookRoutes = require( "./books" );

router.use( "/books", bookRoutes ); // Book routes

module.exports = router;