import { createSelector } from 'reselect';

const selectRaw = (state) => state.assessmentAnswer.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const assessmentAnswerViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default assessmentAnswerViewSelectors;
