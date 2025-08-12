 import MainSection from "../components/MainSection";
 import InformaticsSection from "../components/InformaticsSection";
 
const Main = (props) => {
     const { videos, screenshots, loading } = props;
     return (
          <div className="min-h-screen bg-gray-50">
     
     
        <div className="flex-grow">
   <main className="flex-grow">
        <MainSection />
        <InformaticsSection />
      </main>
      </div>
      </div>

  );
};

export default Main;
          