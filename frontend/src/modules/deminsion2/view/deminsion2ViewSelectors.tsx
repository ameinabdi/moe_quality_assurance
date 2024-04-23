import { createSelector } from 'reselect';

const selectRaw = (state) => state.deminsion2.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const deminsion2ViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default deminsion2ViewSelectors;
