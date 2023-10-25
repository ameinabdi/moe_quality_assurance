import { createSelector } from 'reselect';

const selectRaw = (state) => state.questionSection.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const questionSectionViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default questionSectionViewSelectors;
