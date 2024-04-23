import { createSelector } from 'reselect';

const selectRaw = (state) => state.sSASurvey.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const sSASurveyViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default sSASurveyViewSelectors;
