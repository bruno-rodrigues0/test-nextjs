import { headers } from "next/headers";

export default function Header(){
    return (
        <header className="flex p-8 h-32 justify-between bg-zinc-900 items-center">
            <div className="logo">
                <img src="" alt="Logo do site" />
            </div>
            <nav>
                <ul className="flex text-white gap-6">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}