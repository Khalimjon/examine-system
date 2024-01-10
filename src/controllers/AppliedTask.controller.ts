import { Auth } from '../infrastructure';
import { AppliedTaskEntity } from '../domain';

class AppliedTaskController {
  @Auth('student')
  async create() {
    try {
    } catch (error) {}
  }
}
