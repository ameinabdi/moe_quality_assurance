import { createSelector } from 'reselect';

const selectRaw = (state) => state.schoolSupervision.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const schoolSupervisionDestroySelectors = {
  selectLoading,
};

export default schoolSupervisionDestroySelectors;
