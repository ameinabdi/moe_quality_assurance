import { createSelector } from 'reselect';

const selectRaw = (state) => state.tools.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const toolsViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default toolsViewSelectors;
