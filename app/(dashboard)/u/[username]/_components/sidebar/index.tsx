import { Navigation } from './navigation';
import { Toggle } from './toggle';
import { Wrapper } from './wrapper';

export const SideBar = async () => {
  return (
    <Wrapper>
      <Toggle />
      <Navigation />
    </Wrapper>
  );
};
