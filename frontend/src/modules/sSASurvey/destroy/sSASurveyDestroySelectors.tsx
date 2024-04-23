import { createSelector } from 'reselect';

const selectRaw = (state) => state.sSASurvey.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const sSASurveyDestroySelectors = {
  selectLoading,
};

export default sSASurveyDestroySelectors;
