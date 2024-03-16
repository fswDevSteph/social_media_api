const router = require('express').Router();
const { getAllThoughts } = require('../../controllers/thoughtController') // import the functions from the thought-controller.js file
const { getThoughtById } = require('../../controllers/thoughtController'); // import the functions from the thought-controller.js file
const { createThought } = require('../../controllers/thoughtController'); // import the functions from the thought-controller.js file
const { updateThought } = require('../../controllers/thoughtController'); // import the functions from the thought-controller.js file

const { deleteThought } = require('../../controllers/thoughtController'); // import the functions from the thought-controller.js file

const { addReaction } = require('../../controllers/thoughtController'); // import the functions from the thought-controller.js file

const { removeReaction } = require('../../controllers/thoughtController'); // import the functions from the thought-controller.js file



router.route('/').get(getAllThoughts); // this is the same as app.get('/api/thoughts', getAllThoughts);
router.route('/:thoughtId').get(getThoughtById); // this is the same as app.get('/api/thoughts/:thoughtId', getThoughtById);
router.route('/').post(createThought); // this is the same as app.post('/api/thoughts', createThought);
router.route('/:thoughtId').put(updateThought); // this is the same as app.put('/api/thoughts/:thoughtId', updateThought);
router.route('/:thoughtId').delete(deleteThought); // this is the same as app.delete('/api/thoughts/:thoughtId', deleteThought);
router.route('/:thoughtId/reactions/:reactionId').post(addReaction); // this is the same as app.post('/api/thoughts/:thoughtId/reactions/:reactionId', addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction); // this is the same as app.delete('/api/thoughts/:thoughtId/reactions/:reactionId', removeReaction);

module.exports = router;