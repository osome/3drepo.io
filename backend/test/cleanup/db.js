db.getSiblingDB('project_username').dropDatabase();
db.getSiblingDB('upload_username').dropDatabase();
db.getSiblingDB('verify_username').dropDatabase();
db.getSiblingDB('verify_username_double_verified').dropDatabase();
db.getSiblingDB('issue_username').dropDatabase();
db.dropUser('payment');
db.dropUser('test');
db.dropUser('os');
db.dropUser('info');
db.dropUser('login_username');
db.dropUser('login_username_not_verified');
db.dropUser('logout_username');
db.dropUser('project_username');
db.dropUser('signup_helloworld');
db.dropUser('project_username');
db.dropUser('upload_username');
db.dropUser('verify_username');
db.dropUser('verify_username_not_verified');
db.dropUser('verify_username_double_verified');
db.dropUser('verify_username_expired');
db.dropUser('issue_username');