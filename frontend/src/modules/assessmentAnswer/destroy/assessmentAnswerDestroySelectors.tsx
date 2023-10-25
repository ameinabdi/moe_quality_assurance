import { createSelector } from 'reselect';

const selectRaw = (state) => state.assessmentAnswer.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const assessmentAnswerDestroySelectors = {
  selectLoading,
};

export default assessmentAnswerDestroySelectors;
