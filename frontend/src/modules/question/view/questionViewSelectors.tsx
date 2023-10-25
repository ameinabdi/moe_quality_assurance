import { createSelector } from 'reselect';

const selectRaw = (state) => state.question.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const questionViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default questionViewSelectors;
