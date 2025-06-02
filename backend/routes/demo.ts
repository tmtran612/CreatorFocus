import express, { Request, Response } from 'express';
import pool from '../config/database';

const router = express.Router();

interface DemoRequest {
  name: string;
  email: string;
  company: string;
  message: string;
}

router.post('/request', async (req: Request<{}, {}, DemoRequest>, res: Response) => {
  try {
    const { name, email, company, message } = req.body;

    // Insert demo request into database
    const result = await pool.query(
      'INSERT INTO demo_requests (name, email, company, message) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, email, company, message]
    );

    // Send confirmation email (implement email service later)

    res.status(201).json({
      success: true,
      data: result.rows[0],
      message: 'Demo request submitted successfully',
    });
  } catch (error) {
    console.error('Error submitting demo request:', error);
    res.status(500).json({
      success: false,
      message: 'Error submitting demo request',
    });
  }
});

export default router; 