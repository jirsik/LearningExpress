import express, {
  Router,
  Request,
  Response,
} from 'express';

const router: Router = express.Router();

// @route   GET /
router.get('/', (req: Request, res: Response) => {
  res.render('homepage');
});

export default router;
