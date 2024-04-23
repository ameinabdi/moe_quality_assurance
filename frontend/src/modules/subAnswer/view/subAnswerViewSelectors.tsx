import { createSelector } from 'reselect';

const selectRaw = (state) => state.subAnswer.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const subAnswerViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default subAnswerViewSelectors;
