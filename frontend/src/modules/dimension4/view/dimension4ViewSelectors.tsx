import { createSelector } from 'reselect';

const selectRaw = (state) => state.dimension4.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const dimension4ViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default dimension4ViewSelectors;
