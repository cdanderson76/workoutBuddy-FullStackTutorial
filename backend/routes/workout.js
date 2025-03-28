import express from 'express';

const router = express.Router();

router.get('/', (req, resp) => {
  resp.json({ message: 'GET all workouts' });
});

router.get('/:id', (req, resp) => {
  resp.json({ message: 'GET a single workout'});
});

router.delete('/:id', (req, resp) => {
  resp.json({ message: 'DELETE a single workout'});
});

router.patch('/:id', (req, resp) => {
  resp.json({ message: 'EDIT a single workout'});
});

router.post('/', (req, resp) => {
  resp.json({ message: 'CREATE a single workout'});
}); 

router.patch('/id:')

export default router;