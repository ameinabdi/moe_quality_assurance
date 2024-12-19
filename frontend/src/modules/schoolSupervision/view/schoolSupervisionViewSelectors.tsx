import { createSelector } from 'reselect';

const selectRaw = (state) => state.schoolSupervision.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const schoolSupervisionViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default schoolSupervisionViewSelectors;
