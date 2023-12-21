import CardsList from './CardsList/CardsList';
import Filter from './Filter/Filter';
import Header from './Header/Header';
import PaginationCards from './PaginationCards/PaginationCards';

export const App = () => {
  return (
    <div>
      <Header />
      <Filter />
      <CardsList />
      <PaginationCards />
    </div>
  );
};
