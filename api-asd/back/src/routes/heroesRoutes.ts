import { Router } from "express";
import heroesController from '../controllers/heroesController'

class HeroesRoutes {
  public router: Router = Router();

  constructor() {
      this.config();
  }
  
  config(): void {
    this.router.get('/', heroesController.list);
    this.router.get('/:id', heroesController.getOne);
    this.router.post('/', heroesController.create);
    this.router.delete('/:id', heroesController.delete)
    this.router.put('/:id', heroesController.update)
  }
}

const heroesRoutes = new HeroesRoutes();
export default heroesRoutes.router;
