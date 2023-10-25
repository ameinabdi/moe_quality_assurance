import { createSelector } from 'reselect';

const selectRaw = (state) => state.answer.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const answerDestroySelectors = {
  selectLoading,
};

export default answerDestroySelectors;
