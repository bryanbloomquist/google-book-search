const router = require( "express" ).Router();
const booksController = require( "../../controllers/booksController" );

router.route( "/" ) // matches with '/api/books'
  .get( booksController.findAll )
  .post( booksController.create );

router.route( "/:id" ) // mathces with '/api/books/:id'
  .get( booksController.findById )
  .put( booksController.update )
  .delete( booksController.remove );

  module.exports = router;