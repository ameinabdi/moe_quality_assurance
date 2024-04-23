import { createSelector } from 'reselect';

const selectRaw = (state) => state.subQuestion.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const subQuestionDestroySelectors = {
  selectLoading,
};

export default subQuestionDestroySelectors;
