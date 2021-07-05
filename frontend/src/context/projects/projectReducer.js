import {
  ADD_PROJECT,
  GET_PROJECTS,
  PROJECT_FORM,
  FORM_VALIDATION,
  ACTUAL_PROJECT,
  DELETE_PROJECT,
} from '../../types';

const reducer = (state, action) => {
  switch (action.type) {
    case PROJECT_FORM:
      return {
        ...state,
        form: true,
      };

    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };

    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        form: false,
        errorForm: false,
      };

    case FORM_VALIDATION:
      return {
        ...state,
        errorForm: true,
      };

    case ACTUAL_PROJECT:
      return {
        ...state,
        project: state.projects.filter(
          (project) => project.id === action.payload.id
        ),
      };

    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default reducer;
