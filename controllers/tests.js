exports.get = function(req, res, connection) {

  var url = require('url');
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;


  if (query.testname == 'css'){
  res.end
  (
  '[{"testname": "CS 2350 Fernandez CSS","date": "Wed Oct 03 2012","quesCorrect": [1,2,3,4,5]},{"testname": "CS 2350 Fernandez CSS","date": "Wed Nov 03 2012","quesCorrect": [1,2]}]'
  );
  }
  else if (query.testname == 'xhtml'){

    res.end
    (
    '[{    "testname": "CS 2350 Fernandez XHTML",    "date": "Thur Oct 07 2012",    "quesCorrect": [4,5]     },{    "testname": "CS 2350 Fernandez XHTML",    "date": "Sun Oct 09 2012",    "quesCorrect": [1,2,3,4]    },    {    "testname": "CS 2350 Fernandez XHTML",    "date": "Fri Dec 03 2012",    "quesCorrect": [1,3,4]    }]' 
    );

  }
  else{
    res.end( JSON.stringify('You did not enter css or xhtml')  );
  }
}
