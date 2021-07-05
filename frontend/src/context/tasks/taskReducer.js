import { TASKS_PROJECT } from '../../types';

const reducer = (state, action) => {
  switch (action.type) {
    case TASKS_PROJECT:
      return {
        ...state,
        tasksProject: state.tasks.filter(
          (task) => task.projectId === action.payload
        ),
      };
    default:
      return state;
  }
};

export default reducer;
