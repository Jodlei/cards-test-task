import { ButtonWrap, Button } from './LoadMoreButton.styled';

export const LoadMoreButton = ({ loadMoreClickHandler, isLoading }) => {
  return (
    <ButtonWrap>
      <Button onClick={loadMoreClickHandler} isLoading={isLoading}>
        {isLoading ? 'Loading' : 'Load more'}
      </Button>
    </ButtonWrap>
  );
};
