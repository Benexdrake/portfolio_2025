import Navbar from "./navbar/navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <Navbar/>
        <div className="main">
          <main>{children}</main>
        </div>
      </div>
    );
  }