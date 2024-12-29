import { CardList, Category } from "../components";

const Home = () => {
  return (
    <section className="flex h-full flex-col">
      <Category />
      <div className="flex-1 overflow-y-auto overflow-hidden scrollbar-none">
        <CardList />
      </div>
    </section>
  );
};

export default Home;
