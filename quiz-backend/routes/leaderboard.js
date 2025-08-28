import express from 'express';
import Leaderboard from '../models/Leaderboard.js';

const router = express.Router();

// Add a leaderboard entry
router.post('/', async (req, res) => {
  try {
    const entry = new Leaderboard(req.body);
    await entry.save();
    res.status(201).json(entry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all leaderboard entries, sorted by score desc, then timestamp asc
router.get('/', async (req, res) => {
  try {
    const entries = await Leaderboard.find().sort({ score: -1, timestamp: 1 });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
