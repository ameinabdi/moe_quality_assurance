import { createSelector } from 'reselect';

const selectRaw = (state) => state.assessment.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const assessmentDestroySelectors = {
  selectLoading,
};

export default assessmentDestroySelectors;
