import express from 'express';
import path from 'path';

const router = express.Router();

router.use('/asset', express.static(path.join(__dirname, '../../assets')));

export { router };
