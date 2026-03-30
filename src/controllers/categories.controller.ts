import { Request, Response } from 'express';
import { sendEvent, createEvent } from '../services/kafkaProducer';

export async function createCategory(req: Request, res: Response): Promise<void> {
  try {
    const { name } = req.body;

    if (!name || typeof name !== 'string') {
      res.status(400).json({
        error: 'Le champ "name" est obligatoire et doit être une chaîne',
      });
      return;
    }

    const event = createEvent('CATEGORY_CREATED', { name });

    await sendEvent('category-events', event);

    res.status(201).json({
      message: 'Event envoyé',
      event,
    });
  } catch (error) {
    console.error('[CATEGORY_CONTROLLER] Erreur:', error);

    res.status(500).json({
      error: 'Erreur interne du serveur',
    });
  }
}
