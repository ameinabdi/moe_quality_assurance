import { createSelector } from 'reselect';

const selectRaw = (state) => state.subAnswer.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const subAnswerDestroySelectors = {
  selectLoading,
};

export default subAnswerDestroySelectors;
