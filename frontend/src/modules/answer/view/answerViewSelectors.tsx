import { createSelector } from 'reselect';

const selectRaw = (state) => state.answer.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const answerViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default answerViewSelectors;
