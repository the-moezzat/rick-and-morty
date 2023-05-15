import { render,screen } from '@testing-library/react';
import { CharacterCardSkeleton } from './CharacterCardSkeleton';

describe('CharacterCardSkeleton', () => {
    it('should render the specified number of components', () => {
        const count = 3;

        render(<CharacterCardSkeleton count={count} />);

        const skeletons = screen.getAllByLabelText("card-skeleton")

        expect(skeletons.length).toBe(count);
    });
});
