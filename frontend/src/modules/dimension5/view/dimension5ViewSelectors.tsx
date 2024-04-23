import { createSelector } from 'reselect';

const selectRaw = (state) => state.dimension5.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const dimension5ViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default dimension5ViewSelectors;
