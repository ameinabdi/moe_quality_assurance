import { createSelector } from 'reselect';

const selectRaw = (state) => state.subQuestion.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const subQuestionViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default subQuestionViewSelectors;
