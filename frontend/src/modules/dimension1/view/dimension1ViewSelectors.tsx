import { createSelector } from 'reselect';

const selectRaw = (state) => state.dimension1.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const dimension1ViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default dimension1ViewSelectors;
