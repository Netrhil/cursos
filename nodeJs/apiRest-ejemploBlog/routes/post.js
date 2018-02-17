var express = require('express');
var router = express.Router();


/* Envia todos los post. */
router.get('/', function(req, res, next) {
	connection.query('SELECT * from Posts', function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  		
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
			
	  	}
  	});
});

router.get('/comentarios/:id', function(req, res, next) {
	console.log(req.params.id);	
	connection.query('SELECT * from comentarios where idPost =' + req.params.id, function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  		
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
			
	  	}
  	});
});

router.post('/comentarios', function(req, res, next) {
	console.log(req.body);	
		
	connection.query('insert into comentarios (texto, idPost) values("'+ req.body.texto +'", '+ req.body.idPost +')', function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  		
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
			
	  	}
  	});
});


module.exports = router;

