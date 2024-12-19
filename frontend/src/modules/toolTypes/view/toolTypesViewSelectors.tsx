import { createSelector } from 'reselect';

const selectRaw = (state) => state.toolTypes.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const toolTypesViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default toolTypesViewSelectors;
