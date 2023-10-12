import { About, MenuCard, Navbar, Profile } from "@/components";

export default function page() {
  return (
    <>
      <div className="flex justify-between items-center px-24 py-2">
        <Navbar />
      </div>
      <div className="grid grid-cols-2">
        <div className="px-24 pt-16">
          <Profile />
        </div>
        <div className="fixed right-24">
          <MenuCard />
          <About />
        </div>
      </div>
    </>
  );
}
