
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.dashboard = function(req, res){
  res.render('dashboard');
};

exports.customer = function(req, res){
  res.render('customer');
};

exports.team = function(req, res){
  res.render('team');
};

exports.setting = function(req, res){
  res.render('setting');
};

exports.login = function(req, res){
  res.render('login');
}
