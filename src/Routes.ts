import { Router } from 'express';
import { groupController, groupMemberController, taskController, userController } from './controllers';
import { appliedTaskController } from './controllers/AppliedTask.controller';
import { gradeController } from './controllers/Grade.controller';

function prefix(path: string, configure: Router): void {
  const router = Router({ mergeParams: true });
  this.use(path, router);
  // @ts-ignore
  configure(router);
}

Router['prefix'] = prefix;
const routes = Router({ mergeParams: true });

// @ts-ignore
routes.prefix('/user', (user) => {
  user.post('', userController.register);
  user.post('/login', userController.login);
});

routes.prefix('/task', (task) => {
  task.post('', taskController.create);
  task.get('/:id', taskController.findById);
  task.put('/:id', taskController.update);
});

routes.prefix('/group', (group) => {
  group.post('', groupController.create);
  group.get('/:id', groupController.findById);
  group.put('/:id', groupController.update);
});

routes.prefix('/group-member', (groupMember) => {
  groupMember.post('', groupMemberController.create);
  groupMember.get('/:id', groupController.findById);
});

routes.prefix('/apply-task', (appliedTask) => {
  appliedTask.post('', appliedTaskController.create);
});

routes.prefix('/grade', (grade) => {
  grade.post('', gradeController.create);
});
export default routes;
