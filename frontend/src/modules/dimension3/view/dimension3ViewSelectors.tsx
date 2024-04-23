import { createSelector } from 'reselect';

const selectRaw = (state) => state.dimension3.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const dimension3ViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default dimension3ViewSelectors;
