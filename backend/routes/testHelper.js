// This API helper will only be loaded if config.test_helper_api is true

var express = require('express');
var router = express.Router({mergeParams: true});
// var config = require("../config.js");
var C               = require("../constants");
var dbInterface     = require("../db_interface.js");

var log_iface = require("../logger.js");
var systemLogger = log_iface.systemLogger;

router.get('/roles/main-contractor',  createMCRole);
router.get ('/roles/main-contractor/grant', grantUserRole);

module.exports = router;

systemLogger.logInfo(`
	**********************************************************
	*                                                        *
	*         Warning: Test helper API is enabled            *
	*                                                        *
	**********************************************************
`);

function createMCRole(req, res){

	dbInterface(req[C.REQ_REPO].logger).createMainContractorRole(req.query.account, req.query.project).then(() => {
		res.status(200).json({status: 'OK'});
	}).catch( err => {
		res.status(500).json(err);
	});
}


function grantUserRole(req, res){
	dbInterface(req[C.REQ_REPO].logger).grantUserMainContractorRole(req.query.user, req.query.account).then(() => {
		res.status(200).json({status: 'OK'});
	}).catch( err => {
		res.status(500).json(err);
	});
}

