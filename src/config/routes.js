module.exports.routes = {
  '/': { view: 'pages/login', locals: { layout: false } },
  '/profile': 'ProfileController.showProfile',
  '/signup': 'UsuarioController.showUserForm',
  '/homepage': 'HomepageController.overview',
  '/forgot-password': { view: 'pages/forgot-password', locals: { layout: false } },
  '/evaluation': { view: 'pages/evaluation', locals: { layout: true } },
  '/conformist': { view: 'pages/conformist', locals: { layout: true } },
  '/harmonizer': { view: 'pages/harmonizer', locals: { layout: true } },
  '/director': { view: 'pages/director', locals: { layout: true } },
  '/initiator': { view: 'pages/initiator', locals: { layout: true } },
  '/analyst': { view: 'pages/analyst', locals: { layout: true } },
  '/analytical': { view: 'pages/analytical', locals: { layout: true } },
  '/behavioral': { view: 'pages/behavioral', locals: { layout: true } },
  '/conceptual': { view: 'pages/conceptual', locals: { layout: true } },
  '/directive': { view: 'pages/directive', locals: { layout: true } },
  '/decisionForm': { view: 'pages/decisionForm', locals: { layout: true } },
  '/groupEvaluation': { view: 'pages/groupEvaluation', locals: { layout: true } },

  'GET /profileG/:userId': 'ProfileGController.showProfile',
  'GET /group': 'GroupController.showGroupPage',
  'GET /signup': 'UsuarioController.showUserForm',
  'POST /signup': 'UsuarioController.create',
  'GET /user/:id': 'UsuarioController.read',
  'POST /': 'AuthController.login',
  'GET /logout': 'UsuarioController.logout',
  'POST /evaluation': 'ColabController.answer',
  'POST /profile/update-happiness': 'ProfileController.updateHappiness',
  'POST /decisionForm': 'DecisionMakingController.answer',

  'POST /api/v1/user/upload': 'UsuarioController.upload',

  'GET /admin': 'AdminController.showAdminPage',
  'POST /admin/assign-user': 'AdminController.assignUserToTeam',
  'POST /admin/create-team': 'AdminController.createTeam',
  'GET /admin/view-teams': 'AdminController.viewTeams',

  'POST /task': 'HomepageController.createTask',
  'GET /tasks': 'HomepageController.fetchTasks',
  'DELETE /task/:id': 'HomepageController.deleteTask',
  'PUT /task/:id': 'HomepageController.updateTask',

  'GET /groupEvaluation': 'GroupEvaluationController.findMembers',
  'POST /submitGroupEvaluation': 'GroupEvaluationController.submitGroupEvaluation',

  'POST /verify': 'AuthController.verify',
  'POST /reset-password': 'AuthController.resetPassword',
};
