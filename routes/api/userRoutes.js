const router = require('express').Router();
const { getAllUsers } = require('../../controllers/userController') // import the functions from the user-controller.js file
const { getUserById } = require('../../controllers/userController'); // import the functions from the user-controller.js file
const { createUser } = require('../../controllers/userController'); // import the functions from the user-controller.js file
const { updateUser } = require('../../controllers/userController'); // import the functions from the user-controller.js file

const { deleteUser } = require('../../controllers/userController'); // import the functions from the user-controller.js file

const { addFriend } = require('../../controllers/userController'); // import the functions from the user-controller.js file

const { removeFriend } = require('../../controllers/userController'); // import the functions from the user-controller.js file



router.route('/').get(getAllUsers); // this is the same as app.get('/api/users', getAllUsers);
router.route('/:userId').get(getUserById); // this is the same as app.get('/api/users/:userId', getUserById);
router.route('/').post(createUser); // this is the same as app.post('/api/users', createUser);
router.route('/:userId').put(updateUser); // this is the same as app.put('/api/users/:userId', updateUser);
router.route('/:userId').delete(deleteUser); // this is the same as app.delete('/api/users/:userId', deleteUser);
router.route('/:userId/friends/:friendId').post(addFriend); // this is the same as app.post('/api/users/:userId/friends/:friendId', addFriend);
router.route('/:userId/friends/:friendId').delete(removeFriend); // this is the same as app.delete('/api/users/:userId/friends/:friendId', removeFriend);

module.exports = router;