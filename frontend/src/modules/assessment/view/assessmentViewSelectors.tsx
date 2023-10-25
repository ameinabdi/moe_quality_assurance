import { createSelector } from 'reselect';

const selectRaw = (state) => state.assessment.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const assessmentViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default assessmentViewSelectors;
