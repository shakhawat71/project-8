import { useNavigation } from "react-router-dom";

const GlobalLoader = () => {
  const navigation = useNavigation();
  const loading = navigation.state === "loading";

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-white bg-opacity-80 z-50 flex flex-col items-center justify-center">
      <div className="w-16 h-16 border-4 border-purple-200 rounded-full relative">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin absolute top-0"></div>
      </div>
      <p className="mt-6 text-gray-700 font-medium">Loading...</p>
    </div>
  );
};

export default GlobalLoader;
