const router = require('express').Router();

const {
  getAllThought,
  createThought,
  getThoughtById,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../Controllers/thoughtController');

router.route('/').get(getAllThought);
router.route('/').post(createThought);

router.route('/:id').get(getThoughtById);
router.route('/:id') .put(updateThought);
router.route('/:id').delete(deleteThought);

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;