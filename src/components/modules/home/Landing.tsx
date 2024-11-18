import { Input } from "@nextui-org/input";
import { SearchIcon } from "../../icons";

export default function Landing() {
  return (
    <div className="h-[calc(100vh-64px)] bg-[url('/glass.webp')] bg-cover bg-center flex justify-center ">
      <div className="sm:w-96 mx-auto mt-20">
        <Input
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
      </div>
    </div>
  );
}
